import { MonumentCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-zero-1";
import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";
import { OX_TOTEM_ID } from "../totems/sz1_ox";
import { TIGER_TOTEM_ID } from "../totems/sz1_tiger";


export const MonumentOfNatureData: TotemMonumentCard = {
  title: "Monument of Nature",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfNature,
  },
  totem1Id: OX_TOTEM_ID,
  totem2Id: TIGER_TOTEM_ID,
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine COUNT(<::manalith-token::>) " +
  "for each adjacent Clan. The Clan with the lowest COUNT(<::manalith-token::>) " +
  "wins. If there is a tie, determine COUNT(<::manalith-token::>) for both Tribes. " +
  " The Tribe with the lowest COUNT(<::manalith-token::>) wins. If there is still a tie, " +
  "resume the Manawave.",
}
