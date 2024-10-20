import { ManaflowPointProcResult } from "../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const DefendersCardDef: FamilyCardDefinition = {
  title: "Defenders",
  totemId: 'tiger',
  text: "TODO: fill in text for Defenders",
  modes: [
    {
      manaCost: 0,
      modeText: "Add 3 <::shield-counter::> to adjacent Clans. Add 1 <::population-sacrifice-counter::> to Clan.",
    },
    {
      manaCost: 2,
      modeText: "Add 5 <::shield-counter::> to Clan. Add 1 <::population-sacrifice-counter::> to adjacent Clans. Take 1 <::soulstain-token::>.",
    },
  ],
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
