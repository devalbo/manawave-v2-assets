// import { createDefaultMonumentTileLogic, createDefaultGeographyTileLogic, createDefaultTribeTileLogic, SurgePointProcResult, createDefaultFactionIndicatorTile } from "../../../game-flow/game-logic";
// import { getAllTribeTilesForPlayer, getOpposingPlayerSide } from "../../../game-state/game-board-utils";
// import { MwBoardPlayerSideCoordinateKey } from "../../../game-state/game-coordinate-type-defs";
// import { getCurrentManawaveProcGeography, getCurrentManawaveProcMonument, getCurrentManawaveProcTribe, getDirectlyOpposingTileCoordinates, getTribeTilesForCoordinateKeys } from "../../../game-state/game-coordinate-utils";
// import { convertMwBoardPlayerSideCoordinateKeyToCoordinate } from "../../../game-state/game-coordinates";
// import { IMainGameBoardState, PlayerSide } from "../../../game-state/type-defs";
// import { TribePlayPieceIntraWaveCounterChanges, TribePlayPieceIntraWaveCounters } from "../../../game-typedefs/game-tile";
// import { createFreshIntrawaveTribeCounters } from "../../../game-typedefs/game-tile-utils";
// import { createChangesToAddCountersToAllAdjacentTribes, createChangesToAddCountersToDirectlyOpposingTribes, getCountOfAdjacentTribes, getCountOfDirectlyOpposingTribes, getCountOfOpposingTribes, getCurrentSurgeStrength } from "../../effects-utils";
// import { createMonumentTileDef, createGeographyTileDef, createTribeTileDef } from "../../tile-typedefs";
// import { ITotemDetails } from "../../totem-defs";
// import { SimpleIncreaserTribe1, SimpleIncreaserTribe2 } from "./shared-pieces";


import { ChannelersCardDef } from "../../../PIECES/card-defs/channelers";
import { EnchantersCardDef } from "../../../PIECES/card-defs/enchanters";
import { ManaChannelersCardDef } from "../../../PIECES/card-defs/mana-channelers";
import { RoadBuildersCardDef } from "../../../PIECES/card-defs/road-builders";
import { SacrificersCardDef } from "../../../PIECES/card-defs/sacrificers";
import { WizardsCardDef } from "../../../PIECES/card-defs/wizards";
import { ITotemDetails } from "../../../type-defs/totem-defs";
import { convertDefToFamilyCardInstance, convertToFamilyCardInstance } from "./hack";



// Benefit from opposing tribes... human/commerce?

// export const CoOpIncreasersMonument1 = createMonumentTileDef({
//   title: "Temple of Prosperity",
//   svgExportTitleLines: ["     Temple", "of Prosperity", ],
//   text: " <::on-manawave-proc::>: If the manawave has 4+ <::manawave-surge-strength::> tokens and your opponent has more <::population-increase-counter::> counters than you, you lose the game. If you have 8+ <::population-increase-counter::> counters across all of your tribes, you win the game.",
//   gameLogic: {
//     ...createDefaultMonumentTileLogic(),
//     onManawaveProc: (boardState: IMainGameBoardState, playerSide: PlayerSide): SurgePointProcResult => {

//       const allMyTribes = getAllTribeTilesForPlayer(boardState, playerSide);
//       const numMyTribesPopulationIncreaseCounters = allMyTribes
//         .map(t => t.intraWaveCounters.populationIncreaseCounters)
//         .reduce((previous, current) => previous + current, 0);

//       const surgeStrength = getCurrentSurgeStrength(boardState);
//       if (surgeStrength >= 4) {
//         const opponentPlayer = getOpposingPlayerSide(playerSide);

//         const allOpponentTribes = getAllTribeTilesForPlayer(boardState, opponentPlayer);
//         const numOpponentTribesPopulationIncreaseCounters = allOpponentTribes
//           .map(t => t.intraWaveCounters.populationIncreaseCounters)
//           .reduce((previous, current) => previous + current, 0);

//         if (numOpponentTribesPopulationIncreaseCounters > numMyTribesPopulationIncreaseCounters) {
//           return {
//             playerGameOutcome: 'lose',
//           }
//         }
//       }

