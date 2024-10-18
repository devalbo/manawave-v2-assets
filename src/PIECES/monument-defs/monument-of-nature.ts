import { IMwMonumentData } from "../../PIECES/MwMonumentTemplate";


export const MonumentOfNatureData: IMwMonumentData = {
  title: "Monument of Nature",
  // text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, count number of Mana Counters for each adjacent Clan. The Clan with the least number of Mana Counters wins. If there is a tie, count the number of Mana Counters for both Tribes. The Tribe with the lowest total number of Mana Counters wins. If there is still a tie, resume the Manawave.",
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine COUNT(<::mana-level-token::>) " +
  "for each adjacent Clan. The Clan with the lowest COUNT(<::mana-level-token::>) " +
  "wins. If there is a tie, determine COUNT(<::mana-level-token::>) for both Tribes. " +
  " The Tribe with the lowest COUNT(<::mana-level-token::>) wins. If there is still a tie, " +
  "resume the Manawave.",
  monumentPrintSettings: {
    imageSize: 12,
    fontSize: 12,
  },
};
