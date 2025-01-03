import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";


export const RuinsOfErkulData: MonumentCard = {
  title: "Ruins of Erkul",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.RuinsOfErkul,
  },
  text:
    "Resolve: If COUNT(<::manawave-round-token::>) >= 3, count number of <::attack-counter::> and <::mana-counter::> on each adjacent Clan. " +
    "The Tribe of the Clan with with higher total count wins. If tied, resume Manawave.",
}
