import { MwFamilyCardIds } from "../../../../mw-asset-ids/manawave-family-ids";
import { createAddMarkersToMyClanInstructionSet, createAddMarkersToMyClanOnConditionInstructionSet, createAddMarkersToMyTribeInstructionSet, createAddMarkersToMyTribeOnConditionInstructionSet } from "../../../../manawave-virtual-machine/mvm-instructions-factory";
import { MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { SEASON_FLAVOR_1_PBID } from "../../../season-id-defs";
import { FamilyCardDefinition } from "../../../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic, IModePrintSettings } from "../../../../PIECES/mw-card-data";
  import { mapToIndexedModes } from "../../../../PIECES/mw-mode-utils";
import { MvmBoolQueryFunctionId } from "../../../../mw-v2-protobufs/protofiles-out/manawave-vm";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const TemplarsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Templars",
  newName: "Sharkriders of Kolmano",
  totemId: 'shark',
  familyCardDefPbId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.Templars,
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
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  // gameLogic: { },
};
