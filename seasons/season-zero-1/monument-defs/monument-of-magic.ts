import { MonumentCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfMagicData: MonumentCard = {
  title: "Monument of Magic",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfMagic,
  },
  text: "Resolve: Determine COUNT(<::manalith-token::>) for each adjacent Clan. " +
  "If either Clan has COUNT(<::manawave-round-token::>) >= COUNT(<::manalith-token::>), " +
  "the Tribe of the Clan with higher COUNT(<::manalith-token::>) wins. If there is a tie, determine " +
  "COUNT(<::manalith-token::>) for both Tribes. The Tribe with the highest COUNT(<::manalith-token::>) " +
  " wins. If still tied, resume Manawave.",
}


// export const MonumentOfMagic: MonumentInPlayInstance = {
//   ...MonumentOfMagicData,
//   gameLogic: {
//     onPoweredByManawave: (boardState, leyline) => {
//       const optManalithCount = bpqGetMarkerCountForClanAtLeyline(boardState, 'OPT', leyline, MwMarkerType.MwMarkerType_ManalithToken);
//       const osbManalithCount = bpqGetMarkerCountForClanAtLeyline(boardState, 'OSB', leyline, MwMarkerType.MwMarkerType_ManalithToken);

//       const winThreshold = boardState.mwRoundNumber;

//       if (optManalithCount < winThreshold && osbManalithCount < winThreshold) {
//         return GameOutcome.GameOutcome_InProgress;
//       }

//       if (optManalithCount > osbManalithCount) {
//         return GameOutcome.GameOutcome_OptPlayerWins;
//       }

//       if (osbManalithCount > optManalithCount) {
//         return GameOutcome.GameOutcome_OsbPlayerWins;
//       }

//       const optTribeManalithCount = bpqCountMarkersForPlayerTribe(boardState, 'OPT', MwMarkerType.MwMarkerType_ManalithToken);
//       const osbTribeManalithCount = bpqCountMarkersForPlayerTribe(boardState, 'OSB', MwMarkerType.MwMarkerType_ManalithToken);

//       if (optTribeManalithCount > osbTribeManalithCount) {
//         return GameOutcome.GameOutcome_OptPlayerWins;
//       }

//       if (osbTribeManalithCount > optTribeManalithCount) {
//         return GameOutcome.GameOutcome_OsbPlayerWins;
//       }

//       return GameOutcome.GameOutcome_InProgress;
//     },
//   }
// }
  