import { IModePrintSettings } from "../mw-card-data"
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { ManaflowPointProcResult } from "../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows-types";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}

export const SoylentGreenFarmersCardDef: FamilyCardDefinition = {
  title: "Soylent Green Farmers",
  totemId: 'ox',
  text: "TODO: fill in text for Soylent Green Farmers",
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::population-increase-counter::> to Clan.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 1,
      modeText: "Add 2 <::population-increase-counter::> to Clan. Add 1 <::population-increase-counter::> to Tribe. Add 1 <::population-sacrifice-counter::> to Clan. Take 1 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 4,
      modeText: "Add 4 <::population-increase-counter::> to Clan. Add 2 <::population-increase-counter::> to Tribe. Add 2 <::population-sacrifice-counter::> to Clan. Take 2 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Soylent Green Farmers");
      return { };
    },
  },
};
