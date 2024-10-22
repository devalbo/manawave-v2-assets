import { ManaflowPointProcResult } from "../../../game-play/board-data/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const ManaChannelersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Mana Channelers",
  totemId: 'spirits',
  text: "TODO: fill in text for Mana Channelers",
  modes: [
    {
      manaCost: 0,
      modeText: "Add 2 <::mana-counter::> to Tribe.",
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Mana Channelers");
      return { };
    },
  }, 
};
