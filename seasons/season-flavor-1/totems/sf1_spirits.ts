import { PlayerSideId, TotemPbId } from "@mw-protobufs/manawave-types";
import { FamilyCardInstance } from "../../../PIECES/type-defs/type-defs";
import { ITotemDetails } from "../../../type-defs/totem-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1TotemDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";
import { ChannelersCardDef } from "@mw-assets/PIECES/card-defs/channelers";
import { EnchantersCardDef } from "@mw-assets/PIECES/card-defs/enchanters";
import { ManaChannelersCardDef } from "@mw-assets/PIECES/card-defs/mana-channelers";
import { RoadBuildersCardDef } from "@mw-assets/PIECES/card-defs/road-builders";
import { SacrificersCardDef } from "@mw-assets/PIECES/card-defs/sacrificers";
import { WizardsCardDef } from "@mw-assets/PIECES/card-defs/wizards";


const TOTEM_NAME = 'Magic';
const TOTEM_ID: TotemPbId = {
  seasonId: SEASON_FLAVOR_1_PBID,
  seasonTotemId: SeasonFlavor1TotemDefs.SeasonFlavor1Totem_Magic,
};


const CARD_DEFS = [
  RoadBuildersCardDef,
  ManaChannelersCardDef,
  EnchantersCardDef,
  ChannelersCardDef,
  WizardsCardDef,
  SacrificersCardDef,
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
