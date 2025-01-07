import { DefaultMonuments, TotemMonuments } from "./monuments";
import { INoPickFamilyEffect, ISeason } from "../../type-defs/season-defs";
import { getPlayerCardsForTotem } from "../../type-defs/totem-defs";
import { SEASON_FLAVOR_1_PBID } from "../season-id-defs";
import { ClanOfAttackData } from "./clans/clan-of-attack";
import { ClanOfDefenseData } from "./clans/clan-of-defense";
import { ClanOfMagicData } from "./clans/clan-of-magic";
import { DEFENSE_TOTEM_DEF } from "./totems/sf1_ox";
import { MAGIC_TOTEM_DEF } from "./totems/sf1_spirits";
import { ATTACK_TOTEM_DEF } from "./totems/sf1_tiger";


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

const SeasonFlavor1_NoPickFamilyEffect: INoPickFamilyEffect = {
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


export const SeasonFlavor1: ISeason = {
  seasonName: "Season Flavor - 1",
  seasonDescription: "Flavor season for development",

  seasonId: SEASON_FLAVOR_1_PBID,

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

  noPickFamilyEffect: SeasonFlavor1_NoPickFamilyEffect,
};
