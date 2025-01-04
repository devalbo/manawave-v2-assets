import { MonumentCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfLifeData: MonumentCard = {
  title: "Monument of Life",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfLife,
  },
  isDefault: true,
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine COUNT(<::population-token::>) for both Tribes. Tribe with greater COUNT(<::population-token::>) wins. " +
        "If tied, determine COUNT(<::population-increase-counter::>) for both Tribes. Tribe with greater COUNT(<::population-increase-counter::>) wins. " +
        "If still tied, resume Manawave.",
  text2: "",
};
