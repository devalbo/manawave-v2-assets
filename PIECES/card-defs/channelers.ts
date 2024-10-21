import { ManaflowPointProcResult } from "../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows-types";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { IModePrintSettings } from "../mw-card-data";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const ChannelersCardDef: FamilyCardDefinition = {
  title: "Channelers",
  totemId: 'spirits',
  text: "TODO: fill in text for Channelers",
  modes: [
    {
      manaCost: 0,
      modeText: "No effect.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 2,
      modeText: "Add 1 <::mana-counter::> to Tribe for each adjacent X-aligned Family. Reduce total by 1 for each <::soulstain-token::> your Tribe has.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 4,
      modeText: "Add 2 <::mana-counter::> to Tribe for each adjacent X-aligned Family. Reduce total by 1 for each <::soulstain-token::> your Tribe has.",
      modePrintSettings: ModePrintSettings,
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Channelers");
      return { };
    },
  },
};
