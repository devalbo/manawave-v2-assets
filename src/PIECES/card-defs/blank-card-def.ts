import { IMwCardData } from "../mw-card-data";
import { Totems } from "../totems";


export const BlankCardDefCardData: IMwCardData = {
  title: "",
  totems: [] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  modes: [
    {
      manaCost: 0,
      modeText: "",
    },
    {
      manaCost: 0,
      modeText: "",
    },
    {
      manaCost: 0,
      modeText: "",
    },
  ],
};
