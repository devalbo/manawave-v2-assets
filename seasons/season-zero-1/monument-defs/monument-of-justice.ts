import { MonumentCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfJusticeData: MonumentCard = {
  title: "Monument of Justice",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfJustice,
  },
  text: 
    "Resolve: Determine COUNT(<::shield-counter::>) for each adjacent Clan. " +
    "If either Clan has COUNT(<::manawave-round-token::>) x [2] >= COUNT(<::shield-counter::>), " +
    "the Tribe of the Clan with higher COUNT(<::shield-counter::>) wins. If there is a tie, determine " +
    "COUNT(<::shield-counter::>) for both Tribes. The Tribe with the highest COUNT(<::shield-counter::>) " +
    "wins. If still tied, resume Manawave.",
}


// export const MonumentOfJustice: MonumentInPlayInstance = {
//   ...MonumentOfJusticeData,
//   gameLogic: {
//     onPoweredByManawave: (boardState, leyline) => {
//       const optShieldCount = bpqGetMarkerCountForClanAtLeyline(boardState, 'OPT', leyline, MwMarkerType.MwMarkerType_ShieldCounter);
//       const osbShieldCount = bpqGetMarkerCountForClanAtLeyline(boardState, 'OSB', leyline, MwMarkerType.MwMarkerType_ShieldCounter);

//       const winThreshold = boardState.mwRoundNumber * 2;

//       if (optShieldCount < winThreshold && osbShieldCount < winThreshold) {
//         return GameOutcome.GameOutcome_InProgress;
//       }

//       if (optShieldCount > osbShieldCount) {
//         return GameOutcome.GameOutcome_OptPlayerWins;
//       }

//       if (osbShieldCount > optShieldCount) {
//         return GameOutcome.GameOutcome_OsbPlayerWins;
//       }

//       const optTribeShieldCount = bpqCountMarkersForPlayerTribe(boardState, 'OPT', MwMarkerType.MwMarkerType_ShieldCounter);
//       const osbTribeShieldCount = bpqCountMarkersForPlayerTribe(boardState, 'OSB', MwMarkerType.MwMarkerType_ShieldCounter);

//       if (optTribeShieldCount > osbTribeShieldCount) {
//         return GameOutcome.GameOutcome_OptPlayerWins;
//       }

//       if (osbTribeShieldCount > optTribeShieldCount) {
//         return GameOutcome.GameOutcome_OsbPlayerWins;
//       }

//       return GameOutcome.GameOutcome_InProgress;
//     },
//   }
// }
  