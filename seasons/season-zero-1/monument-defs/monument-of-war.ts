import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfWarData: MonumentCard = {
  title: "Monument of War",
  // monumentId: "sz1-monument-of-war",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfWar,
  },
  // text: "Resolve: Count number of Attack Counters for each adjacent Clan. If either Clan has at least [number of Manawave Round Counters] x [3] Attack Counters, the Tribe of the Clan with more Attack Counters wins. If there is a tie, count the number of Attack Counters for both Tribes. The Tribe with the highest total number of Attack Counters wins. If there is still a tie, resume the Manawave.",
  text: "Resolve: Determine COUNT(<::attack-counter::>) for each adjacent Clan. " +
  "If either Clan has at least COUNT(<::manawave-round-token::>) x [3] <::attack-counter::>, " +
  "the Tribe of the Clan with higher COUNT(<::attack-counter::>) wins. If there is a tie, determine " +
  "COUNT(<::attack-counter::>) for both Tribes. The Tribe with the highest COUNT(<::attack-counter::>) " +
  "wins. If there is still a tie, resume the Manawave.",
}
