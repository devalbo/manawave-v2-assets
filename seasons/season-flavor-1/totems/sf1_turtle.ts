import { FamilyCardInstance } from "../../../PIECES/type-defs/type-defs";
import { ITotemDetails } from "../../../type-defs/totem-defs";
import { PlayerSideId, TotemPbId } from "@mw-protobufs/manawave-types";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1TotemDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";
import { FarmersCardDef } from "../family-card-defs/turtle/farmers";
import { ForestHuntersCardDef } from "../family-card-defs/shark/forest-hunters";
import { GrasslandShepherdsCardDef } from "../family-card-defs/turtle/grassland-shepherds";
import { MysticFarmersCardDef } from "../family-card-defs/turtle/mystic-farmers";
import { RuggedShepherdsCardDef } from "../family-card-defs/shark/rugged-shepherds";
import { SoylentGreenFarmersCardDef } from "../family-card-defs/turtle/soylent-green-farmers";


const TOTEM_NAME = 'Defense';
const TOTEM_ID: TotemPbId = {
  seasonId: SEASON_FLAVOR_1_PBID,
  seasonTotemId: SeasonFlavor1TotemDefs.SeasonFlavor1Totem_Defense,
};


const CARD_DEFS = [
  ForestHuntersCardDef,
  GrasslandShepherdsCardDef,
  RuggedShepherdsCardDef,
  FarmersCardDef,
  MysticFarmersCardDef,
  SoylentGreenFarmersCardDef,
];


export const DEFENSE_TOTEM_DEF: ITotemDetails = {
  totemId: TOTEM_ID,
  totemIconId: 'ox',
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
