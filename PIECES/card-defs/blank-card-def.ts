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
      manaClaimsRequired: 0,
      modeText: "",
    },
    {
      manaClaimsRequired: 0,
      modeText: "",
    },
    {
      manaClaimsRequired: 0,
      modeText: "",
    },
  ],
};
