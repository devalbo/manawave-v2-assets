import { MonumentCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-zero-1";
import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";
import { TIGER_TOTEM_ID } from "../totems/sz1_tiger";


export const MonumentOfWarData: TotemMonumentCard = {
  title: "Monument of War",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfWar,
  },
  totem1Id: TIGER_TOTEM_ID,
  totem2Id: TIGER_TOTEM_ID,
  text: "Resolve: Determine COUNT(<::attack-counter::>) for each adjacent Clan. " +
  "If either Clan has at least COUNT(<::manawave-round-token::>) x [2] >= COUNT(<::attack-counter::>), " +
  "the Tribe of the Clan with higher COUNT(<::attack-counter::>) wins. If there is a tie, determine " +
  "COUNT(<::attack-counter::>) for both Tribes. The Tribe with the highest COUNT(<::attack-counter::>) " +
  "wins. If still tied, resume Manawave.",
  text2: "",
}
