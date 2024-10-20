import { ClanCardInstanceId, FamilyCardInstanceId, MwBoardPlayerSideCoordinateKey } from "../../../game-play/branded-string-types"
import { ClanCardDefinition } from "../../type-defs/clan-defs"
import { FamilyCardDefinition } from "../../type-defs/family-defs"
import { ClanCardLogic, FamilyCardLogic } from "../../type-defs/game-data-type-defs"


export type TribePlayPieceInstanceTokens = {
  populationSize: number
  intraWaveCounters: ClanCardIntraManawaveStockpile
}



export type ClanCardIntraManawaveStockpile = {
  populationIncreaseCounters: number
  sacrificeCounters: number
  damageCounters: number
  shieldCounters: number
}


export type ClanInPlayData = {
  boardLocation: MwBoardPlayerSideCoordinateKey
} & ClanCardIntraManawaveStockpile


export type FamilyCardIntraManawaveStockpile = {
  // populationIncreaseCounters: number
  // sacrificeCounters: number
  // damageCounters: number
  // shieldCounters: number
}


export type FamilyInPlayData = {
  boardLocation: MwBoardPlayerSideCoordinateKey
} & FamilyCardIntraManawaveStockpile


// export type PieceInstanceData = {
//   pieceId: PieceInstanceId
// }

export type ClanPieceInstanceData = {
  pieceId: ClanCardInstanceId
}

export type FamilyPieceInstanceData = {
  pieceId: FamilyCardInstanceId
}

export type PieceInstanceData = ClanPieceInstanceData | FamilyPieceInstanceData



export type ClanCardType = { pieceType: 'clan-card' }
export type FamilyCardType = { pieceType: 'family-card' }



export type ClanCardInstance = ClanCardType &
  ClanCardLogic &
  ClanCardDefinition &
  ClanPieceInstanceData

export type ClanCardInPlayInstance = ClanCardInstance &
  ClanInPlayData
  

// export type FamilyCardInPlayInstance = IMwCardData & 
//   PieceInPlayData &
//   ClanCardIntraManawaveStockpile &
//   FamilyCardDataDef & {
//     type: 'family-card'
//   }



export type FamilyCardInstance = FamilyCardType &
  FamilyCardDefinition &
  FamilyCardLogic &
  FamilyPieceInstanceData

export type FamilyCardInPlayInstance = FamilyCardInstance &
  FamilyInPlayData
  


export type InPlayPieceInstance = ClanCardInPlayInstance | FamilyCardInPlayInstance
