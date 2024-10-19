import { MwBoardPlayerSideCoordinateKey } from "../../../game-play/branded-string-types"
import { FamilyCardDataDef } from "../../type-defs/game-data-type-defs"
import { IMwCardData } from "../mw-card-data"
import { IMwClanData } from "../MwClanTemplate"


export type PieceInPlayData = {
  boardLocation: MwBoardPlayerSideCoordinateKey
}

// export type InPlayPieceMonument = PlayPieceMonument & PieceInPlayData
// export type InPlayPieceGeography = PlayPieceGeography & PieceInPlayData
// export type InPlayPieceTribe = PlayPieceTribe & PieceInPlayData & TribePlayPieceInstanceTokens


// export type InPlayPieceInstance = InPlayPieceMonument
// | InPlayPieceGeography
// | InPlayPieceTribe

export type TribePlayPieceIntraWaveCounters = {
  populationIncreaseCounters: number
  sacrificeCounters: number
  damageCounters: number
  shieldCounters: number
}

export type TribePlayPieceInstanceTokens = {
  populationSize: number
  intraWaveCounters: TribePlayPieceIntraWaveCounters
}


export type InPlayPieceClan = IMwClanData & PieceInPlayData & TribePlayPieceIntraWaveCounters & FamilyCardDataDef
export type InPlayPieceFamily = IMwCardData & PieceInPlayData & TribePlayPieceIntraWaveCounters & FamilyCardDataDef
// export type InPlayPieceTribe = PlayPieceTribe & PieceInPlayData & TribePlayPieceInstanceTokens


export type InPlayPieceInstance = InPlayPieceClan | InPlayPieceFamily
