import { MonumentCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-zero-1";
import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";
import { OX_TOTEM_ID } from "../totems/sz1_ox";


export const MonumentOfPeaceData: TotemMonumentCard = {
  title: "Monument of Peace",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfPeace,
  },
  totem1Id: OX_TOTEM_ID,
  totem2Id: OX_TOTEM_ID,
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine " +
  "COUNT(<::attack-counter::>) for each adjacent Clan. The Clan with the lowest " +
  "COUNT(<::attack-counter::>) wins. If there is a tie, determine COUNT(<::attack-counter::>) " +
  "for both Tribes. The Tribe with the lowest COUNT(<::attack-counter::>) wins. " +
  "If still tied, resume Manawave.",
  text2: "",
}
