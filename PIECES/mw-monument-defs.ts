import { MonumentOfDiversityData } from "../seasons/season-zero-1/monument-defs/monument-of-diversity";
import { MonumentOfJusticeData } from "../seasons/season-zero-1/monument-defs/monument-of-justice";
import { MonumentOfLifeData } from "../seasons/season-zero-1/monument-defs/monument-of-life";
import { MonumentOfMagicData } from "../seasons/season-zero-1/monument-defs/monument-of-magic";
import { MonumentOfNatureData } from "../seasons/season-zero-1/monument-defs/monument-of-nature";
import { MonumentOfPeaceData } from "../seasons/season-zero-1/monument-defs/monument-of-peace";
import { MonumentOfSacrificeData } from "../seasons/season-zero-1/monument-defs/monument-of-sacrifice";
import { MonumentOfTranquilityData } from "../seasons/season-zero-1/monument-defs/monument-of-tranquility";
import { MonumentOfWarData } from "../seasons/season-zero-1/monument-defs/monument-of-war";
import { IMwMonumentData } from "./MwMonumentTemplate";


export const getMonumentDefs = (): IMwMonumentData[] => {

  const retVal = [
    MonumentOfLifeData,
    MonumentOfSacrificeData,
    MonumentOfDiversityData,

    MonumentOfJusticeData,
    MonumentOfTranquilityData,
    MonumentOfMagicData,
    MonumentOfNatureData,
    MonumentOfWarData,
    MonumentOfPeaceData,
  ];

  return retVal;
}
