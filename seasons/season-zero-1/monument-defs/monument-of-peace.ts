import { bpqCountMarkersForPlayerTribe, bpqGetMarkerCountForClanAtLeyline } from "../../../../game-data/boardpieces-query";
import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { GameOutcome, MwMarkerType } from "../../../../protobufs/protofiles-out/manawave-types";
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
  "If still tied, resume Manawave.",
}


export const MonumentOfPeace: MonumentInPlayInstance = {
  ...MonumentOfPeaceData,
  gameLogic: {
    onPoweredByManawave: (boardState, leyline) => {
      if (boardState.mwRoundNumber < 7) {
        return GameOutcome.GameOutcome_InProgress;
      }

      const optAttackCount = bpqGetMarkerCountForClanAtLeyline(boardState, 'OPT', leyline, MwMarkerType.MwMarkerType_AttackCounter);
      const osbAttackCount = bpqGetMarkerCountForClanAtLeyline(boardState, 'OSB', leyline, MwMarkerType.MwMarkerType_AttackCounter);

      if (optAttackCount < osbAttackCount) {
        return GameOutcome.GameOutcome_OptPlayerWins;
      }

      if (osbAttackCount < optAttackCount) {
        return GameOutcome.GameOutcome_OsbPlayerWins;
      }

      const optTribeAttackCount = bpqCountMarkersForPlayerTribe(boardState, 'OPT', MwMarkerType.MwMarkerType_AttackCounter);
      const osbTribeAttackCount = bpqCountMarkersForPlayerTribe(boardState, 'OSB', MwMarkerType.MwMarkerType_AttackCounter);

      if (optTribeAttackCount < osbTribeAttackCount) {
        return GameOutcome.GameOutcome_OptPlayerWins;
      }

      if (osbTribeAttackCount < optTribeAttackCount) {
        return GameOutcome.GameOutcome_OsbPlayerWins;
      }

      return GameOutcome.GameOutcome_InProgress;
    },
  }
}
