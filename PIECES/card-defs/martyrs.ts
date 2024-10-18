import { IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


export const MartyrsCardData: IMwCardData = {
  title: "Martyrs",
  totems: ['tiger'] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::attack-counter::> to Clan.",
    },
    {
      manaCost: 2,
      modeText: "Add 5 <::attack-counter::> to Clan. Reduce total by 1 for each <::soulstain-token::> your Tribe has. Add 1 <::population-sacrifice-counter::> to Clan.",
    },
  ],
};
