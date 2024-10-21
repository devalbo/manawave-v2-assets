import { ManaflowPointProcResult } from "../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows-types";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const ClubWieldersCardDef: FamilyCardDefinition = {
  title: "Club Wielders",
  totemId: 'tiger',
  text: "TODO: fill in text for Club Wielders",
  modes: [
    {
      manaCost: 0,
      modeText: "Add 2 <::attack-counter::> to Clan.",
    },
    {
      manaCost: 2,
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
