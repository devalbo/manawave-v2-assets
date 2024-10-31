import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfPeaceData: MonumentCard = {
  title: "Monument of Peace",
  // monumentId: "sz1-monument-of-peace",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfPeace,
  },
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine " +
  "COUNT(<::attack-counter::>) for each adjacent Clan. The Clan with the lowest " +
  "COUNT(<::attack-counter::>) wins. If there is a tie, determine COUNT(<::attack-counter::>) " +
  "for both Tribes. The Tribe with the lowest COUNT(<::attack-counter::>) wins. " +
  "If there is still a tie, resume the Manawave.",
}
