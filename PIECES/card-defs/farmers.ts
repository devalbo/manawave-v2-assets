import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { IModePrintSettings } from "../mw-card-data";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const FarmersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Farmers",
  totemId: 'ox',
  text: "TODO: fill in text for Farmers",
  modes: [
    {
      manaCost: 0,
      modeText: "No effect",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 2,
      modeText: "Add 2 <::population-increase-counter::> to Clan for each adjacent E-aligned Family.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 4,
      modeText: "Add 1 <::population-increase-counter::> to Tribe for each adjacent E-aligned Family.",
      modePrintSettings: ModePrintSettings,
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Farmers");
      return { };
    },
  },
};
