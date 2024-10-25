import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const GrasslandShepherdsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Grassland Shepherds",
  totemId: 'ox',
  text: "TODO: fill in text for Grassland Shepherds",
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::population-increase-counter::> to Tribe.",
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Grassland Shepherds");
      return { };
    },
  },
};
