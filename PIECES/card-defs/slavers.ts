import { IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


export const SlaversCardData: IMwCardData = {
  title: "Slavers",
  totems: ['tiger'] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::attack-counter::> to Tribe.",
    },
    {
      manaCost: 2,
      modeText: "Add 1 <::attack-counter::> to Tribe for each <::population-token::> on opposing Clan. Take 1 <::soulstain-token::>.",
    },
  ],
};
