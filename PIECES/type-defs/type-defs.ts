import { MwMarkerTypeToken, MwMarkerTypeCounter, createMwTokenCount, createMwCounterCount } from "../../type-defs/branded-marker-types"
import { ClanCardInstanceId, FamilyCardInstanceId, MwBoardPlayerSideCoordinateKey } from "../../type-defs/branded-string-types"
import { ClanCardDefinition } from "../../type-defs/clan-defs"
import { FamilyCardDefinition } from "../../type-defs/family-defs"
import { ClanCardLogic, FamilyCardLogic } from "../../type-defs/game-data-type-defs"




export type PlayerTribeCardStockpile = {
  soulStainTokenCount: MwMarkerTypeToken
  populationIncreaseCounters: MwMarkerTypeCounter
  manaCounters: MwMarkerTypeCounter
  attackCounters: MwMarkerTypeCounter
  shieldCounters: MwMarkerTypeCounter
}


export type ClanCardStockpile = {
  manalithTokens: MwMarkerTypeToken
  populationTokens: MwMarkerTypeToken

  populationIncreaseCounters: MwMarkerTypeCounter
  manaCounters: MwMarkerTypeCounter
  attackCounters: MwMarkerTypeCounter
  shieldCounters: MwMarkerTypeCounter
  sacrificeCounters: MwMarkerTypeCounter
}


// export type PlayerTribeCardIntraWaveStockpile = {
//   soulStainTokenCount: number
//   populationIncreaseCounters: number
//   manaCounters: number
//   attackCounters: number
//   shieldCounters: number
//   sacrificeCounters: number
// }


// export const EMPTY_PLAYER_TRIBE_INTRAWAVE_STOCKPILE: PlayerTribeCardIntraWaveStockpile = {
//   soulStainTokenCount: 0,
//   populationIncreaseCounters: 0,
//   manaCounters: 0,
//   attackCounters: 0,
//   shieldCounters: 0,
//   sacrificeCounters: 0,
// }

export type MwCounterTypes<T> = {
  [K in keyof T]: T[K] extends MwMarkerTypeCounter ? K : never;
}[keyof T]

export type MwTokenTypes<T> = {
  [K in keyof T]: T[K] extends MwMarkerTypeToken ? K : never;
}[keyof T]

// [K in keyof T]: T[K] extends string ? K : never;

// // Extract keys of type string
// type StringKeys<T> = {
//   [K in keyof T]: T[K] extends string ? K : never;
// }[keyof T];

// // Usage: Get only string keys from CustomDivProps
// type CustomDivStringProps = StringKeys<CustomDivProps>; 
// // Result: "mainColor" | "padding"


export type PlayerTribeCounterTypes = MwCounterTypes<PlayerTribeCardStockpile>
export type PlayerTribeTokenTypes = MwTokenTypes<PlayerTribeCardStockpile>

export type PlayerTribeCounterChanges = Record<PlayerTribeCounterTypes, number>
export type PlayerTribeTokenChanges = Record<PlayerTribeTokenTypes, number>


export type ClanCounterTypes = MwCounterTypes<ClanCardStockpile>
export type ClanTokenTypes = MwTokenTypes<ClanCardStockpile>

export type ClanCounterChanges = Record<ClanCounterTypes, number>
export type ClanTokenChanges = Record<ClanTokenTypes, number>



// export type ClanPlayPieceIntraWaveCounters = {
//   populationIncreaseCounters: number
//   sacrificeCounters: number
//   attackCounters: number
//   shieldCounters: number
//   manaCounters: number
//   // manalithTokens: number
// }

// export const EMPTY_CLAN_PLAY_PIECE_INTRAWAVE_COUNTERS: ClanPlayPieceIntraWaveCounters = {
//   populationIncreaseCounters: 0,
//   sacrificeCounters: 0,
//   attackCounters: 0,
//   shieldCounters: 0,
//   manaCounters: 0,
//   // manalithTokens: 0,
// }

// export type ClanCardCounterTypes = keyof ClanPlayPieceIntraWaveCounters
// export type ClanCounterChanges = Record<ClanCardCounterTypes, number>




// export type TribeCardMarkers = {
//   populationSize: number
//   intraWaveCounters: ClanCardMarkers
// }


// export type ClanCardMarkers = {
//   attackCounters: number
//   shieldCounters: number
//   populationIncreaseCounters: number
//   sacrificeCounters: number
//   manaCounters: number
//   manalithTokens: number
// }


export const EMPTY_PLAYER_TRIBE_CARD: PlayerTribeCardStockpile = {
  soulStainTokenCount: createMwTokenCount(0),
  populationIncreaseCounters: createMwCounterCount(0),
  manaCounters: createMwCounterCount(0),
  attackCounters: createMwCounterCount(0),
  shieldCounters: createMwCounterCount(0),
}

export const EMPTY_PLAYER_CLAN_CARD: ClanCardStockpile = {
  manalithTokens: createMwTokenCount(0),
  populationTokens: createMwTokenCount(0),
  populationIncreaseCounters: createMwCounterCount(0),
  manaCounters: createMwCounterCount(0),
  attackCounters: createMwCounterCount(0),
  shieldCounters: createMwCounterCount(0),
  sacrificeCounters: createMwCounterCount(0),
}


export const NOOP_TRIBE_CHANGES: PlayerTribeCardStockpile = {
  soulStainTokenCount: createMwTokenCount(0),
  populationIncreaseCounters: createMwCounterCount(0),
  manaCounters: createMwCounterCount(0),
  attackCounters: createMwCounterCount(0),
  shieldCounters: createMwCounterCount(0),
}

export const NOOP_CLAN_CHANGES: ClanCardStockpile = {
  manalithTokens: createMwTokenCount(0),
  populationTokens: createMwTokenCount(0),
  populationIncreaseCounters: createMwCounterCount(0),
  manaCounters: createMwCounterCount(0),
  attackCounters: createMwCounterCount(0),
  shieldCounters: createMwCounterCount(0),
  sacrificeCounters: createMwCounterCount(0),
}




export type ClanInPlayData = {
  boardLocation: MwBoardPlayerSideCoordinateKey
  stockPile: ClanCardStockpile
}


export type FamilyCardIntraManawaveStockpile = {
  // populationIncreaseCounters: number
  // sacrificeCounters: number
  // damageCounters: number
  // shieldCounters: number
}


export type FamilyInPlayData = {
  boardLocation: MwBoardPlayerSideCoordinateKey
} & FamilyCardIntraManawaveStockpile


export type ClanPieceInstanceData = {
  pieceId: ClanCardInstanceId
}

export type FamilyPieceInstanceData = {
  pieceId: FamilyCardInstanceId
}

export type PieceInstanceData = ClanPieceInstanceData | FamilyPieceInstanceData



// export type ClanCardType = { pieceType: 'clan-card' }
// export type FamilyCardType = { pieceType: 'family-card' }



export type ClanCardInstance = ClanCardLogic &
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



export type FamilyCardInstance = FamilyCardDefinition &
  FamilyCardLogic &
  FamilyPieceInstanceData

export type FamilyCardInPlayInstance = FamilyCardInstance &
  FamilyInPlayData
  


export type InPlayPieceInstance = ClanCardInPlayInstance | FamilyCardInPlayInstance
