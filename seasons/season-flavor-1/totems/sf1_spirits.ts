import { PlayerSideId, TotemPbId } from "@mw-protobufs/manawave-types";
import { FamilyCardInstance } from "../../../PIECES/type-defs/type-defs";
import { ITotemDetails } from "../../../type-defs/totem-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1TotemDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";
import { ChannelersCardDef } from "../family-card-defs/spirits/channelers";
import { EnchantersCardDef } from "../family-card-defs/spirits/enchanters";
import { ManaChannelersCardDef } from "../family-card-defs/spirits/mana-channelers";
import { RoadBuildersCardDef } from "../family-card-defs/spirits/road-builders";
import { SacrificersCardDef } from "../family-card-defs/spirits/sacrificers";
import { WizardsCardDef } from "../family-card-defs/spirits/wizards";


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
