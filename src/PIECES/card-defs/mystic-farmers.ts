import { IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


export const MysticFarmersCardData: IMwCardData = {
  title: "Mystic Farmers",
  totems: ['ox'] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::population-increase-counter::> to Clan.",
    },
    {
      manaCost: 1,
      modeText: "Execute M0. Add 1 <::mana-counter::> to Clan.",
    },
    {
      manaCost: 2,
      modeText: "Execute M0. Add 1 <::mana-counter::> to Tribe.",
    },
  ],
};
