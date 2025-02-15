import { SeasonDev1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-dev-1";
import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_DEV_1_PBID } from "../../season-id-defs";
import { ATTACK_TOTEM_DEF } from "../totems/sd1_attack";


export const MonumentOfOptPlayerWinsData: TotemMonumentCard = {
  title: "Monument of OPT Player Wins",
  monumentId: {
    seasonId: SEASON_DEV_1_PBID,
    seasonMonumentCardId: SeasonDev1MonumentCardDefs.SeasonDev1Monument_OptPlayerWins,
  },
  totem1Id: ATTACK_TOTEM_DEF.totemId,
  totem2Id: ATTACK_TOTEM_DEF.totemId,
  text:
    "Resolve: OPT player wins.",
  text2: "",
}
