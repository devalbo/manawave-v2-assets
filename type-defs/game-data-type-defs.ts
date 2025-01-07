import { PlayerSlotId, PlayerSide, PlayerDefaultStrategy } from "../../mw-v2-game-engine/gameboard/game-play-data"
import { OnCardPickData } from "../PIECES/mw-card-data"
import { ClanCardStockpile, GameBoardStatePb } from "@mw-protobufs/manawave-board"
import { GameOutcome, LeylineDistanceFromSource, PlayerPb } from "@mw-protobufs/manawave-types"


export interface IPlayer {
  readonly playerSlotId: PlayerSlotId
  readonly playerSide: PlayerSide
  readonly playerId: string
  readonly name: string
  readonly defaultStrategy: PlayerDefaultStrategy

  readonly rawPb: PlayerPb
}


export interface IClanCardLogic {
  onManawaveInit?: () => void
  onManawaveFinalize?: () => void
  
  createInitialStockpile: () => ClanCardStockpile // run this when tile is placed by player on board
  onTokenPlacement?: () => void // run this when tokens are placed by player on tile
}


export type FamilyCardPlacementResult = {
  readonly numPopulationTokensToAddToClan: number
}

// export interface IFamilyCardLogic {
//   onManawaveInit?: () => void
//   onManawaveFinalize?: () => void
  
//   // onFamilyCardPlacement?: () => FamilyCardPlacementResult  // run this when card is placed by player on board
//   // onTokenPlacement?: () => void // run this when tokens are placed by player on tile
// }


export type ClanCardLogic = {
  readonly gameLogic: IClanCardLogic
}


export type FamilyCardLogic = {
  // readonly gameLogic: IFamilyCardLogic
  readonly onCardPickData: OnCardPickData
}


export interface IMonumentCardLogic {
  // onPoweredByManawave: (boardState: BoardPiecesState, leyline: LeylineDistanceFromSource) => GameOutcome
  onPoweredByManawave: (boardState: GameBoardStatePb, leyline: LeylineDistanceFromSource) => GameOutcome
}

export type MonumentCardLogic = {
  readonly gameLogic: IMonumentCardLogic
}
