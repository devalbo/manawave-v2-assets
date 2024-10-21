import { createFamilyCardInstanceId } from "../../../type-defs/branded-string-types";
import { ClubWieldersCardDef } from "../../../PIECES/card-defs/club-wielders";
import { DefendersCardDef } from "../../../PIECES/card-defs/defenders";
import { MartyrsCardDef } from "../../../PIECES/card-defs/martyrs";
import { ShieldCraftersCardDef } from "../../../PIECES/card-defs/shield-crafters";
import { SlaversCardDef } from "../../../PIECES/card-defs/slavers";
import { TemplarsCardDef } from "../../../PIECES/card-defs/templars";
import { FamilyCardInstance } from "../../../PIECES/type-defs/type-defs";
import { ITotemDetails } from "../../../type-defs/totem-defs";


const TOTEM_NAME = 'Tiger';
const TOTEM_ID = 'tiger';

const CARD_DEFS = [
  ClubWieldersCardDef,
  ShieldCraftersCardDef,
  TemplarsCardDef,
  DefendersCardDef,
  MartyrsCardDef,
  SlaversCardDef,
];


export const TIGER_TOTEM_DEF: ITotemDetails = {
  totemId: TOTEM_ID,
  totemName: TOTEM_NAME,
  
  optPlayCards: CARD_DEFS
    .map((cardDef, i) => {
      const retVal: FamilyCardInstance = {
        ...cardDef,
        pieceId: createFamilyCardInstanceId(TOTEM_ID, "OPT", i + 1),
        pieceType: 'family-card',
      };
      return retVal;
    }),

  osbPlayCards: CARD_DEFS
    .map((cardDef, i) => {
      const retVal: FamilyCardInstance = {
        ...cardDef,
        pieceId: createFamilyCardInstanceId(TOTEM_ID, "OSB", i + 1),
        pieceType: 'family-card',
      };
      return retVal;
    }),
}
