import { IMwMonumentData } from "../../PIECES/MwMonumentTemplate";


export const MonumentOfTranquilityData: IMwMonumentData = {
  title: "Monument of Tranquility",
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine " +
  "COUNT(<::shield-counter::>) for each adjacent Clan. The Clan with the lowest " +
  "COUNT(<::shield-counter::>) wins. If there is a tie, determine COUNT(<::shield-counter::>) " +
  "for both Tribes. The Tribe with the lowest COUNT(<::shield-counter::>) wins. " +
  "If there is still a tie, resume the Manawave.",
  monumentPrintSettings: {
    imageSize: 12,
    fontSize: 12,
  },
};
