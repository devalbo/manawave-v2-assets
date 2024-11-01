import { MonumentCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { GameOutcome } from "../../../../protobufs/protofiles-out/manawave-types";
import { MonumentCard, MonumentInPlayInstance } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfSacrificeData: MonumentCard = {
  title: "Monument of Sacrifice",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfSacrifice,
  },
  isDefault: true,
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, COUNT(<::soulstain-token::>) for both Tribes. Tribe with lesser COUNT(<::soulstain-token::>) wins. If tied...",
};


export const MonumentOfSacrifice: MonumentInPlayInstance = {
  ...MonumentOfSacrificeData,
  gameLogic: {
    onPoweredByManawave: (boardState, leyline) => {
      return GameOutcome.GameOutcome_InProgress;
    },
  }
}
