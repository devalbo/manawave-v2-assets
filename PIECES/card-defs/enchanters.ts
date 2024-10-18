import { IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


export const EnchantersCardData: IMwCardData = {
  title: "Enchanters",
  totems: ['spirits'] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::mana-counter::> to Tribe, plus 1 for each adjacent Family.",
    },
  ],
};
