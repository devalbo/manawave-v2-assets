import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { GameOutcome } from "../../../../protobufs/protofiles-out/manawave-types";
import { MonumentCard, MonumentInPlayInstance } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfNatureData: MonumentCard = {
  title: "Monument of Nature",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfNature,
  },
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine COUNT(<::manalith-token::>) " +
  "for each adjacent Clan. The Clan with the lowest COUNT(<::manalith-token::>) " +
  "wins. If there is a tie, determine COUNT(<::manalith-token::>) for both Tribes. " +
  " The Tribe with the lowest COUNT(<::manalith-token::>) wins. If there is still a tie, " +
  "resume the Manawave.",
}


export const MonumentOfNature: MonumentInPlayInstance = {
  ...MonumentOfNatureData,
  gameLogic: {
    onPoweredByManawave: (boardState, leyline) => {
      return GameOutcome.GameOutcome_InProgress;
    },
  }
}
  