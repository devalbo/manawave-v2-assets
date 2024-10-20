import { ManaflowPointProcResult } from "../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { IModePrintSettings } from "../mw-card-data";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const RuggedShepherdsCardDef: FamilyCardDefinition = {
  title: "Rugged Shepherds",
  totemId: 'ox',
  text: "TODO: fill in text for Rugged Shepherds",
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::population-increase-counter::> to Clan for each adjacent Family.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 2,
      modeText: "Add 2 <::population-increase-counter::> to Clan for each adjacent Family. Reduce total by 1 for each <::soulstain-token::> your Tribe has.",
      modePrintSettings: ModePrintSettings,
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Rugged Shepherds");
      return { };
    },
  },
};
