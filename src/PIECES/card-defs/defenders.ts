import { IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


export const DefendersCardData: IMwCardData = {
  title: "Defenders",
  totems: ['tiger'] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  modes: [
    {
      manaCost: 0,
      modeText: "Add 3 <::shield-counter::> to adjacent Clans. Add 1 <::population-sacrifice-counter::> to Clan.",
    },
    {
      manaCost: 2,
      modeText: "Add 5 <::shield-counter::> to Clan. Add 1 <::population-sacrifice-counter::> to adjacent Clans. Take 1 <::soulstain-token::>.",
    },
  ],
};
