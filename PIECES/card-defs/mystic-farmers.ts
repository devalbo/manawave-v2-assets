import { ManaflowPointProcResult } from "../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const MysticFarmersCardDef: FamilyCardDefinition = {
  title: "Mystic Farmers",
  totemId: 'ox',
  text: "TODO: fill in text for Mystic Farmers",
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::population-increase-counter::> to Clan.",
    },
    {
      manaCost: 1,
      modeText: "Execute M0. Add 1 <::mana-counter::> to Clan.",
    },
    {
      manaCost: 2,
      modeText: "Execute M0. Add 1 <::mana-counter::> to Tribe.",
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Mystic Farmers");
      return { };
    },
  },
};
