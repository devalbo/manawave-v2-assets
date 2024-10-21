import { createFamilyCardInstanceId, FamilyCardInstanceId } from "../../../type-defs/branded-string-types";
import { FarmersCardDef } from "../../../PIECES/card-defs/farmers";
import { ForestHuntersCardDef } from "../../../PIECES/card-defs/forest-hunters";
import { GrasslandShepherdsCardDef } from "../../../PIECES/card-defs/grassland-shepherds";
import { MysticFarmersCardDef } from "../../../PIECES/card-defs/mystic-farmers";
import { RuggedShepherdsCardDef } from "../../../PIECES/card-defs/rugged-shepherds";
import { SoylentGreenFarmersCardDef } from "../../../PIECES/card-defs/soylent-green-farmers";
import { FamilyCardInstance } from "../../../PIECES/type-defs/type-defs";
import { ITotemDetails } from "../../../type-defs/totem-defs";


const TOTEM_NAME = 'Ox';
const TOTEM_ID = 'ox';

const CARD_DEFS = [
  ForestHuntersCardDef,
  GrasslandShepherdsCardDef,
  RuggedShepherdsCardDef,
  FarmersCardDef,
  MysticFarmersCardDef,
  SoylentGreenFarmersCardDef,
];


export const OX_TOTEM_DEF: ITotemDetails = {
  totemId: TOTEM_ID,
  totemName: TOTEM_NAME,

  optPlayCards: CARD_DEFS
    .map((cardDef, i) => {
      const retVal: FamilyCardInstance = {
        ...cardDef,
        // pieceId: createFamilyCardInstanceId(TOTEM_ID, "OPT", i + 1),
        pieceId: "abc" as FamilyCardInstanceId,
        pieceType: 'family-card',
      };
      return retVal;
    }),

  osbPlayCards: CARD_DEFS
    .map((cardDef, i) => {
      const retVal: FamilyCardInstance = {
        ...cardDef,
        // pieceId: createFamilyCardInstanceId(TOTEM_ID, "OSB", i + 1),
        pieceId: "abc" as FamilyCardInstanceId,
        pieceType: 'family-card',
      };
      return retVal;
    }),
}
