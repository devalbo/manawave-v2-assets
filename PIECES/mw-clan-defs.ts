import { IMwClanData } from "./MwClanTemplate";
import { ClanOfDiversityData } from "../seasons/season-zero-1/clans/clan-of-diversity";
import { ClanOfLifeData } from "../seasons/season-zero-1/clans/clan-of-life";
import { ClanOfSacrificeData } from "../seasons/season-zero-1/clans/clan-of-sacrifice";


export const getClanDefs = (): IMwClanData[] => {

  const retVal = [
    ClanOfSacrificeData,
    ClanOfLifeData,
    ClanOfDiversityData,
  ];

  return retVal;
}
