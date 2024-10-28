import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { mapToIndexedModes } from "../mw-mode-utils";


export const DefendersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Defenders",
  totemId: 'tiger',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.Defenders,
  },
  text: "TODO: fill in text for Defenders",
  modes: mapToIndexedModes([
    {
      manalithClaimsRequired: 0,
      modeText: "Add 3 <::shield-counter::> to adjacent Clans. Add 1 <::population-sacrifice-counter::> to Clan.",
    },
    {
      manalithClaimsRequired: 2,
      modeText: "Add 5 <::shield-counter::> to Clan. Add 1 <::population-sacrifice-counter::> to adjacent Clans. Take 1 <::soulstain-token::>.",
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Defenders");
      return { };
    },
  },
};
