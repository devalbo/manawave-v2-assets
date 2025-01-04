import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";


export const RiverOfLyrtifData: MonumentCard = {
  title: "River of Lyrtif",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.RiverOfLyrtif,
  },
  text:
    "[1-5] <::manawave-round-token::>: If a Tribe has 2 or fewer <::population-increase-counter::> than the <::manawave-round-token::> number, that Tribe's player loses the game.",
  text2:
    "[6-8] <::manawave-round-token::>: Count number of <::manalith-token::> for each adjacent Clan. If either Clan has more <::manalith-token::> than the other, that Clan's Player wins the game.",
}
