import { IMwMonumentData } from "../../PIECES/MwMonumentTemplate";


export const MonumentOfPeaceData: IMwMonumentData = {
  title: "Monument of Peace",
  // text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, count number of Attack Counters for each adjacent Clan. The Clan with the least number of Attack Counters wins. If there is a tie, count the number of Attack Counters for both Tribes. The Tribe with the lowest total number of Attack Counters wins. If there is still a tie, resume the Manawave.",
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine " +
  "COUNT(<::attack-counter::>) for each adjacent Clan. The Clan with the lowest " +
  "COUNT(<::attack-counter::>) wins. If there is a tie, determine COUNT(<::attack-counter::>) " +
  "for both Tribes. The Tribe with the lowest COUNT(<::attack-counter::>) wins. " +
  "If there is still a tie, resume the Manawave.",
  monumentPrintSettings: {
    imageSize: 12,
    fontSize: 12,
  },
};
