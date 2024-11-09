import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { MwMarkerType } from "../../../protobufs/protofiles-out/manawave-types";
import { createAddMarkersToMyClanInstructionSet } from "../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic, UnimplementedFamilyCardModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


export const MartyrsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Martyrs",
  totemId: 'tiger',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.Martyrs,
  },
  text: "TODO: fill in text for Martyrs",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::attack-counter::> to Clan.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, 1),
      ]),
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 5 <::attack-counter::> to Clan. Reduce total by 1 for each <::soulstain-token::> your Tribe has. Add 1 <::population-sacrifice-counter::> to Clan.",
      // TODO: figure out how to implement reduction by soulstain tokens
      modeLogic: UnimplementedFamilyCardModeLogic,
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: { },
};
