import { SeasonDev1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-dev-1";
import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_DEV_1_PBID } from "../../season-id-defs";
import { MAGIC_TOTEM_DEF } from "../totems/sd1_magic";
import { DEFENSE_TOTEM_DEF } from "../totems/sd1_defense";


export const MonumentOfDefenseAndMagicData: TotemMonumentCard = {
  title: "Monument of Defense and Magic",
  monumentId: {
    seasonId: SEASON_DEV_1_PBID,
    seasonMonumentCardId: SeasonDev1MonumentCardDefs.SeasonDev1MonumentOfDefenseAndMagic,
  },
  totem1Id: DEFENSE_TOTEM_DEF.totemId,
  totem2Id: MAGIC_TOTEM_DEF.totemId,
  isDefault: true,
  text:
    "Resolve: If COUNT(<::manawave-round-token::>) >= 3, count number of <::defense-counter::> and <::mana-counter::> on each adjacent Clan. " +
    "The Tribe of the Clan with with higher total count wins. If tied, resume Manawave.",
  text2: "",
};
