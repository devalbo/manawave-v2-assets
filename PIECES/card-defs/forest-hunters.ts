import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const ForestHuntersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "MW Forest Hunters",
  totemId: 'ox',
  text: "TODO: fill in text for Forest Hunters",
  modes: [
    {
      manaClaimsRequired: 0,
      modeText: "Add 2 <::population-increase-counter::> to Clan.",
    },
    {
      manaClaimsRequired: 2,
      modeText: "Add 3 <::population-increase-counter::> to Clan.",
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR FOREST HUNTERS");
      return { };
    },
  },
};
