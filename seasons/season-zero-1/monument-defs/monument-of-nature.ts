import { MonumentCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfNatureData: MonumentCard = {
  title: "Monument of Nature",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfNature,
  },
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, determine COUNT(<::manalith-token::>) " +
  "for each adjacent Clan. The Clan with the lowest COUNT(<::manalith-token::>) " +
  "wins. If there is a tie, determine COUNT(<::manalith-token::>) for both Tribes. " +
  " The Tribe with the lowest COUNT(<::manalith-token::>) wins. If there is still a tie, " +
  "resume the Manawave.",
}


// export const MonumentOfNature: MonumentInPlayInstance = {
//   ...MonumentOfNatureData,
//   gameLogic: {
//     onPoweredByManawave: (boardState, leyline) => {
//       if (boardState.mwRoundNumber < 7) { 
//         return GameOutcome.GameOutcome_InProgress;
//       }

//       const optManalithCount = bpqGetMarkerCountForClanAtLeyline(boardState, 'OPT', leyline, MwMarkerType.MwMarkerType_ManalithToken);
//       const osbManalithCount = bpqGetMarkerCountForClanAtLeyline(boardState, 'OSB', leyline, MwMarkerType.MwMarkerType_ManalithToken);

//       if (optManalithCount < osbManalithCount) {
//         return GameOutcome.GameOutcome_OptPlayerWins;
//       }

//       if (osbManalithCount < optManalithCount) {
//         return GameOutcome.GameOutcome_OsbPlayerWins;
//       }

//       const optTribeManalithCount = bpqCountMarkersForPlayerTribe(boardState, 'OPT', MwMarkerType.MwMarkerType_ManalithToken);
//       const osbTribeManalithCount = bpqCountMarkersForPlayerTribe(boardState, 'OSB', MwMarkerType.MwMarkerType_ManalithToken);

//       if (optTribeManalithCount < osbTribeManalithCount) {
//         return GameOutcome.GameOutcome_OptPlayerWins;
//       }

//       if (osbTribeManalithCount < optTribeManalithCount) {
//         return GameOutcome.GameOutcome_OsbPlayerWins;
//       }

//       return GameOutcome.GameOutcome_InProgress;
//     },
//   }
// }
  