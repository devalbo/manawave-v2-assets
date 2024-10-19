import { IModePrintSettings, IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const SacrificersCardData: IMwCardData = {
  title: "Sacrificers",
  totems: ['spirits'] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 1,
      modeText: "Add 1 <::mana-counter::> to Tribe for each adjacent Family. Add 1 <::population-sacrifice-counter::> to Clan. Take 1 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 4,
      modeText: "Add 1 <::mana-counter::> to Tribe. Add 2 <::mana-counter::> for each adjacent Family. Add 2 <::population-sacrifice-counter::> to Clan. Take 2 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
    },
  ],
};