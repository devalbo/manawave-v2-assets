import { ManaflowPointProcResult } from "../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows-types";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const SlaversCardDef: FamilyCardDefinition = {
  title: "Slavers",
  totemId: 'tiger',
  text: "TODO: fill in text for Slavers",
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::attack-counter::> to Tribe.",
    },
    {
      manaCost: 2,
      modeText: "Add 1 <::attack-counter::> to Tribe for each <::population-token::> on opposing Clan. Take 1 <::soulstain-token::>.",
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Slavers");
      return { };
    },
  },
};
