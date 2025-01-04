import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";


export const JungleOfPyrhhusData: MonumentCard = {
  title: "Jungle of Pyrhhus",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.JungleOfPyrhhus,
  },
  text:
    "[1-5] <::manawave-round-token::>: If a Tribe has 2 or fewer <::attack-counter::> than the <::manawave-round-token::> number, that Tribe's player loses the game.",
  text2:
    "[6-8] <::manawave-round-token::>: Count number of <::population-slaughter-counter::> for each adjacent Clan. If either Clan has fewer <::population-slaughter-counter::> than the other, that Clan's Player loses the game.",
}
