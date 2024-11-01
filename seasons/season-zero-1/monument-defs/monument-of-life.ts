import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { GameOutcome } from "../../../../protobufs/protofiles-out/manawave-types";
import { MonumentCard, MonumentInPlayInstance } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfLifeData: MonumentCard = {
  title: "Monument of Life",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfLife,
  },
  isDefault: true,
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine COUNT(<::population-token::>) for both Tribes. Tribe with greater COUNT(<::population-token::>) wins. If tied...",
};


export const MonumentOfLife: MonumentInPlayInstance = {
  ...MonumentOfLifeData,
  gameLogic: {
    onPoweredByManawave: (boardState, leyline) => {
      return GameOutcome.GameOutcome_InProgress;
    },
  }   
}
