import { MwFamilyCardIds } from "../../../../mw-asset-ids/manawave-family-ids";
import { MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { MvmAmountQueryFunctionId } from "../../../../mw-v2-protobufs/protofiles-out/manawave-vm";
import { 
  createAddMarkersToMyClanForCountFunctionAmountInstructionSet,
  createAddMarkersToMyTribeForCountFunctionAmountInstructionSet,
  createRemoveMarkersFromMyTribeForCountFunctionAmountInstructionSet
} from "../../../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_FLAVOR_1_PBID } from "../../../season-id-defs";
import { FamilyCardDefinition } from "../../../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic, IModePrintSettings } from "../../../../PIECES/mw-card-data";
import { mapToIndexedModes } from "../../../../PIECES/mw-mode-utils";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const RuggedShepherdsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Rugged Shepherds",
  newName: "Scions of Shug, Crabwrangler",
  totemId: 'turtle',
  familyCardDefPbId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.RuggedShepherds,
  },
  text: "TODO: fill in text for Rugged Shepherds",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::attack-counter::> to Clan for each adjacent Family.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCard,
          MwMarkerType.MwMarkerType_AttackCounter,
        ),
      ]),
    },
    {
      numManalithClaimsToActivate: 3,
      modeText: "Add 1 <::attack-counter::> to Clan for each adjacent Family. Add 1 <::shield-counter::> to Clan for each adjacent Family. Add 1 <::attack-counter::> to Tribe for each adjacent Family.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCard,
          MwMarkerType.MwMarkerType_AttackCounter,
        ),
        ...createAddMarkersToMyClanForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCard,
          MwMarkerType.MwMarkerType_ShieldCounter,
        ),
        ...createAddMarkersToMyTribeForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCard,
          MwMarkerType.MwMarkerType_AttackCounter,
        ),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  // gameLogic: { },
};
