import { IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


export const GrasslandShepherdsCardData: IMwCardData = {
  title: "Grassland Shepherds",
  totems: ['ox'] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::population-increase-counter::> to Tribe.",
    },
  ],
};
