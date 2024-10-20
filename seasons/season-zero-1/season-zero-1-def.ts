import { SeasonDefinition } from "../../../protobufs/protofiles-out/manawave-types";
import { ISeason } from "../../type-defs/season-defs";
import { getPlayCardsForTotem } from "../../type-defs/totem-defs";
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


// const createFamilyCardInstanceRange = (
//   totem: ITotemDetails, 
//   playerSideId: PlayerSideId,
//   rangeIndex: number
// ) => {

//   const rangeStart = rangeIndex * NUM_CARDS_PER_TOTEM;

//   const familyCardInstaces = totem.playCards
//     .map((def, i) => {
//       const familyCardInstance: FamilyCardInstance = {
//         dataDef: def,
//         instanceIndex: rangeStart + i,
//         playerSideId,
//       };
//       return familyCardInstance;
//     });
//     return familyCardInstaces;
// }

// const allFamilyCards = [
//   ...createFamilyCardInstanceRange(TIGER_TOTEM_DEF, PlayerSideId.PlayerSide_Opt, 0),
//   ...createFamilyCardInstanceRange(TIGER_TOTEM_DEF, PlayerSideId.PlayerSide_Osb, 1),

//   ...createFamilyCardInstanceRange(OX_TOTEM_DEF, PlayerSideId.PlayerSide_Opt, 2),
//   ...createFamilyCardInstanceRange(OX_TOTEM_DEF, PlayerSideId.PlayerSide_Osb, 3),

//   ...createFamilyCardInstanceRange(SPIRITS_TOTEM_DEF, PlayerSideId.PlayerSide_Opt, 4),
//   ...createFamilyCardInstanceRange(SPIRITS_TOTEM_DEF, PlayerSideId.PlayerSide_Osb, 5),
// ];

const allFamilyCards = [
  ...getPlayCardsForTotem(TIGER_TOTEM_DEF, "OPT"),
  ...getPlayCardsForTotem(TIGER_TOTEM_DEF, "OSB"),

  ...getPlayCardsForTotem(OX_TOTEM_DEF, "OPT"),
  ...getPlayCardsForTotem(OX_TOTEM_DEF, "OSB"),

  ...getPlayCardsForTotem(SPIRITS_TOTEM_DEF, "OPT"),
  ...getPlayCardsForTotem(SPIRITS_TOTEM_DEF, "OSB"),
];


export const SeasonZero1: ISeason = {
  seasonName: "Season Zero - 1",
  seasonId: 'season-zero-1',
  seasonDefinitionId: SeasonDefinition.SeasonDef_Zero_1,
  seasonDescription: "First draft development season with the card (not hex) based version",

  allTotemChoices,

  defaultMonumentChoices: DefaultMonuments,
  totemMonumentChoices: TotemMonuments,

  allMonumentChoices: [
    ...DefaultMonuments,
    ...TotemMonuments,
  ],

  allClanChoices: [
    ClanOfDiversityData,
    ClanOfLifeData,
    ClanOfSacrificeData,
  ],

  allFamilyCards,
}
