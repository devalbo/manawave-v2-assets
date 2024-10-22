import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfDiversityData: MonumentCard = {
  title: "Monument of Diversity",
  // monumentId: "sz1-monument-of-diversity",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfDiversty,
  },
  isDefault: true,
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, count number of Families for each Clan on both Tribes. Take smallest count for each Tribe and compare them. Tribe with higher Family count wins. If tied...",
};
