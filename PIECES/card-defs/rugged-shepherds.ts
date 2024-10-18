import { IModePrintSettings, IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const RuggedShepherdsCardData: IMwCardData = {
  title: "Rugged Shepherds",
  totems: ['ox'] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
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
};
