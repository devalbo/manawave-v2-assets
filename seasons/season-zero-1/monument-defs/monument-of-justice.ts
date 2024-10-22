import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfJusticeData: MonumentCard = {
  title: "Monument of Justice",
  // monumentId: "sz1-monument-of-justice",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfJustice,
  },
  text: 
    "Resolve: Determine COUNT(<::shield-counter::>) for each adjacent Clan. " +
    "If either Clan has at least COUNT(<::manawave-round-token::>) x [3] <::shield-counter::>, " +
    "the Tribe of the Clan with higher COUNT(<::shield-counter::>) wins. If there is a tie, determine " +
    "COUNT(<::shield-counter::>) for both Tribes. The Tribe with the highest COUNT(<::shield-counter::>) " +
    "wins. If there is still a tie, resume the Manawave.",
    // monumentPrintSettings: {
    //   imageSize: 12,
    //   fontSize: 12,
    // },
};
