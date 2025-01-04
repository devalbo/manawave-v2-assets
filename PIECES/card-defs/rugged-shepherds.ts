import { MwFamilyCardIds } from "@mw-assets/mw-asset-ids/manawave-family-ids";
import { MwMarkerType } from "../../mw-v2-protobufs/protofiles-out/manawave-types";
import { MvmAmountQueryFunctionId } from "../../mw-v2-protobufs/protofiles-out/manawave-vm";
import { 
  createAddMarkersToMyClanForCountFunctionAmountInstructionSet,
  createAddMarkersToMyTribeForCountFunctionAmountInstructionSet,
  createRemoveMarkersFromMyTribeForCountFunctionAmountInstructionSet
} from "../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic, IModePrintSettings } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const RuggedShepherdsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Rugged Shepherds",
  newName: "Scions of Shug, Uniter of Kin",
  totemId: 'ox',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.RuggedShepherds,
  },
  text: "TODO: fill in text for Rugged Shepherds",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::population-increase-counter::> to Clan for each adjacent Family.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCard,
          MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
        ),
      ]),
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 2 <::population-increase-counter::> to Clan for each adjacent Family. Reduce total by 1 for each <::soulstain-token::> your Tribe has.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCard,
          MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
        ),
        ...createAddMarkersToMyTribeForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCard,
          MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
        ),
        ...createRemoveMarkersFromMyTribeForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfMySoulstainTokens,
          MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
        ),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: { },
};
