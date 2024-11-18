import { bpqCountMarkersForPlayerTribe } from "../../../../game-data/boardpieces-query";
import { MonumentCardDefs } from "@mw-protobufs/manawave-season-zero-1";
import { GameOutcome, MwMarkerType } from "@mw-protobufs/manawave-types";
import { MonumentCard, MonumentInPlayInstance } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfLifeData: MonumentCard = {
  title: "Monument of Life",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfLife,
  },
  isDefault: true,
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine COUNT(<::population-token::>) for both Tribes. Tribe with greater COUNT(<::population-token::>) wins. " +
        "If tied, determine COUNT(<::population-increase-counter::>) for both Tribes. Tribe with greater COUNT(<::population-increase-counter::>) wins. " +
        "If still tied, resume Manawave.",
};


export const MonumentOfLife: MonumentInPlayInstance = {
  ...MonumentOfLifeData,
  gameLogic: {
    onPoweredByManawave: (boardState, leyline) => {
      const roundNumber = boardState.mwRoundNumber;
      if (roundNumber < 7) {
        return GameOutcome.GameOutcome_InProgress;
      }

      const optPopulationCount = bpqCountMarkersForPlayerTribe(boardState, 'OPT', MwMarkerType.MwMarkerType_PopulationToken);
      const osbPopulationCount = bpqCountMarkersForPlayerTribe(boardState, 'OSB', MwMarkerType.MwMarkerType_PopulationToken);

      if (optPopulationCount > osbPopulationCount) {
        return GameOutcome.GameOutcome_OptPlayerWins;
      }

      if (osbPopulationCount > optPopulationCount) {
        return GameOutcome.GameOutcome_OsbPlayerWins;
      }

      const optPopulationIncreaseCountersCount = bpqCountMarkersForPlayerTribe(boardState, 'OPT', MwMarkerType.MwMarkerType_PopulationIncreaseCounter);
      const osbPopulationIncreaseCountersCount = bpqCountMarkersForPlayerTribe(boardState, 'OSB', MwMarkerType.MwMarkerType_PopulationIncreaseCounter);

      if (optPopulationIncreaseCountersCount > osbPopulationIncreaseCountersCount) {
        return GameOutcome.GameOutcome_OptPlayerWins;
      }

      if (osbPopulationIncreaseCountersCount > optPopulationIncreaseCountersCount) {
        return GameOutcome.GameOutcome_OsbPlayerWins;
      }

      return GameOutcome.GameOutcome_InProgress;
    },
  }   
}