//       if (numMyTribesPopulationIncreaseCounters >= 8) {
//         return {
//           playerGameOutcome: 'win',
//         }
//       }
      
//       return {
//         playerGameOutcome: 'unchanged',
//       }
//     }
//   }
// })


// export const CoOpIncreasersMonument2 = createMonumentTileDef({
//   title: "Temple of Civilization",
//   svgExportTitleLines: ["    Temple", "of Civilization", ],
//   text: " <::on-manawave-proc::>: If the manawave has 8+ <::manawave-surge-strength::> tokens and the number of directly opposing tribes plus adjacent tribes is 5 or more, you win the game.",
//   gameLogic: {
//     ...createDefaultMonumentTileLogic(),
//     onManawaveProc: (boardState: IMainGameBoardState, playerSide: PlayerSide): SurgePointProcResult => {
      
//       const thisPiece = getCurrentManawaveProcMonument(boardState, playerSide);

//       const surgeStrength = getCurrentSurgeStrength(boardState);

//       if (surgeStrength < 8) {
//         return {
//           playerGameOutcome: 'unchanged',
//         }
//       }

//       const directlyOpposingTribesCount = getCountOfDirectlyOpposingTribes(boardState, thisPiece.boardLocation);
//       const adjacentTribesCount = getCountOfAdjacentTribes(boardState, thisPiece.boardLocation);
      
//       const totalTribesCount = directlyOpposingTribesCount + adjacentTribesCount;
//       if (totalTribesCount >= 5) {
//         return {
//           playerGameOutcome: 'win',
//         }
//       }

//       return {
//         playerGameOutcome: 'unchanged',
//       }
//     }
//   }
// })


// export const CoOpIncreasersGeography = createGeographyTileDef({
//   title: "Sheltered Harbor",
//   svgExportTitleLines: ["  Sheltered", "     Harbor", ],
//   text: " <::on-manawave-proc::>: For each opposing tribe, add 1 <::population-increase-counter::> counter to each adjacent tribe. For each adjacent tribe, add 1 <::population-increase-counter::> counter to each opposing tribe.",
//   gameLogic: {
//     ...createDefaultGeographyTileLogic(),
//     onManawaveProc: (boardState: IMainGameBoardState, playerSide: PlayerSide): SurgePointProcResult => {

//       const thisPiece = getCurrentManawaveProcGeography(boardState, playerSide);

//       const directlyOpposingTribesCount = getCountOfDirectlyOpposingTribes(boardState, thisPiece.boardLocation);
//       const adjacentTribesCount = getCountOfAdjacentTribes(boardState, thisPiece.boardLocation);

//       const otherTribeCounterChanges: TribePlayPieceIntraWaveCounters = {
//         ...createFreshIntrawaveTribeCounters(),
//         populationIncreaseCounters: directlyOpposingTribesCount,
//       };
//       const otherTribeChanges = createChangesToAddCountersToAllAdjacentTribes(boardState, playerSide, otherTribeCounterChanges);

//       const opposingTribeCounterChanges: TribePlayPieceIntraWaveCounters = {
//         ...createFreshIntrawaveTribeCounters(),
//         populationIncreaseCounters: adjacentTribesCount,
//       };
//       const opponentTribeChanges = createChangesToAddCountersToDirectlyOpposingTribes(boardState, playerSide, opposingTribeCounterChanges);

//       return {
//         tribePieceChanges: {
//           otherTribeChanges: otherTribeChanges,
//           opponentTribeChanges,
//         },
//         playerGameOutcome: 'unchanged',
//       }
//     }
//   }
// })


// export const Mages: FamilyCardDataDef = {
//   title: "Traders of Fortune",
//   // svgExportTitleLines: ["    Traders", "  of Fortune", ],
//   text: " <::on-manawave-proc::>: Add 2 <::population-increase-counter::> counters to this tribe for each opposing tribe.",
//   gameLogic: {
//     onManaflowProc: (boardState, playerSide) => {
//       return { };
//     },

//     // ...createDefaultTribeTileLogic(),
//     // onManawaveProc: (boardState: IMainGameBoardState, playerSide: PlayerSide): SurgePointProcResult => {

//     //   const thisPiece = getCurrentManawaveProcTribe(boardState, playerSide);

