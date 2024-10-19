import { IMwMonumentData } from "../../PIECES/MwMonumentTemplate";


export const MonumentOfWarData: IMwMonumentData = {
  title: "Monument of War",
  // text: "Resolve: Count number of Attack Counters for each adjacent Clan. If either Clan has at least [number of Manawave Round Counters] x [3] Attack Counters, the Tribe of the Clan with more Attack Counters wins. If there is a tie, count the number of Attack Counters for both Tribes. The Tribe with the highest total number of Attack Counters wins. If there is still a tie, resume the Manawave.",
  text: "Resolve: Determine COUNT(<::attack-counter::>) for each adjacent Clan. " +
  "If either Clan has at least COUNT(<::manawave-round-token::>) x [3] <::attack-counter::>, " +
  "the Tribe of the Clan with higher COUNT(<::attack-counter::>) wins. If there is a tie, determine " +
  "COUNT(<::attack-counter::>) for both Tribes. The Tribe with the highest COUNT(<::attack-counter::>) " +
  "wins. If there is still a tie, resume the Manawave.",
  monumentPrintSettings: {
    imageSize: 12,
    fontSize: 12,
  },
};