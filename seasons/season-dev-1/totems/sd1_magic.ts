import { MwMarkerType, PlayerSideId, TotemPbId } from "@mw-protobufs/manawave-types";
import { FamilyCardInstance } from "../../../PIECES/type-defs/type-defs";
import { ITotemDetails } from "../../../type-defs/totem-defs";
import { SEASON_DEV_1_PBID } from "../../season-id-defs";
import { SeasonDev1TotemDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-dev-1";
import { mapToIndexedModes } from "@mw-assets/PIECES/mw-mode-utils";
import { createAddMarkersToMyTribeInstructionSet } from "@mw-assets/manawave-virtual-machine/mvm-instructions-factory";
import { createAddMarkersToMyClanInstructionSet } from "@mw-assets/manawave-virtual-machine/mvm-instructions-factory";
import { FamilyCardDefinition } from "@mw-assets/type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic } from "@mw-assets/PIECES/mw-card-data";
import { MwFamilyCardIds } from "@mw-assets/mw-asset-ids/manawave-family-ids";


const TOTEM_NAME = 'Magic';
const TOTEM_ID_STR = 'magic';
const TOTEM_ID: TotemPbId = {
  seasonId: SEASON_DEV_1_PBID,
  seasonTotemId: SeasonDev1TotemDefs.SeasonDev1Totem_Magic,
};


const createMagicFamilyCardDef = (magicNumber: number, seasonFamilyCardId: MwFamilyCardIds): FamilyCardDefinition => {
  const retVal: FamilyCardDefinition = {
    pieceType: 'family-card',
    title: `Magic Family ${magicNumber}`,
    newName: `Magic Family ${magicNumber}`,
    totemId: TOTEM_ID_STR,
    familyCardDefPbId: {
      seasonId: SEASON_DEV_1_PBID,
      seasonFamilyCardId: seasonFamilyCardId,
    },
    text: "TODO: fill in text for Magic Family",
    modes: mapToIndexedModes([
      {
        numManalithClaimsToActivate: 0,
        modeText: `Add ${magicNumber} <::mana-counter::> to Clan.`,
        modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
          ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_ManaCounter, magicNumber),
        ]),
      },
      {
        numManalithClaimsToActivate: 1,
        modeText: `Add ${magicNumber} <::mana-counter::> to Tribe.`,
        modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
          ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_ManaCounter, magicNumber),
        ]),
      },
    ]),
    onCardPickData: {
      singlePickInitialPopulation: 2,
      multiplePickInitialPopulation: 1,
    },
    gameLogic: { },
  };

  return retVal;
}


const CARD_DEFS = [
  createMagicFamilyCardDef(1, MwFamilyCardIds.DevSet_Magickers1),
  createMagicFamilyCardDef(2, MwFamilyCardIds.DevSet_Magickers2),
  createMagicFamilyCardDef(3, MwFamilyCardIds.DevSet_Magickers3),
  createMagicFamilyCardDef(4, MwFamilyCardIds.DevSet_Magickers4),
  createMagicFamilyCardDef(5, MwFamilyCardIds.DevSet_Magickers5),
  createMagicFamilyCardDef(6, MwFamilyCardIds.DevSet_Magickers6),
];


export const MAGIC_TOTEM_DEF: ITotemDetails = {
  totemId: TOTEM_ID,
  totemIconId: 'spirits',
  totemName: TOTEM_NAME,

  optPlayCards: CARD_DEFS
    .map((cardDef, ) => {
      const retVal: FamilyCardInstance = {
        ...cardDef,
        familyCardInstancePbId: {
          familyCardDefId: cardDef.familyCardDefPbId,
          owningPlayerSide: PlayerSideId.PlayerSide_Opt,
        },
        pieceType: 'family-card',
      };
      return retVal;
    }),

  osbPlayCards: CARD_DEFS
    .map((cardDef, ) => {
      const retVal: FamilyCardInstance = {
        ...cardDef,
        familyCardInstancePbId: {
          familyCardDefId: cardDef.familyCardDefPbId,
          owningPlayerSide: PlayerSideId.PlayerSide_Osb,
        },
        pieceType: 'family-card',
      };
      return retVal;
    }),
}
