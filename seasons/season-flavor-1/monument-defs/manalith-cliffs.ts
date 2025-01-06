import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";


export const ManalithCliffsData: MonumentCard = {
  title: "Manalith Cliffs",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.ManalithCliffs,
  },
  text:
    "If only your Tribe and its Clans have 4 or more Sacrifice counters + Manalith tokens than the current manawave round number, you win the game.",
  text2: "",
}
