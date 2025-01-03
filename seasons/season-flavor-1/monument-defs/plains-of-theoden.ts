import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";
import { ATTACK_TOTEM_DEF } from "../totems/sf1_attack";
import { DEFENSE_TOTEM_DEF } from "../totems/sf1_defense";


export const PlainsOfTheodenData: TotemMonumentCard = {
  title: "Plains of Theoden",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.PlainsOfTheoden,
  },
  totem1Id: ATTACK_TOTEM_DEF.totemId,
  totem2Id: DEFENSE_TOTEM_DEF.totemId,
  text:
    "Resolve: If COUNT(<::manawave-round-token::>) >= 2, count number of <::mana-counter::> on each adjacent Clan. " +
    "The Tribe of the Clan with with higher amount of <::mana-counter::> count wins. If tied, resume Manawave.",
}
