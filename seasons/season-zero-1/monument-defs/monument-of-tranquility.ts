import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { GameOutcome } from "../../../../protobufs/protofiles-out/manawave-types";
import { MonumentCard, MonumentInPlayInstance } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfTranquilityData: MonumentCard = {
  title: "Monument of Tranquility",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfTranquility,
  },
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine " +
  "COUNT(<::shield-counter::>) for each adjacent Clan. The Clan with the lowest " +
  "COUNT(<::shield-counter::>) wins. If there is a tie, determine COUNT(<::shield-counter::>) " +
  "for both Tribes. The Tribe with the lowest COUNT(<::shield-counter::>) wins. " +
  "If there is still a tie, resume the Manawave.",
}


export const MonumentOfTranquility: MonumentInPlayInstance = {
  ...MonumentOfTranquilityData,
  gameLogic: {
    onPoweredByManawave: (boardState, leyline) => {
      return GameOutcome.GameOutcome_InProgress;
    },
  }
}
  