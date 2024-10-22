import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfNatureData: MonumentCard = {
  title: "Monument of Nature",
  // monumentId: "sz1-monument-of-nature",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfNature,
  },
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine COUNT(<::mana-level-token::>) " +
  "for each adjacent Clan. The Clan with the lowest COUNT(<::mana-level-token::>) " +
  "wins. If there is a tie, determine COUNT(<::mana-level-token::>) for both Tribes. " +
  " The Tribe with the lowest COUNT(<::mana-level-token::>) wins. If there is still a tie, " +
  "resume the Manawave.",
  // monumentPrintSettings: {
  //   imageSize: 12,
  //   fontSize: 12,
  // },
};
