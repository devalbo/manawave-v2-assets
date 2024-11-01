import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { GameOutcome } from "../../../../protobufs/protofiles-out/manawave-types";
import { MonumentCard, MonumentInPlayInstance } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfMagicData: MonumentCard = {
  title: "Monument of Magic",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfMagic,
  },
  text: "Resolve: Determine COUNT(<::manalith-token::>) for each adjacent Clan. " +
  "If either Clan has at least COUNT(<::manawave-round-token::>) x [3] <::manalith-token::>, " +
  "the Tribe of the Clan with higher COUNT(<::manalith-token::>) wins. If there is a tie, determine " +
  "COUNT(<::manalith-token::>) for both Tribes. The Tribe with the highest COUNT(<::manalith-token::>) " +
  " wins. If there is still a tie, resume the Manawave.",
}


export const MonumentOfMagic: MonumentInPlayInstance = {
  ...MonumentOfMagicData,
  gameLogic: {
    onPoweredByManawave: (boardState, leyline) => {
      return GameOutcome.GameOutcome_InProgress;
    },
  }
}
  