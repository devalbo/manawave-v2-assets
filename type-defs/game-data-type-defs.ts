import { PlayerSlotId, PlayerSide, PlayerDefaultStrategy } from "../../game-data/game-play-data"
import { ManaflowProcResult } from "../../game-play/board-data/channel-clan-manaflows/type-defs"
import { LbsChannelingClanManaflowsBoardState, ManaflowPointProcResult } from "../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows"
import { PlayerPb } from "../../protobufs/protofiles-out/manawave"



export interface IPlayer {
  playerSlotId: PlayerSlotId
  playerSide: PlayerSide
  name: string
  defaultStrategy: PlayerDefaultStrategy

  rawPb: PlayerPb

  // totem1: ITotemDetails
  // totem2: ITotemDetails
  // initialPicks: IPlayerInitialPicks
}


export interface IPlayTileLogic {
  onManawaveInit?: () => void
  // onManawaveProc: (boardState: IMainGameBoardState, playerSide: PlayerSide) => SurgePointProcResult
  onManawaveProc: (boardState: LbsChannelingClanManaflowsBoardState, playerSide: PlayerSide) => ManaflowPointProcResult
  onManawaveFinalize?: () => void
  
  onPiecePlacement?: () => void // run this when tile is placed by player on board
  // getTokenOptions?: () => ITileTokenOptions
  onTokenPlacement?: () => void // run this when tokens are placed by player on tile
}


export type FamilyCardDataDef = {
  title: string
  text: string
  gameLogic: IPlayTileLogic
}


export type FamilyCardInstance = {
  dataDef: FamilyCardDataDef
  // instanceIndex: number
  instanceId: string
  // playerSideId: PlayerSideId
}
