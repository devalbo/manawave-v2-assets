import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const ClubWieldersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Club Wielders",
  totemId: 'tiger',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.ClubWielders,
  },
  text: "TODO: fill in text for Club Wielders",
  modes: [
    {
      manaClaimsRequired: 0,
      modeText: "Add 2 <::attack-counter::> to Clan.",
    },
    {
      manaClaimsRequired: 2,
      modeText: "Add 2 <::attack-counter::> to Clan. Add 2 <::attack-counter::> to Tribe.",
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Club Wielders");
      return { };
    },
  },
};
