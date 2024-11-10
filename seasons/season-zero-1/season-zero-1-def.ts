import { INoPickFamilyEffect, ISeason } from "../../type-defs/season-defs";
import { getPlayerCardsForTotem } from "../../type-defs/totem-defs";
import { SEASON_ZERO_1_PBID } from "../season-id-defs";
import { ClanOfDiversityData } from "./clans/clan-of-diversity";
import { ClanOfLifeData } from "./clans/clan-of-life";
import { ClanOfSacrificeData } from "./clans/clan-of-sacrifice";
import { DefaultMonuments, TotemMonuments } from "./monuments";
import { OX_TOTEM_DEF } from "./totems/sz1_ox";
import { SPIRITS_TOTEM_DEF } from "./totems/sz1_spirits";
import { TIGER_TOTEM_DEF } from "./totems/sz1_tiger";


const allTotemChoices = [
  TIGER_TOTEM_DEF,
  OX_TOTEM_DEF,
  SPIRITS_TOTEM_DEF,
];


const allFamilyCards = [
  ...getPlayerCardsForTotem(TIGER_TOTEM_DEF, "OPT"),
  ...getPlayerCardsForTotem(TIGER_TOTEM_DEF, "OSB"),

  ...getPlayerCardsForTotem(OX_TOTEM_DEF, "OPT"),
  ...getPlayerCardsForTotem(OX_TOTEM_DEF, "OSB"),
  
  ...getPlayerCardsForTotem(SPIRITS_TOTEM_DEF, "OPT"),
  ...getPlayerCardsForTotem(SPIRITS_TOTEM_DEF, "OSB"),
];

const SeasonZero1_NoPickFamilyEffect: INoPickFamilyEffect = {
  title: "No Family",
  text: "Add 2 population tokens to clan.",
  onFamilyCardPlacement: () => {    // run this when card is placed by player on board
    return {
      numPopulationTokensToAddToClan: 2,
    }
  }
}


export const SeasonZero1: ISeason = {
  seasonName: "Season Zero - 1",
  seasonDescription: "First draft development season with the card (not hex) based version",

  seasonId: SEASON_ZERO_1_PBID,

  allTotemChoices,

  defaultMonumentChoices: DefaultMonuments,
  totemMonumentChoices: TotemMonuments,

  allMonumentChoices: [
    ...DefaultMonuments,
    ...TotemMonuments,
  ],

  allClanDefinitions: [
    ClanOfDiversityData,
    ClanOfLifeData,
    ClanOfSacrificeData,
  ],

  allFamilyCards,

  noPickFamilyEffect: SeasonZero1_NoPickFamilyEffect,
};
