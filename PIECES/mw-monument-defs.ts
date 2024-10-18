import { IMwMonumentData } from "./MwMonumentTemplate";
import { MonumentOfDiversityData } from "./monument-defs/monument-of-diversity";
import { MonumentOfJusticeData } from "./monument-defs/monument-of-justice";
import { MonumentOfLifeData } from "./monument-defs/monument-of-life";
import { MonumentOfMagicData } from "./monument-defs/monument-of-magic";
import { MonumentOfNatureData } from "./monument-defs/monument-of-nature";
import { MonumentOfPeaceData } from "./monument-defs/monument-of-peace";
import { MonumentOfSacrificeData } from "./monument-defs/monument-of-sacrifice";
import { MonumentOfTranquilityData } from "./monument-defs/monument-of-tranquility";
import { MonumentOfWarData } from "./monument-defs/monument-of-war";


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
