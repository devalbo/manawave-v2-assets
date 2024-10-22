import { PlayerSlotId, PlayerSide, PlayerDefaultStrategy } from "../../game-data/game-play-data"
import { ManaflowProcPoint } from "../../game-play/board-data/channel-clan-manaflows/type-defs"
import { LbsChannelClanManaflowsBoardState, ManaflowPointProcResult } from "../../game-play/board-data/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types"
import { PlayerPb } from "../../protobufs/protofiles-out/manawave"
import { OnCardPickData } from "../PIECES/mw-card-data"



export interface IPlayer {
  playerSlotId: PlayerSlotId
  playerSide: PlayerSide
  name: string
  defaultStrategy: PlayerDefaultStrategy

  rawPb: PlayerPb
}


export interface IPlayTileLogic {
  onManawaveInit?: () => void
  // onManawaveProc: (boardState: IMainGameBoardState, playerSide: PlayerSide) => SurgePointProcResult
  onManaflowProc: (
    boardState: LbsChannelClanManaflowsBoardState,
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
  gameLogic: IPlayTileLogic
}


// export type FamilyCardInstance = {
//   dataDef: FamilyCardDataDef
//   instanceId: string
// }

export type FamilyCardLogic = {
  // title: string
  // text: string
  gameLogic: IPlayTileLogic
  onCardPickData: OnCardPickData
}