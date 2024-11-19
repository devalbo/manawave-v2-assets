import { PlayerSlotId, PlayerSide, PlayerDefaultStrategy } from "../../mw-v2-game-engine/gameboard/game-play-data"
import { OnCardPickData } from "../PIECES/mw-card-data"
import { ClanCardStockpile } from "@mw-protobufs/manawave-board"
import { GameOutcome, LeylineDistanceFromSource, PlayerPb } from "@mw-protobufs/manawave-types"
import { BoardPiecesState } from "../../mw-v2-game-engine/local-game-state/local-board-state-types"


export interface IPlayer {
  playerSlotId: PlayerSlotId
  playerSide: PlayerSide
  name: string
  defaultStrategy: PlayerDefaultStrategy

  rawPb: PlayerPb
}


export interface IClanCardLogic {
  onManawaveInit?: () => void
  // onManaflowProc: (
  //   boardState: BoardPiecesState,
  //   playerSide: PlayerSide,
  //   procPoint: ManaflowProcPoint,
  // ) => ManaflowPointProcResult
  onManawaveFinalize?: () => void
  
  createInitialStockpile: () => ClanCardStockpile // run this when tile is placed by player on board
  onTokenPlacement?: () => void // run this when tokens are placed by player on tile
}


export type FamilyCardPlacementResult = {
  readonly numPopulationTokensToAddToClan: number
}

export interface IFamilyCardLogic {
  onManawaveInit?: () => void
  // onManaflowProc: (
  //   boardState: BoardPiecesState,
  //   playerSide: PlayerSide,
  //   procPoint: ManaflowProcPoint,
  // ) => ManaflowPointProcResult
  onManawaveFinalize?: () => void
  
  onFamilyCardPlacement?: () => FamilyCardPlacementResult  // run this when card is placed by player on board
  onTokenPlacement?: () => void // run this when tokens are placed by player on tile
}


export type ClanCardLogic = {
  readonly gameLogic: IClanCardLogic
}


export type FamilyCardLogic = {
  readonly gameLogic: IFamilyCardLogic
  readonly onCardPickData: OnCardPickData
}


export interface IMonumentCardLogic {
  onPoweredByManawave: (boardState: BoardPiecesState, leyline: LeylineDistanceFromSource) => GameOutcome
}

export type MonumentCardLogic = {
  readonly gameLogic: IMonumentCardLogic
}
