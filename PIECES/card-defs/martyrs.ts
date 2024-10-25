import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const MartyrsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Martyrs",
  totemId: 'tiger',
  text: "TODO: fill in text for Martyrs",
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::attack-counter::> to Clan.",
    },
    {
      manaCost: 2,
      modeText: "Add 5 <::attack-counter::> to Clan. Reduce total by 1 for each <::soulstain-token::> your Tribe has. Add 1 <::population-sacrifice-counter::> to Clan.",
    },
  ],
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
