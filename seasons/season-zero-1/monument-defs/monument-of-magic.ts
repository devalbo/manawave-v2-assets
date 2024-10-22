import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfMagicData: MonumentCard = {
  title: "Monument of Magic",
  // monumentId: "sz1-monument-of-magic",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfMagic,
  },
  text: "Resolve: Determine COUNT(<::mana-level-token::>) for each adjacent Clan. " +
  "If either Clan has at least COUNT(<::manawave-round-token::>) x [3] <::mana-level-token::>, " +
  "the Tribe of the Clan with higher COUNT(<::mana-level-token::>) wins. If there is a tie, determine " +
  "COUNT(<::mana-level-token::>) for both Tribes. The Tribe with the highest COUNT(<::mana-level-token::>) " +
  " wins. If there is still a tie, resume the Manawave.",
  // monumentPrintSettings: {
  //   imageSize: 12,
  //   fontSize: 12,
  // },
};
