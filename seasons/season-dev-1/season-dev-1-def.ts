import { DefaultMonuments, TotemMonuments } from "./monuments";
import { INoPickFamilyEffect, ISeason } from "../../type-defs/season-defs";
import { getPlayerCardsForTotem } from "../../type-defs/totem-defs";
import { SEASON_DEV_1_PBID } from "../season-id-defs";
import { ClanOfAttackData } from "./clans/clan-of-attack";
import { ClanOfDefenseData } from "./clans/clan-of-defense";
import { ClanOfMagicData } from "./clans/clan-of-magic";
import { DEFENSE_TOTEM_DEF } from "./totems/sd1_defense";
import { MAGIC_TOTEM_DEF } from "./totems/sd1_magic";
import { ATTACK_TOTEM_DEF } from "./totems/sd1_attack";


const allTotemChoices = [
  ATTACK_TOTEM_DEF,
  DEFENSE_TOTEM_DEF,
  MAGIC_TOTEM_DEF,
];


const allFamilyCards = [
  ...getPlayerCardsForTotem(ATTACK_TOTEM_DEF, "OPT"),
  ...getPlayerCardsForTotem(ATTACK_TOTEM_DEF, "OSB"),

  ...getPlayerCardsForTotem(DEFENSE_TOTEM_DEF, "OPT"),
  ...getPlayerCardsForTotem(DEFENSE_TOTEM_DEF, "OSB"),
  
  ...getPlayerCardsForTotem(MAGIC_TOTEM_DEF, "OPT"),
  ...getPlayerCardsForTotem(MAGIC_TOTEM_DEF, "OSB"),
];

const SeasonDev1_NoPickFamilyEffect: INoPickFamilyEffect = {
  title: "No Family",
  text: "Add 2 population tokens to clan.",
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  }
  // onFamilyCardPlacement: () => {    // run this when card is placed by player on board
  //   return {
  //     numPopulationTokensToAddToClan: 2,
  //   }
  // }
}


export const SeasonDev1: ISeason = {
  seasonName: "Season Dev - 1",
  seasonDescription: "Development season for testing",

  seasonId: SEASON_DEV_1_PBID,

  allTotemChoices,

  defaultMonumentChoices: DefaultMonuments,
  totemMonumentChoices: TotemMonuments,

  allMonumentChoices: [
    ...DefaultMonuments,
    ...TotemMonuments,
  ],

  allClanDefinitions: [
    ClanOfAttackData,
    ClanOfDefenseData,
    ClanOfMagicData,
  ],

  allFamilyCards,

  noPickFamilyEffect: SeasonDev1_NoPickFamilyEffect,
};
