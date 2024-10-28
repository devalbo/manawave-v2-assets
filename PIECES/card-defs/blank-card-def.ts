import { IMwCardData } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";
import { Totems } from "../totems";


export const BlankCardDefCardData: IMwCardData = {
  title: "",
  totems: [] as Totems[],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  modes: mapToIndexedModes([
    {
      manalithClaimsRequired: 0,
      modeText: "",
    },
    {
      manalithClaimsRequired: 0,
      modeText: "",
    },
    {
      manalithClaimsRequired: 0,
      modeText: "",
    },
  ]),
};
