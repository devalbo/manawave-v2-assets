import { MonumentCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
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
  "If still tied, resume Manawave.",
}


// export const MonumentOfTranquility: MonumentInPlayInstance = {
//   ...MonumentOfTranquilityData,
//   gameLogic: {
//     onPoweredByManawave: (boardState, leyline) => {
//       if (boardState.mwRoundNumber < 7) { 
//         return GameOutcome.GameOutcome_InProgress;
//       }

//       const optShieldCount = bpqGetMarkerCountForClanAtLeyline(boardState, 'OPT', leyline, MwMarkerType.MwMarkerType_ShieldCounter);
//       const osbShieldCount = bpqGetMarkerCountForClanAtLeyline(boardState, 'OSB', leyline, MwMarkerType.MwMarkerType_ShieldCounter);

//       if (optShieldCount < osbShieldCount) {
//         return GameOutcome.GameOutcome_OptPlayerWins;
//       }

//       if (osbShieldCount < optShieldCount) {
//         return GameOutcome.GameOutcome_OsbPlayerWins;
//       }

//       const optTribeShieldCount = bpqCountMarkersForPlayerTribe(boardState, 'OPT', MwMarkerType.MwMarkerType_ShieldCounter);
//       const osbTribeShieldCount = bpqCountMarkersForPlayerTribe(boardState, 'OSB', MwMarkerType.MwMarkerType_ShieldCounter);

//       if (optTribeShieldCount < osbTribeShieldCount) {
//         return GameOutcome.GameOutcome_OptPlayerWins;
//       }

//       if (osbTribeShieldCount < optTribeShieldCount) {
//         return GameOutcome.GameOutcome_OsbPlayerWins;
//       }

//       return GameOutcome.GameOutcome_InProgress;
//     },
//   }
// }
  