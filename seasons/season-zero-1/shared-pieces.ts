// import { createDefaultTribeTileLogic, SurgePointProcResult } from "../../../game-flow/game-logic";
// import { IMainGameBoardState, PlayerSide } from "../../../game-state/type-defs";
// import { TribePlayPieceIntraWaveCounters } from "../../../game-typedefs/game-tile";
// import { createFreshIntrawaveTribeCounters } from "../../../game-typedefs/game-tile-utils";
// import { createChangesToAddCountersToAllAdjacentTribes } from "../../effects-utils";
// import { createTribeTileDef } from "../../tile-typedefs";

import { FamilyCardDataDef } from "../../type-defs/game-data-type-defs"

// import { createFamilyCardDef } from "../family-utils";


export const SimpleIncreaserFamily1Def: FamilyCardDataDef = {
  title: "Family",
  // svgExportTitleLines: ["    Family", ],
  text: " <::on-manawave-proc::>: Add 1 <::population-increase-counter::> counter to this tribe.",
  gameLogic: {
    onManawaveProc: (boardState, playerSide) => {
      return { };
    },
    // ...createDefaultTribeTileLogic(),
    // onManawaveProc: (boardState: IMainGameBoardState, playerSide: PlayerSide): SurgePointProcResult => {
      
    //   const retval: SurgePointProcResult = {
    //     tribePieceChanges: {
    //       selfChanges: {
    //         populationIncreaseCounters: 1,
    //         sacrificeCounters: 0,
    //         damageCounters: 0,
    //         shieldCounters: 0,
    //       },
    //     },
    //     playerGameOutcome: 'unchanged',
    //   }

    //   return retval;
    // }
  }
}


export const SimpleIncreaserFamily2Def: FamilyCardDataDef = {
  title: "Family 2",
  // svgExportTitleLines: ["     Clan", ],
  text: " <::on-manawave-proc::>: Add 1 <::population-increase-counter::> counter to this tribe. You take 1 <::population-increase-counter::> counter.",
  gameLogic: {
    // ...createDefaultTribeTileLogic(),
    onManawaveProc: (boardState, playerSide) => {
      return { };
    },
    // onManawaveProc: (boardState: IMainGameBoardState, playerSide: PlayerSide): SurgePointProcResult => {
      
    //   const adjacentTribeCounterChanges: TribePlayPieceIntraWaveCounters = {
    //     ...createFreshIntrawaveTribeCounters(),
    //     populationIncreaseCounters: 1,
    //   };
    //   const otherTribeChanges = createChangesToAddCountersToAllAdjacentTribes(boardState, playerSide, adjacentTribeCounterChanges);
      
    //   const retval: SurgePointProcResult = {
    //     tribePieceChanges: {
    //       selfChanges: {
    //         ...createFreshIntrawaveTribeCounters(),
    //         populationIncreaseCounters: 1,
    //       },
    //       otherTribeChanges,
    //     },
    //     playerTokenChangeEffects: {
    //       changes: {
    //         populationIncreaseCounters: 1,
    //         soulStainTokenCount: 0,
    //       },
    //     },
    //     playerGameOutcome: 'unchanged',
    //   }

    //   return retval;
    // }
  }
}
