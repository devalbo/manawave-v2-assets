import { BlankCardDefCardData } from "./card-defs/blank-card-def";
import { IMwCardData } from "./mw-card-data";


export const getBlankCardDefs = (): IMwCardData[] => {

  const retVal = [
    BlankCardDefCardData,
    BlankCardDefCardData,
    BlankCardDefCardData,

    BlankCardDefCardData,
    BlankCardDefCardData,
    BlankCardDefCardData,

    BlankCardDefCardData,
    BlankCardDefCardData,
    BlankCardDefCardData,
  ];

  return retVal;
}
