import { PlayerSlotId, PlayerSide, PlayerDefaultStrategy } from "../../game-data/game-play-data"
import { ManaflowProcPoint } from "../../game-play/local-game-state/channel-clan-manaflows/type-defs"
import { LbsChannelClanManaflowsRoundState, ManaflowPointProcResult } from "../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types"
import { OnCardPickData } from "../PIECES/mw-card-data"
import { ClanCardStockpile } from "../../protobufs/protofiles-out/manawave-board"
import { PlayerPb } from "../../protobufs/protofiles-out/manawave-types"
import { BoardPiecesState } from "../../game-play/local-game-state/local-board-state-types"



export interface IPlayer {
  playerSlotId: PlayerSlotId
  playerSide: PlayerSide
  name: string
  defaultStrategy: PlayerDefaultStrategy

  rawPb: PlayerPb
}



export interface IClanCardLogic {
  onManawaveInit?: () => void
  // onManawaveProc: (boardState: IMainGameBoardState, playerSide: PlayerSide) => SurgePointProcResult
  onManaflowProc: (
    boardState: BoardPiecesState,
    // season: ISeason,
    playerSide: PlayerSide,
    procPoint: ManaflowProcPoint,
    // leyline: LeylineDistanceFromSource,
    // rank: number
  ) => ManaflowPointProcResult
  onManawaveFinalize?: () => void
  
  createInitialStockpile: () => ClanCardStockpile // run this when tile is placed by player on board
  // getTokenOptions?: () => ITileTokenOptions
  onTokenPlacement?: () => void // run this when tokens are placed by player on tile
}


export interface IFamilyCardLogic {
  onManawaveInit?: () => void
  // onManawaveProc: (boardState: IMainGameBoardState, playerSide: PlayerSide) => SurgePointProcResult
  onManaflowProc: (
    boardState: BoardPiecesState,
    // season: ISeason,
    playerSide: PlayerSide,
    procPoint: ManaflowProcPoint,
    // leyline: LeylineDistanceFromSource,
    // rank: number
  ) => ManaflowPointProcResult
  onManawaveFinalize?: () => void
  
  onPiecePlacement?: () => void // run this when tile is placed by player on board
  // getTokenOptions?: () => ITileTokenOptions
  onTokenPlacement?: () => void // run this when tokens are placed by player on tile
}


// export type FamilyCardDataDef = {
//   title: string
//   text: string
//   gameLogic: IPlayTileLogic
// }

export type ClanCardLogic = {
  // title: string
  // text: string
  gameLogic: IClanCardLogic
}


// export type FamilyCardInstance = {
//   dataDef: FamilyCardDataDef
//   instanceId: string
// }

export type FamilyCardLogic = {
  // title: string
  // text: string
  gameLogic: IFamilyCardLogic
  onCardPickData: OnCardPickData
}