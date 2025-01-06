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
    "If only your Tribe and its Clans have 4 or more Sacrifice counters + Soulstain tokens than the current manawave round number, you win the game.",
  text2: "",
}
