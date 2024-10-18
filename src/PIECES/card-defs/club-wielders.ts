import { IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


export const ClubWieldersCardData: IMwCardData = {
  title: "Club Wielders",
  totems: ['tiger'] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  modes: [
    {
      manaCost: 0,
      modeText: "Add 2 <::attack-counter::> to Clan.",
    },
    {
      manaCost: 2,
      modeText: "Add 2 <::attack-counter::> to Clan. Add 2 <::attack-counter::> to Tribe.",
    },
  ],
};
