import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { GameOutcome } from "../../../../protobufs/protofiles-out/manawave-types";
import { MonumentCard, MonumentInPlayInstance } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfDiversityData: MonumentCard = {
  title: "Monument of Diversity",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfDiversty,
  },
  isDefault: true,
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, count number of Families for each Clan on both Tribes. Take smallest count for each Tribe and compare them. Tribe with higher Family count wins. If tied...",
};


export const MonumentOfDiversity: MonumentInPlayInstance = {
  ...MonumentOfDiversityData,
  gameLogic: {
    onPoweredByManawave: (boardState, leyline) => {
      // return GameOutcome.GameOutcome_InProgress;
      return GameOutcome.GameOutcome_OptPlayerWins;
    },
  }
}
