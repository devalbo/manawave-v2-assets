import { SeasonDev1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-dev-1";
import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_DEV_1_PBID } from "../../season-id-defs";
import { ATTACK_TOTEM_DEF } from "../totems/sd1_attack";
import { DEFENSE_TOTEM_DEF } from "../totems/sd1_defense";


export const MonumentOfAttackAndDefenseData: TotemMonumentCard = {
  title: "Monument of Attack and Defense",
  monumentId: {
    seasonId: SEASON_DEV_1_PBID,
    seasonMonumentCardId: SeasonDev1MonumentCardDefs.SeasonDev1MonumentOfAttackAndDefense,
  },
  totem1Id: ATTACK_TOTEM_DEF.totemId,
  totem2Id: DEFENSE_TOTEM_DEF.totemId,
  text:
    "Resolve: If COUNT(<::manawave-round-token::>) >= 3, count number of <::attack-counter::> and <::defense-counter::> on each adjacent Clan. " +
    "The Tribe of the Clan with with higher total count wins. If tied, resume Manawave.",
}
