import { ClanOfDiversityData } from "./clan-card-defs/clan-of-diversity";
import { ClanOfLifeData } from "./clan-card-defs/clan-of-life";
import { ClanOfSacrificeData } from "./clan-card-defs/clan-of-sacrifice";
import { IMwClanData } from "./MwClanTemplate";


export const getClanDefs = (): IMwClanData[] => {

  const retVal = [
    ClanOfSacrificeData,
    ClanOfLifeData,
    ClanOfDiversityData,
  ];

  return retVal;
}
