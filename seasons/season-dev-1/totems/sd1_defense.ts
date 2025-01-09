import { FamilyCardInstance } from "../../../PIECES/type-defs/type-defs";
import { ITotemDetails } from "../../../type-defs/totem-defs";
import { MwMarkerType, PlayerSideId, TotemPbId } from "@mw-protobufs/manawave-types";
import { SEASON_DEV_1_PBID } from "../../season-id-defs";
import { SeasonDev1TotemDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-dev-1";
import { createAddMarkersToMyTribeInstructionSet } from "@mw-assets/manawave-virtual-machine/mvm-instructions-factory";
import { createAddMarkersToMyClanInstructionSet } from "@mw-assets/manawave-virtual-machine/mvm-instructions-factory";
import { createMvmInstructionsOnlyFamilyModeLogic } from "@mw-assets/PIECES/mw-card-data";
import { mapToIndexedModes } from "@mw-assets/PIECES/mw-mode-utils";
import { FamilyCardDefinition } from "@mw-assets/type-defs/family-defs";
import { MwFamilyCardIds } from "../../mw-asset-ids/manawave-family-ids";


const TOTEM_NAME = 'Defense';
const TOTEM_ID_STR = 'defense';
const TOTEM_ID: TotemPbId = {
  seasonId: SEASON_DEV_1_PBID,
  seasonTotemId: SeasonDev1TotemDefs.SeasonDev1Totem_Defense,
};


const createDefenderFamilyCardDef = (defenseNumber: number, seasonFamilyCardId: MwFamilyCardIds): FamilyCardDefinition => {
  const retVal: FamilyCardDefinition = {
    pieceType: 'family-card',
    title: `Defender Family ${defenseNumber}`,
    newName: `Defender Family ${defenseNumber}`,
    totemId: TOTEM_ID_STR,
    familyCardDefPbId: {
      seasonId: SEASON_DEV_1_PBID,
      seasonFamilyCardId: seasonFamilyCardId,
    },
    text: "TODO: fill in text for Club Wielders",
    modes: mapToIndexedModes([
      {
        numManalithClaimsToActivate: 0,
        modeText: `Add ${defenseNumber} <::shield-counter::> to Clan.`,
        modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
          ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, defenseNumber),
        ]),
      },
      {
        numManalithClaimsToActivate: 1,
        modeText: `Add ${defenseNumber} <::shield-counter::> to Tribe.`,
        modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
          ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, defenseNumber),
        ]),
      },
    ]),
    onCardPickData: {
      singlePickInitialPopulation: 2,
      multiplePickInitialPopulation: 1,
    },
    // gameLogic: { },
  };

  return retVal;
}


const CARD_DEFS = [
  createDefenderFamilyCardDef(1, MwFamilyCardIds.DevSet_Defenders1),
  createDefenderFamilyCardDef(2, MwFamilyCardIds.DevSet_Defenders2),
  createDefenderFamilyCardDef(3, MwFamilyCardIds.DevSet_Defenders3),
  createDefenderFamilyCardDef(4, MwFamilyCardIds.DevSet_Defenders4),
  createDefenderFamilyCardDef(5, MwFamilyCardIds.DevSet_Defenders5),
  createDefenderFamilyCardDef(6, MwFamilyCardIds.DevSet_Defenders6),
];


export const DEFENSE_TOTEM_DEF: ITotemDetails = {
  totemId: TOTEM_ID,
  totemIconId: 'turtle',
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
