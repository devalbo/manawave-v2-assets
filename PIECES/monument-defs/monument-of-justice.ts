import { IMwMonumentData } from "../../PIECES/MwMonumentTemplate";


export const MonumentOfJusticeData: IMwMonumentData = {
  title: "Monument of Justice",
  text: 
    "Resolve: Determine COUNT(<::shield-counter::>) for each adjacent Clan. " +
    "If either Clan has at least COUNT(<::manawave-round-token::>) x [3] <::shield-counter::>, " +
    "the Tribe of the Clan with higher COUNT(<::shield-counter::>) wins. If there is a tie, determine " +
    "COUNT(<::shield-counter::>) for both Tribes. The Tribe with the highest COUNT(<::shield-counter::>) " +
    "wins. If there is still a tie, resume the Manawave.",
    monumentPrintSettings: {
      imageSize: 12,
      fontSize: 12,
    },
};