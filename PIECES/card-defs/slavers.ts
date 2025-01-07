import { MwFamilyCardIds } from "@mw-assets/mw-asset-ids/manawave-family-ids";
import { MwMarkerType } from "../../mw-v2-protobufs/protofiles-out/manawave-types";
import { MvmAmountQueryFunctionId } from "../../mw-v2-protobufs/protofiles-out/manawave-vm";
import { createAddMarkersToMyTribeForCountFunctionAmountInstructionSet, createAddMarkersToMyTribeInstructionSet } from "../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


export const SlaversCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Slavers",
  newName: "Scions of Slavur, Destroyer of Clans",
  totemId: 'tiger',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.Slavers,
  },
  text: "TODO: fill in text for Slavers",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::attack-counter::> to Tribe.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, 1),
      ]),
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 1 <::attack-counter::> to Tribe for each <::population-token::> on opposing Clan. Take 1 <::soulstain-token::>.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfPopulationTokensOnOpposingClan,
          MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
        ),
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_SoulstainToken, 1),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  // gameLogic: { },
};
