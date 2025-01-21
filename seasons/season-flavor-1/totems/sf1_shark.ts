import { FamilyCardInstance } from "../../../PIECES/type-defs/type-defs";
import { ITotemDetails } from "../../../type-defs/totem-defs";
import { SeasonDev1TotemDefs } from "@mw-protobufs/manawave-season-dev-1";
import { PlayerSideId, TotemPbId } from "@mw-protobufs/manawave-types";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { ClubWieldersCardDef } from "../family-card-defs/shark/club-wielders";
import { DefendersCardDef } from "../family-card-defs/turtle/defenders";
import { MartyrsCardDef } from "../family-card-defs/shark/martyrs";
import { ShieldCraftersCardDef } from "../family-card-defs/turtle/shield-crafters";
import { SlaversCardDef } from "../family-card-defs/shark/slavers";
import { TemplarsCardDef } from "../family-card-defs/shark/templars";


const TOTEM_NAME = 'Attack';
const TOTEM_ID: TotemPbId = {
  seasonId: SEASON_FLAVOR_1_PBID,
  seasonTotemId: SeasonDev1TotemDefs.SeasonDev1Totem_Attack,
};


const CARD_DEFS = [
  ClubWieldersCardDef,
  ShieldCraftersCardDef,
  TemplarsCardDef,
  DefendersCardDef,
  MartyrsCardDef,
  SlaversCardDef,
];


export const ATTACK_TOTEM_DEF: ITotemDetails = {
  totemId: TOTEM_ID,
  totemIconId: 'shark',
  totemName: TOTEM_NAME,
  
  optPlayCards: CARD_DEFS
    .map((cardDef, ) => {
      const retVal: FamilyCardInstance = {
        ...cardDef,
        title: cardDef.newName,
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
        title: cardDef.newName,
        familyCardInstancePbId: {
          familyCardDefId: cardDef.familyCardDefPbId,
          owningPlayerSide: PlayerSideId.PlayerSide_Osb,
        },
        pieceType: 'family-card',
      };
      return retVal;
    }),
}
