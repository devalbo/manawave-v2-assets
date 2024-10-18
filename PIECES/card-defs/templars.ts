import { IModePrintSettings, IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const TemplarsCardData: IMwCardData = {
  title: "Templars",
  totems: ['tiger'] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::attack-counter::> to Clan. Add 1 <::shield-counter::> to Clan.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 1,
      modeText: "Add 3 <::shield-counter::> to Clan. Add 1 <::attack-counter::> to Tribe. Reduce each by 1 if your Tribe has any <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 1,
      modeText: "Add 3 <::attack-counter::> to Clan. Add 1 <::shield-counter::> to Tribe. Reduce each by 1 if your Tribe has any <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
    },
  ],
};
