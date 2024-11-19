import { MonumentCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-zero-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const MonumentOfDiversityData: MonumentCard = {
  title: "Monument of Diversity",
  monumentId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonMonumentCardId: MonumentCardDefs.MonumentOfDiversty,
  },
  isDefault: true,
  text: "Resolve: If COUNT(<::manawave-round-token::>) >= 7, count number of Families for each Clan on both Tribes. Take smallest count for each Tribe and compare them. Tribe with higher Family count wins. If still tied, resume Manawave.",
};


// export const MonumentOfDiversity: MonumentInPlayInstance = {
//   ...MonumentOfDiversityData,
//   gameLogic: {
//     onPoweredByManawave: (boardState, leyline) => {
//       const roundNumber = boardState.mwRoundNumber;
//       if (roundNumber < 7) {
//         return GameOutcome.GameOutcome_InProgress;
//       }

//       const optFamilyCountLeyline1 = bpqGetFamilyCountForClanColumn(boardState, 'OPT', LeylineDistanceFromSource.LeylineDistance_1);
//       const optFamilyCountLeyline2 = bpqGetFamilyCountForClanColumn(boardState, 'OPT', LeylineDistanceFromSource.LeylineDistance_2);
//       const optFamilyCountLeyline3 = bpqGetFamilyCountForClanColumn(boardState, 'OPT', LeylineDistanceFromSource.LeylineDistance_3);

//       const osbFamilyCountLeyline1 = bpqGetFamilyCountForClanColumn(boardState, 'OSB', LeylineDistanceFromSource.LeylineDistance_1);
//       const osbFamilyCountLeyline2 = bpqGetFamilyCountForClanColumn(boardState, 'OSB', LeylineDistanceFromSource.LeylineDistance_2);
//       const osbFamilyCountLeyline3 = bpqGetFamilyCountForClanColumn(boardState, 'OSB', LeylineDistanceFromSource.LeylineDistance_3);

//       const minOptFamilyCount = Math.min(optFamilyCountLeyline1, optFamilyCountLeyline2, optFamilyCountLeyline3);
//       const minOsbFamilyCount = Math.min(osbFamilyCountLeyline1, osbFamilyCountLeyline2, osbFamilyCountLeyline3);

//       if (minOptFamilyCount > minOsbFamilyCount) {
//         return GameOutcome.GameOutcome_OptPlayerWins;
//       }

//       if (minOsbFamilyCount > minOptFamilyCount) {
//         return GameOutcome.GameOutcome_OsbPlayerWins;
//       }

//       return GameOutcome.GameOutcome_InProgress;
//     },
//   }
// }