//     //   const opposingTribesCount = getCountOfOpposingTribes(boardState, thisPiece.boardLocation);

//     //   const numPopulationIncreaseCounters = opposingTribesCount * 2;

//     //   const retval: SurgePointProcResult = {
//     //     tribePieceChanges: {
//     //       selfChanges: {
//     //         ...createFreshIntrawaveTribeCounters(),
//     //         populationIncreaseCounters: numPopulationIncreaseCounters,
//     //       },
//     //     },
//     //     playerGameOutcome: 'unchanged',
//     //   }

//     //   return retval;
//     // }
//   }
// }



// export const CoOpIncreasersTribe2: FamilyCardDataDef = {
//   title: "Artisan Crafters",
//   // svgExportTitleLines: ["    Artisan", "    Crafters", ],
//   text: " <::on-manawave-proc::>: Add 1 <::population-increase-counter::> counter to this tribe for each <::population-count-token::> token on each directly opposing tribe.",
//   gameLogic: {
//     onManaflowProc: (boardState, playerSide) => {
//       return { };
//     },
//     // ...createDefaultTribeTileLogic(),
//     // onManawaveProc: (boardState: IMainGameBoardState, playerSide: PlayerSide): SurgePointProcResult => {

//     //   const thisPiece = getCurrentManawaveProcTribe(boardState, playerSide);
//     //   const opposingPlayerSide = getOpposingPlayerSide(playerSide);

//     //   const thisPieceTileCoordinate = convertMwBoardPlayerSideCoordinateKeyToCoordinate(thisPiece.boardLocation);
//     //   const directlyOpposingTileCoordinateKeys = getDirectlyOpposingTileCoordinates(thisPieceTileCoordinate, opposingPlayerSide);
//     //   const directlyOpposingTribeTiles = getTribeTilesForCoordinateKeys(directlyOpposingTileCoordinateKeys, boardState);
      
//     //   const populationIncreaseCountersForDirectlyOpposingTribePopulations = Array
//     //     .from(directlyOpposingTribeTiles.values())
//     //     .map(t => t.populationSize)
//     //     .reduce((previous, current) => previous + current, 0);

//     //   const retval: SurgePointProcResult = {
//     //     tribePieceChanges: {
//     //       selfChanges: {
//     //         ...createFreshIntrawaveTribeCounters(),
//     //         populationIncreaseCounters: populationIncreaseCountersForDirectlyOpposingTribePopulations,
//     //       },
//     //     },
//     //     playerGameOutcome: 'unchanged',
//     //   }

//     //   return retval;
//     // }
//   }
// }



// export const CoOpIncreasersTribe3: FamilyCardDataDef = {
//   title: "Enchanters of Exchange",
//   // svgExportTitleLines: [" Enchanters", " of Exchange"],
//   text: " <::on-manawave-proc::>: Add 2 <::population-increase-counter::> counters to each directly opposing tribe. Take 1 <::population-increase-counter::> counter for each 2 mana in the manawave (rounded up).",
//   gameLogic: {
//     onManaflowProc: (boardState, playerSide) => {
//       return { };
//     },
//     // ...createDefaultTribeTileLogic(),
//     // onManawaveProc: (boardState: IMainGameBoardState, playerSide: PlayerSide): SurgePointProcResult => {

//     //   const thisPiece = getCurrentManawaveProcTribe(boardState, playerSide);
//     //   const opposingPlayerSide = getOpposingPlayerSide(playerSide);

//     //   const thisPieceTileCoordinate = convertMwBoardPlayerSideCoordinateKeyToCoordinate(thisPiece.boardLocation);
//     //   const directlyOpposingTileCoordinateKeys = getDirectlyOpposingTileCoordinates(thisPieceTileCoordinate, opposingPlayerSide);
//     //   const directlyOpposingTribeTiles = getTribeTilesForCoordinateKeys(directlyOpposingTileCoordinateKeys, boardState);

//     //   const opponentTribeChanges = new Map<MwBoardPlayerSideCoordinateKey, TribePlayPieceIntraWaveCounterChanges>();
//     //   Array.from(directlyOpposingTribeTiles.values())
//     //     .forEach(t => {
//     //       opponentTribeChanges.set(t.boardLocation, {
//     //         ...createFreshIntrawaveTribeCounters(),
//     //         populationIncreaseCounters: 2,
//     //       });
//     //     });
        
