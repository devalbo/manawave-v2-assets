import { IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";
import { IModePrintSettings } from "../mw-card-data"


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}

export const SoylentGreenFarmersCardData: IMwCardData = {
  title: "Soylent Green Farmers",
  totems: ['ox', 'demon'] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
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
};
