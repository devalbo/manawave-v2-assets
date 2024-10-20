import { MwBoardPlayerSideCoordinateKey } from "../../../game-play/branded-string-types"
import { ClanCardDefinition } from "../../type-defs/clan-defs"
import { ClanCardLogic, FamilyCardDataDef } from "../../type-defs/game-data-type-defs"
import { IMwCardData } from "../mw-card-data"


export type TribePlayPieceInstanceTokens = {
  populationSize: number
  intraWaveCounters: ClanCardIntraManawaveStockpile
}


export type PieceInPlayData = {
  boardLocation: MwBoardPlayerSideCoordinateKey
}


export type ClanCardIntraManawaveStockpile = {
  populationIncreaseCounters: number
  sacrificeCounters: number
  damageCounters: number
  shieldCounters: number
}


export type ClanCardInPlayInstance = ClanCardDefinition & 
  PieceInPlayData &
  ClanCardIntraManawaveStockpile &
  ClanCardLogic


export type FamilyCardInPlayInstance = IMwCardData & 
  PieceInPlayData &
  ClanCardIntraManawaveStockpile &
  FamilyCardDataDef


export type InPlayPieceInstance = ClanCardInPlayInstance | FamilyCardInPlayInstance