//     //   const surgeStrength = getCurrentSurgeStrength(boardState);
//     //   const selfPopulationIncreaseCounters = Math.ceil(surgeStrength / 2);

//     //   const retval: SurgePointProcResult = {
//     //     tribePieceChanges: {
//     //       selfChanges: {
//     //         ...createFreshIntrawaveTribeCounters(),
//     //         populationIncreaseCounters: selfPopulationIncreaseCounters,
//     //       },
//     //       opponentTribeChanges,
//     //     },
//     //     playerGameOutcome: 'unchanged',
//     //   }

//     //   return retval;
//     // }
//   }
// }


const TOTEM_NAME = 'Spirits';
const TOTEM_ID = 'spirits';


export const SPIRITS_TOTEM_DEF: ITotemDetails = {
  totemId: TOTEM_ID,
  totemName: TOTEM_NAME,
  
  // indicatorTileDef: createDefaultFactionIndicatorTile({
  //   totemName: TOTEM_NAME,
  //   totemId: TOTEM_ID,
  // }),
  
  // playingPieceTileDefs: [
  //   // CoOpIncreasersMonument1,
  //   // CoOpIncreasersMonument2,

  //   // CoOpIncreasersGeography,
  //   // CoOpIncreasersGeography,

  //   SimpleIncreaserTribe1,
  //   SimpleIncreaserTribe2,

  //   // CoOpIncreasersTribe1,
  //   // CoOpIncreasersTribe1,
  //   CoOpIncreasersTribe2,
  //   CoOpIncreasersTribe2,
  //   CoOpIncreasersTribe3,
  //   CoOpIncreasersTribe3,
  // ],

  // playCards: [
  //   // { ...SimpleIncreaserFamily1Def },
  //   // { ...SimpleIncreaserFamily2Def },

  //   // { ...CoOpIncreasersFamily1 },
  //   // { ...CoOpIncreasersFamily1 },
  //   // { ...CoOpIncreasersFamily2 },
  //   // { ...CoOpIncreasersFamily2 },
  //   // { ...CoOpIncreasersFamily3 },
  //   // { ...CoOpIncreasersFamily3 },

  //   convertToFamilyCardInstance(RoadBuildersCardData),
  //   convertToFamilyCardInstance(ManaChannelersCardData),
  //   convertToFamilyCardInstance(EnchantersCardData),
  //   convertToFamilyCardInstance(ChannelersCardData),
  //   convertToFamilyCardInstance(WizardsCardData),
  //   convertToFamilyCardInstance(SacrificersCardData),
  // ],

  optPlayCards: [
    convertDefToFamilyCardInstance(RoadBuildersCardDef, TOTEM_ID, "OPT", 1),
    convertDefToFamilyCardInstance(ManaChannelersCardDef, TOTEM_ID, "OPT", 2),
    convertDefToFamilyCardInstance(EnchantersCardDef, TOTEM_ID, "OPT", 3),
    convertDefToFamilyCardInstance(ChannelersCardDef, TOTEM_ID, "OPT", 4),
    convertDefToFamilyCardInstance(WizardsCardDef, TOTEM_ID, "OPT", 5),
    convertDefToFamilyCardInstance(SacrificersCardDef, TOTEM_ID, "OPT", 6),
  ],

  osbPlayCards: [
    convertDefToFamilyCardInstance(RoadBuildersCardDef, TOTEM_ID, "OSB", 1),
    convertDefToFamilyCardInstance(ManaChannelersCardDef, TOTEM_ID, "OSB", 2),
    convertDefToFamilyCardInstance(EnchantersCardDef, TOTEM_ID, "OSB", 3),
    convertDefToFamilyCardInstance(ChannelersCardDef, TOTEM_ID, "OSB", 4),
    convertDefToFamilyCardInstance(WizardsCardDef, TOTEM_ID, "OSB", 5),
    convertDefToFamilyCardInstance(SacrificersCardDef, TOTEM_ID, "OSB", 6),
  ],
}
