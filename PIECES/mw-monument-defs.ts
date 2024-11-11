import { MonumentOfDiversityData } from "../seasons/season-zero-1/monument-defs/monument-of-diversity";
import { MonumentOfJusticeData } from "../seasons/season-zero-1/monument-defs/monument-of-justice";
import { MonumentOfLifeData } from "../seasons/season-zero-1/monument-defs/monument-of-life";
import { MonumentOfMagicData } from "../seasons/season-zero-1/monument-defs/monument-of-magic";
import { MonumentOfNatureData } from "../seasons/season-zero-1/monument-defs/monument-of-nature";
import { MonumentOfPeaceData } from "../seasons/season-zero-1/monument-defs/monument-of-peace";
import { MonumentOfSacrificeData } from "../seasons/season-zero-1/monument-defs/monument-of-sacrifice";
import { MonumentOfTranquilityData } from "../seasons/season-zero-1/monument-defs/monument-of-tranquility";
import { MonumentOfWarData } from "../seasons/season-zero-1/monument-defs/monument-of-war";
import { MonumentCard } from "../type-defs/monument-defs";
import { IMonumentPrintSettings, IMwMonumentData } from "./MwMonumentTemplate";


const createMonumentCardWithPrintSettings = (
  monumentData: MonumentCard,
  monumentPrintSettings: IMonumentPrintSettings
): IMwMonumentData => {

  const retVal: IMwMonumentData = {
    ...monumentData,
    monumentPrintSettings,
  }

  return retVal;
}

const MonumentPrintSettings_FontSize12_ImageSize12 = {
  fontSize: 12, 
  imageSize: 12,
}

const MonumentPrintSettings_FontSize13_ImageSize13 = {
  fontSize: 13,
  imageSize: 13,
}

const MonumentPrintSettings_FontSize14_ImageSize14 = {
  fontSize: 14,
  imageSize: 14,
}


export const getMonumentDefs = (): IMwMonumentData[] => {

  const retVal = [
    MonumentOfLifeData,
    MonumentOfSacrificeData,
    MonumentOfDiversityData,

    createMonumentCardWithPrintSettings(
      MonumentOfJusticeData,
      MonumentPrintSettings_FontSize12_ImageSize12,
    ),
    createMonumentCardWithPrintSettings(
      MonumentOfTranquilityData,
      MonumentPrintSettings_FontSize12_ImageSize12,
    ),
    createMonumentCardWithPrintSettings(
      MonumentOfMagicData,
      MonumentPrintSettings_FontSize12_ImageSize12,
    ),
    createMonumentCardWithPrintSettings(
      MonumentOfNatureData,
      MonumentPrintSettings_FontSize12_ImageSize12,
    ),
    createMonumentCardWithPrintSettings(
      MonumentOfWarData,
      MonumentPrintSettings_FontSize12_ImageSize12,
    ),
    createMonumentCardWithPrintSettings(
      MonumentOfPeaceData,
      MonumentPrintSettings_FontSize12_ImageSize12,
    ),
  ];

  return retVal;
}
