import { SeasonDev1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-dev-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_DEV_1_PBID } from "../../season-id-defs";


export const MonumentOfAttackAndDefenseData: MonumentCard = {
  title: "Monument of Attack and Defense",
  monumentId: {
    seasonId: SEASON_DEV_1_PBID,
    seasonMonumentCardId: SeasonDev1MonumentCardDefs.SeasonDev1MonumentOfAttackAndDefense,
  },
  text:
    "Resolve: If COUNT(<::manawave-round-token::>) >= 3, count number of <::attack-counter::> and <::defense-counter::> on each adjacent Clan. " +
    "The Tribe of the Clan with with higher total count wins. If tied, resume Manawave.",
}
