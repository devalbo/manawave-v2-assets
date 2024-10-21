import { ManaflowPointProcResult } from "../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows-types";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const EnchantersCardDef: FamilyCardDefinition = {
  title: "Enchanters",
  totemId: 'spirits',
  text: "TODO: fill in text for Enchanters",
  modes: [
    {
      manaCost: 0,
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
