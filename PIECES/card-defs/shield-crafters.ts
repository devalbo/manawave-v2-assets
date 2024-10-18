import { IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


export const ShieldCraftersCardData: IMwCardData = {
  title: "Shield Crafters",
  totems: ['tiger'] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  modes: [
    {
      manaCost: 0,
      modeText: "Add 2 <::shield-counter::> to Clan.",
    },
    {
      manaCost: 2,
      modeText: "Add 2 <::shield-counter::> to Clan. Add 3 <::shield-counter::> to Tribe.",
    },
  ],
};
