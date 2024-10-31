import { PlayerSlotId, PlayerSide, PlayerDefaultStrategy } from "../../game-data/game-play-data"
import { ManaflowProcPoint } from "../../game-play/local-game-state/channel-clan-manaflows/type-defs"
import { ManaflowPointProcResult } from "../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types"
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
  onManaflowProc: (
    boardState: BoardPiecesState,
    playerSide: PlayerSide,
    procPoint: ManaflowProcPoint,
  ) => ManaflowPointProcResult
  onManawaveFinalize?: () => void
  
  createInitialStockpile: () => ClanCardStockpile // run this when tile is placed by player on board
  onTokenPlacement?: () => void // run this when tokens are placed by player on tile
}


export interface IFamilyCardLogic {
  onManawaveInit?: () => void
  onManaflowProc: (
    boardState: BoardPiecesState,
    playerSide: PlayerSide,
    procPoint: ManaflowProcPoint,
  ) => ManaflowPointProcResult
  onManawaveFinalize?: () => void
  
  onPiecePlacement?: () => void // run this when tile is placed by player on board
  onTokenPlacement?: () => void // run this when tokens are placed by player on tile
}


export type ClanCardLogic = {
  gameLogic: IClanCardLogic
}


export type FamilyCardLogic = {
  gameLogic: IFamilyCardLogic
  onCardPickData: OnCardPickData
}
