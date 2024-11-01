import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
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
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 5 <::attack-counter::> to Clan. Reduce total by 1 for each <::soulstain-token::> your Tribe has. Add 1 <::population-sacrifice-counter::> to Clan.",
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Martyrs");
      return { };
    },
  },
};
