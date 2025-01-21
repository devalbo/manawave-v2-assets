import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";


export const AtollOfArchulorTheTimeless: MonumentCard = {
  title: "Archulor the Timeless",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.ManalithCliffs,
  },
  text:
    "If only your Tribe and its Clans have 4 or more <::population-sacrifice-counter::> + <::manalith-token::> than the number of <::manawave-round-token::>, you win the game.",
  text2: "",
}
