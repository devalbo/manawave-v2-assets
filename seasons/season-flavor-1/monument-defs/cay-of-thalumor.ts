import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";


export const CayOfThalumorTheSteadfastData: MonumentCard = {
  title: "Thalumor the Steadfast",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.JungleOfPyrhhus,
  },
  text:
    "If only your Tribe and its Clans have 4 or more <::population-sacrifice-counter::> + <::soulstain-token::> than the number of <::manawave-round-token::>, you win the game.",
  text2: "",
}
