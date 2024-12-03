import { FamilyCardInstance } from "../../../PIECES/type-defs/type-defs";
import { ITotemDetails } from "../../../type-defs/totem-defs";
import { MwMarkerType, PlayerSideId, TotemPbId } from "@mw-protobufs/manawave-types";
import { SEASON_DEV_1_PBID } from "../../season-id-defs";
import { SeasonDev1FamilyCardDefs, SeasonDev1TotemDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-dev-1";
import { createAddMarkersToMyTribeInstructionSet } from "@mw-assets/manawave-virtual-machine/mvm-instructions-factory";
import { createAddMarkersToMyClanInstructionSet } from "@mw-assets/manawave-virtual-machine/mvm-instructions-factory";
import { createMvmInstructionsOnlyFamilyModeLogic } from "@mw-assets/PIECES/mw-card-data";
import { mapToIndexedModes } from "@mw-assets/PIECES/mw-mode-utils";
import { FamilyCardDefinition } from "@mw-assets/type-defs/family-defs";


const TOTEM_NAME = 'Defense';
const TOTEM_ID: TotemPbId = {
  seasonId: SEASON_DEV_1_PBID,
  seasonTotemId: SeasonDev1TotemDefs.SeasonDev1Totem_Defense,
};


const createDefenderFamilyCardDef = (defenseNumber: number): FamilyCardDefinition => {
  const retVal: FamilyCardDefinition = {
    pieceType: 'family-card',
    title: `Defender Family ${defenseNumber}`,
    newName: `Defender Family ${defenseNumber}`,
    totemId: 'tiger',
    familyCardDefPbId: {
      seasonId: SEASON_DEV_1_PBID,
      seasonFamilyCardId: SeasonDev1FamilyCardDefs.SeasonDev1Defenders1,
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
    gameLogic: { },
  };

  return retVal;
}


const CARD_DEFS = [
  createDefenderFamilyCardDef(1),
  createDefenderFamilyCardDef(2),
  createDefenderFamilyCardDef(3),
  createDefenderFamilyCardDef(4),
  createDefenderFamilyCardDef(5),
  createDefenderFamilyCardDef(6),
];


export const DEFENSE_TOTEM_DEF: ITotemDetails = {
  totemId: TOTEM_ID,
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
