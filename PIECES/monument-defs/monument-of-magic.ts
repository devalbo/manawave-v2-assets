import { IMwMonumentData } from "../../PIECES/MwMonumentTemplate";


export const MonumentOfMagicData: IMwMonumentData = {
  title: "Monument of Magic",
  // text: "Resolve: Count number of Mana Counters for each adjacent Clan. If either Clan has at least [number of Manawave Round Counters] x [3] Mana Counters, the Tribe of the Clan with more Mana Counters wins. If there is a tie, count the number of Mana Counters for both Tribes. The Tribe with the highest total number of Mana Counters wins. If there is still a tie, resume the Manawave.",
  text: "Resolve: Determine COUNT(<::manalith-token::>) for each adjacent Clan. " +
  "If either Clan has at least COUNT(<::manawave-round-token::>) x [3] <::manalith-token::>, " +
  "the Tribe of the Clan with higher COUNT(<::manalith-token::>) wins. If there is a tie, determine " +
  "COUNT(<::manalith-token::>) for both Tribes. The Tribe with the highest COUNT(<::manalith-token::>) " +
  " wins. If there is still a tie, resume the Manawave.",
  monumentPrintSettings: {
    imageSize: 12,
    fontSize: 12,
  },
};
