import { SeasonDev1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-dev-1";
import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_DEV_1_PBID } from "../../season-id-defs";
import { ATTACK_TOTEM_DEF } from "../totems/sd1_attack";


export const MonumentOfForcedDrawData: TotemMonumentCard = {
  title: "Monument of Forced Draw",
  monumentId: {
    seasonId: SEASON_DEV_1_PBID,
    seasonMonumentCardId: SeasonDev1MonumentCardDefs.SeasonDev1Monument_ForcedDraw,
  },
  totem1Id: ATTACK_TOTEM_DEF.totemId,
  totem2Id: ATTACK_TOTEM_DEF.totemId,
  text:
    "Resolve: Forced draw.",
  text2: "",
}
