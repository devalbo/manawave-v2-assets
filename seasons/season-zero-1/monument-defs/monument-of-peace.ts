import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { GameOutcome } from "../../../../protobufs/protofiles-out/manawave-types";
import { MonumentCard, MonumentInPlayInstance } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfPeaceData: MonumentCard = {
  title: "Monument of Peace",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfPeace,
  },
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine " +
  "COUNT(<::attack-counter::>) for each adjacent Clan. The Clan with the lowest " +
  "COUNT(<::attack-counter::>) wins. If there is a tie, determine COUNT(<::attack-counter::>) " +
  "for both Tribes. The Tribe with the lowest COUNT(<::attack-counter::>) wins. " +
  "If there is still a tie, resume the Manawave.",
}


export const MonumentOfPeace: MonumentInPlayInstance = {
  ...MonumentOfPeaceData,
  gameLogic: {
    onPoweredByManawave: (boardState, leyline) => {
      return GameOutcome.GameOutcome_InProgress;
    },
  }
}
