import { FamilyCardInstance } from "../../../PIECES/type-defs/type-defs";
import { ITotemDetails } from "../../../type-defs/totem-defs";
import { SeasonDev1FamilyCardDefs, SeasonDev1TotemDefs } from "@mw-protobufs/manawave-season-dev-1";
import { MwMarkerType, PlayerSideId, TotemPbId } from "@mw-protobufs/manawave-types";
import { SEASON_DEV_1_PBID } from "../../season-id-defs";
import { FamilyCardDefinition } from "@mw-assets/type-defs/family-defs";
import { createAddMarkersToMyTribeInstructionSet } from "@mw-assets/manawave-virtual-machine/mvm-instructions-factory";
import { createAddMarkersToMyClanInstructionSet } from "@mw-assets/manawave-virtual-machine/mvm-instructions-factory";
import { createMvmInstructionsOnlyFamilyModeLogic } from "@mw-assets/PIECES/mw-card-data";
import { mapToIndexedModes } from "@mw-assets/PIECES/mw-mode-utils";


const TOTEM_NAME = 'Attack';
const TOTEM_ID_STR = 'attack';
const TOTEM_ID: TotemPbId = {
  seasonId: SEASON_DEV_1_PBID,
  seasonTotemId: SeasonDev1TotemDefs.SeasonDev1Totem_Attack,
};


const createAttackerFamilyCardDef = (attackNumber: number, seasonFamilyCardId: SeasonDev1FamilyCardDefs): FamilyCardDefinition => {
  const retVal: FamilyCardDefinition = {
    pieceType: 'family-card',
    title: `Attacker Family ${attackNumber}`,
    newName: `Attacker Family ${attackNumber}`,
    totemId: TOTEM_ID_STR,
    familyCardDefPbId: {
      seasonId: SEASON_DEV_1_PBID,
      seasonFamilyCardId,
    },
    text: "TODO: fill in text for Club Wielders",
    modes: mapToIndexedModes([
      {
        numManalithClaimsToActivate: 0,
        modeText: `Add ${attackNumber} <::attack-counter::> to Clan.`,
        modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
          ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, attackNumber),
        ]),
      },
      {
        numManalithClaimsToActivate: 1,
        modeText: `Add ${attackNumber} <::attack-counter::> to Tribe.`,
        modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
          ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, attackNumber),
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
  createAttackerFamilyCardDef(1, SeasonDev1FamilyCardDefs.SeasonDev1Attackers1),
  createAttackerFamilyCardDef(2, SeasonDev1FamilyCardDefs.SeasonDev1Attackers2),
  createAttackerFamilyCardDef(3, SeasonDev1FamilyCardDefs.SeasonDev1Attackers3),
  createAttackerFamilyCardDef(4, SeasonDev1FamilyCardDefs.SeasonDev1Attackers4),
  createAttackerFamilyCardDef(5, SeasonDev1FamilyCardDefs.SeasonDev1Attackers5),
  createAttackerFamilyCardDef(6, SeasonDev1FamilyCardDefs.SeasonDev1Attackers6),
];


export const ATTACK_TOTEM_DEF: ITotemDetails = {
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
