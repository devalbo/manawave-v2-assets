import { FarmersCardDef } from "../../../PIECES/card-defs/farmers";
import { ForestHuntersCardDef } from "../../../PIECES/card-defs/forest-hunters";
import { GrasslandShepherdsCardDef } from "../../../PIECES/card-defs/grassland-shepherds";
import { MysticFarmersCardDef } from "../../../PIECES/card-defs/mystic-farmers";
import { RuggedShepherdsCardDef } from "../../../PIECES/card-defs/rugged-shepherds";
import { SoylentGreenFarmersCardDef } from "../../../PIECES/card-defs/soylent-green-farmers";
import { FamilyCardInstance } from "../../../PIECES/type-defs/type-defs";
import { ITotemDetails } from "../../../type-defs/totem-defs";
import { PlayerSideId, TotemPbId } from "@mw-protobufs/manawave-types";
import { TotemDefs } from "@mw-protobufs/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


const TOTEM_NAME = 'Ox';
const TOTEM_ID: TotemPbId = {
  seasonId: SEASON_ZERO_1_PBID,
  seasonTotemId: TotemDefs.Totem_Ox,
};


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
        familyCardInstancePbId: {
          familyCardDefId: cardDef.familyCardDefPbId,
          owningPlayerSide: PlayerSideId.PlayerSide_Opt,
        },
        pieceType: 'family-card',
      };
      return retVal;
    }),

  osbPlayCards: CARD_DEFS
    .map((cardDef, i) => {
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
