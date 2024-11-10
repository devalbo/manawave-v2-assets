import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { createAddMarkersToMyClanInstructionSet, createAddMarkersToMyClanOnConditionInstructionSet, createAddMarkersToMyTribeInstructionSet, createAddMarkersToMyTribeOnConditionInstructionSet } from "../../manawave-virtual-machine/mvm-instructions-factory";
import { MwMarkerType } from "../../../protobufs/protofiles-out/manawave-types";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic, IModePrintSettings } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";
import { MvmBoolQueryFunctionId } from "../../../protobufs/protofiles-out/manawave-vm";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const TemplarsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Templars",
  totemId: 'tiger',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.Templars,
  },
  text: "TODO: fill in text for Templars",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::attack-counter::> to Clan. Add 1 <::shield-counter::> to Clan.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, 1),
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, 1),
      ]),
    },
    {
      numManalithClaimsToActivate: 1,
      modeText: "Add 3 <::shield-counter::> to Clan. Add 1 <::attack-counter::> to Tribe. Reduce each by 1 if your Tribe has any <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, 3),
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, 1),

        ...createAddMarkersToMyClanOnConditionInstructionSet(
          MvmBoolQueryFunctionId.MvmBoolQueryFunction_DoesMyTribeHaveAnySoulstainTokens,
          MwMarkerType.MwMarkerType_ShieldCounter, -1),
        ...createAddMarkersToMyTribeOnConditionInstructionSet(
          MvmBoolQueryFunctionId.MvmBoolQueryFunction_DoesMyTribeHaveAnySoulstainTokens,
          MwMarkerType.MwMarkerType_AttackCounter, -1),

        // ...createAddCountersToMyClanModifiedByFunctionAmountInstructionSet(
        //   MwMarkerType.MwMarkerType_ShieldCounter, 3, MvmFunctionId.MvmFunction_ReturnNegative1IfAnySoulstain),
        // ...createAddCountersToMyClanModifiedByFunctionAmountInstructionSet(
        //   MwMarkerType.MwMarkerType_AttackCounter, 1, MvmFunctionId.MvmFunction_ReturnNegative1IfAnySoulstain),
      ]),
    },
    {
      numManalithClaimsToActivate: 1,
      modeText: "Add 3 <::attack-counter::> to Clan. Add 1 <::shield-counter::> to Tribe. Reduce each by 1 if your Tribe has any <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, 3),
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, 1),

        ...createAddMarkersToMyClanOnConditionInstructionSet(
          MvmBoolQueryFunctionId.MvmBoolQueryFunction_DoesMyTribeHaveAnySoulstainTokens,
          MwMarkerType.MwMarkerType_AttackCounter, -1),
        ...createAddMarkersToMyTribeOnConditionInstructionSet(
          MvmBoolQueryFunctionId.MvmBoolQueryFunction_DoesMyTribeHaveAnySoulstainTokens,
          MwMarkerType.MwMarkerType_ShieldCounter, -1),

        // ...createAddCountersToMyClanModifiedByFunctionAmountInstructionSet(
        //   MwMarkerType.MwMarkerType_AttackCounter, 3, MvmFunctionId.MvmFunction_ReturnNegative1IfAnySoulstain),
        // ...createAddCountersToMyClanModifiedByFunctionAmountInstructionSet(
        //   MwMarkerType.MwMarkerType_ShieldCounter, 1, MvmFunctionId.MvmFunction_ReturnNegative1IfAnySoulstain),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: { },
};
