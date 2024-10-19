import { MonumentCard } from "../../../type-defs/monument-defs";


export const MonumentOfPeaceData: MonumentCard = {
  title: "Monument of Peace",
  monumentId: "sz1-monument-of-peace",
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine " +
  "COUNT(<::attack-counter::>) for each adjacent Clan. The Clan with the lowest " +
  "COUNT(<::attack-counter::>) wins. If there is a tie, determine COUNT(<::attack-counter::>) " +
  "for both Tribes. The Tribe with the lowest COUNT(<::attack-counter::>) wins. " +
  "If there is still a tie, resume the Manawave.",
  // monumentPrintSettings: {
  //   imageSize: 12,
  //   fontSize: 12,
  // },
};
