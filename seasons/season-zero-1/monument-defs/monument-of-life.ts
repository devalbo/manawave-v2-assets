import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfLifeData: MonumentCard = {
  title: "Monument of Life",
  // monumentId: "sz1-monument-of-life",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfLife,
  },
  isDefault: true,
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine COUNT(<::population-token::>) for both Tribes. Tribe with greater COUNT(<::population-token::>) wins. If tied...",
};
