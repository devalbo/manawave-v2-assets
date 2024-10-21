import { ManaflowPointProcResult } from "../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows-types";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


export const ShieldCraftersCardDef: FamilyCardDefinition = {
  title: "Shield Crafters",
  totemId: 'tiger',
  text: "TODO: fill in text for Shield Crafters",
  modes: [
    {
      manaCost: 0,
      modeText: "Add 2 <::shield-counter::> to Clan.",
    },
    {
      manaCost: 2,
      modeText: "Add 2 <::shield-counter::> to Clan. Add 3 <::shield-counter::> to Tribe.",
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Shield Crafters");
      return { };
    },
  },
};
