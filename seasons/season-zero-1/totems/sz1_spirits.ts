import { TotemDefs } from "@mw-protobufs/manawave-season-zero-1";
import { PlayerSideId, TotemPbId } from "@mw-protobufs/manawave-types";
import { ChannelersCardDef } from "../../../PIECES/card-defs/channelers";
import { EnchantersCardDef } from "../../../PIECES/card-defs/enchanters";
import { ManaChannelersCardDef } from "../../../PIECES/card-defs/mana-channelers";
import { RoadBuildersCardDef } from "../../../PIECES/card-defs/road-builders";
import { SacrificersCardDef } from "../../../PIECES/card-defs/sacrificers";
import { WizardsCardDef } from "../../../PIECES/card-defs/wizards";
import { FamilyCardInstance } from "../../../PIECES/type-defs/type-defs";
import { ITotemDetails } from "../../../type-defs/totem-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


const TOTEM_NAME = 'Spirits';
const TOTEM_ID: TotemPbId = {
  seasonId: SEASON_ZERO_1_PBID,
  seasonTotemId: TotemDefs.Totem_Spirits,
};


const CARD_DEFS = [
  RoadBuildersCardDef,
  ManaChannelersCardDef,
  EnchantersCardDef,
  ChannelersCardDef,
  WizardsCardDef,
  SacrificersCardDef,
];


export const SPIRITS_TOTEM_DEF: ITotemDetails = {
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

export const SPIRITS_TOTEM_ID = TOTEM_ID;
