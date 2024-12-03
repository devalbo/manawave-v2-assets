import { MonumentCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfMagicData: MonumentCard = {
  title: "Monument of Magic",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfMagic,
  },
  text:
    "Resolve: If COUNT(<::manawave-round-token::>) >= 2, count number of <::mana-counter::> on each adjacent Clan. " +
    "The Tribe of the Clan with with higher amount of <::mana-counter::> count wins. If tied, resume Manawave.",
}
