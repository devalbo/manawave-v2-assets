import { MonumentCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-zero-1";
import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";
import { OX_TOTEM_ID } from "../totems/sz1_ox";
import { TIGER_TOTEM_ID } from "../totems/sz1_tiger";


export const MonumentOfJusticeData: TotemMonumentCard = {
  title: "Monument of Justice",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfJustice,
  },
  totem1Id: OX_TOTEM_ID,
  totem2Id: TIGER_TOTEM_ID,
  text: 
    "Resolve: Determine COUNT(<::shield-counter::>) for each adjacent Clan. " +
    "If either Clan has COUNT(<::manawave-round-token::>) x [2] >= COUNT(<::shield-counter::>), " +
    "the Tribe of the Clan with higher COUNT(<::shield-counter::>) wins. If there is a tie, determine " +
    "COUNT(<::shield-counter::>) for both Tribes. The Tribe with the highest COUNT(<::shield-counter::>) " +
    "wins. If still tied, resume Manawave.",
}
