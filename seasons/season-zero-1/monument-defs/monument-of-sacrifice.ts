import { MonumentCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfSacrificeData: MonumentCard = {
  title: "Monument of Sacrifice",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfSacrifice,
  },
  isDefault: true,
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, COUNT(<::soulstain-token::>) for both Tribes. Tribe with lesser COUNT(<::soulstain-token::>) wins. If still tied, resume Manawave.",
};


// export const MonumentOfSacrifice: MonumentInPlayInstance = {
//   ...MonumentOfSacrificeData,
//   gameLogic: {
//     onPoweredByManawave: (boardState, leyline) => {
//       const roundNumber = boardState.mwRoundNumber;
//       if (roundNumber < 7) {
//         return GameOutcome.GameOutcome_InProgress;
//       }

//       const optSoulstainCount = bpqCountMarkersForPlayerTribe(boardState, 'OPT', MwMarkerType.MwMarkerType_SoulstainToken);
//       const osbSoulstainCount = bpqCountMarkersForPlayerTribe(boardState, 'OSB', MwMarkerType.MwMarkerType_SoulstainToken);

//       if (optSoulstainCount > osbSoulstainCount) {
//         return GameOutcome.GameOutcome_OsbPlayerWins;
//       }

//       if (osbSoulstainCount > optSoulstainCount) {
//         return GameOutcome.GameOutcome_OptPlayerWins;
//       }

//       return GameOutcome.GameOutcome_InProgress;
//     },
//   }
// }
