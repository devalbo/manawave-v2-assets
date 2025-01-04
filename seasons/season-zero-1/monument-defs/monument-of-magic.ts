import { MonumentCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-zero-1";
import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";
import { SPIRITS_TOTEM_ID } from "../totems/sz1_spirits";


export const MonumentOfMagicData: TotemMonumentCard = {
  title: "Monument of Magic",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfMagic,
  },
  totem1Id: SPIRITS_TOTEM_ID,
  totem2Id: SPIRITS_TOTEM_ID,
  text: "Resolve: Determine COUNT(<::manalith-token::>) for each adjacent Clan. " +
  "If either Clan has COUNT(<::manawave-round-token::>) >= COUNT(<::manalith-token::>), " +
  "the Tribe of the Clan with higher COUNT(<::manalith-token::>) wins. If there is a tie, determine " +
  "COUNT(<::manalith-token::>) for both Tribes. The Tribe with the highest COUNT(<::manalith-token::>) " +
  " wins. If still tied, resume Manawave.",
  text2: "",
}
