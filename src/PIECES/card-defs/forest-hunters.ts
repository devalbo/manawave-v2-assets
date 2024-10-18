import { IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


export const ForestHuntersCardData: IMwCardData = {
  title: "MW Forest Hunters",
  totems: ['ox'] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  modes: [
    {
      manaCost: 0,
      modeText: "Add 2 <::population-increase-counter::> to Clan.",
    },
    {
      manaCost: 2,
      modeText: "Add 3 <::population-increase-counter::> to Clan.",
    },
  ],
};
