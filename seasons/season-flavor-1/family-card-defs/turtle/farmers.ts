import { MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { MvmAmountQueryFunctionId } from "../../../../mw-v2-protobufs/protofiles-out/manawave-vm";
import { createAddMarkersToMyClanForCountFunctionAmountInstructionSet, createAddMarkersToMyTribeForCountFunctionAmountInstructionSet, createNoOpInstructionSet } from "../../../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_FLAVOR_1_PBID } from "../../../season-id-defs";
import { FamilyCardDefinition } from "../../../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic, IModePrintSettings } from "../../../../PIECES/mw-card-data";
import { mapToIndexedModes } from "../../../../PIECES/mw-mode-utils";
import { MwFamilyCardIds } from "../../../../mw-asset-ids/manawave-family-ids";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const FarmersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Farmers",
  newName: "Blue Kelp Farmers of Armish",
  totemId: 'turtle',
  familyCardDefPbId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.Farmers,
  },
  text: "TODO: fill in text for Farmers",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "No effect",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createNoOpInstructionSet(),
      ]),
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 2 <::population-increase-counter::> to Clan for each adjacent E-aligned Family.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCardWithSameAlignment,
          MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
        ),
        ...createAddMarkersToMyClanForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCardWithSameAlignment,
          MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
        ),
      ]),
    },
    {
      numManalithClaimsToActivate: 4,
      modeText: "Add 1 <::population-increase-counter::> to Tribe for each adjacent E-aligned Family.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCardWithSameAlignment,
          MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
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
