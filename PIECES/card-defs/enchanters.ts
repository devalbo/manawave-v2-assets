import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const EnchantersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Enchanters",
  totemId: 'spirits',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.Enchanters,
  },
  text: "TODO: fill in text for Enchanters",
  modes: [
    {
      manaClaimsRequired: 0,
      modeText: "Add 1 <::mana-counter::> to Tribe, plus 1 for each adjacent Family.",
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Enchanters");
      return { };
    },
  },  
};
