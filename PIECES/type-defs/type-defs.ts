import { ClanCardInstancePbId, FamilyCardInstancePbId } from "../../../protobufs/protofiles-out/manawave-types"
import { MwMarkerTypeToken, MwMarkerTypeCounter, createMwTokenCount, createMwCounterCount } from "../../type-defs/branded-marker-types"
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
  manalithClaimCounters: MwMarkerTypeCounter
  attackCounters: MwMarkerTypeCounter
  shieldCounters: MwMarkerTypeCounter
  sacrificeCounters: MwMarkerTypeCounter
}


export type MwCounterTypes<T> = {
  [K in keyof T]: T[K] extends MwMarkerTypeCounter ? K : never;
}[keyof T]

export type MwTokenTypes<T> = {
  [K in keyof T]: T[K] extends MwMarkerTypeToken ? K : never;
}[keyof T]


export type PlayerTribeCounterTypes = MwCounterTypes<PlayerTribeCardStockpile>
export type PlayerTribeTokenTypes = MwTokenTypes<PlayerTribeCardStockpile>

export type PlayerTribeCounterChanges = Record<PlayerTribeCounterTypes, number>
export type PlayerTribeTokenChanges = Record<PlayerTribeTokenTypes, number>


export type ClanCounterTypes = MwCounterTypes<ClanCardStockpile>
export type ClanTokenTypes = MwTokenTypes<ClanCardStockpile>

export type ClanCounterChanges = Record<ClanCounterTypes, number>
export type ClanTokenChanges = Record<ClanTokenTypes, number>


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
  manalithClaimCounters: createMwCounterCount(0),
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
  manalithClaimCounters: createMwCounterCount(0),
  populationIncreaseCounters: createMwCounterCount(0),
  manaCounters: createMwCounterCount(0),
  attackCounters: createMwCounterCount(0),
  shieldCounters: createMwCounterCount(0),
  sacrificeCounters: createMwCounterCount(0),
}



export type ClanInPlayData = {
  stockpile: ClanCardStockpile
  activeModeIndex: number
}


export type FamilyCardIntraManawaveStockpile = {
  manalithClaimCounters: MwMarkerTypeCounter
}


export type FamilyInPlayData = {
  activeModeIndex: number
} & FamilyCardIntraManawaveStockpile


export type ClanPieceInstanceData = {
  clanCardInstancePbId: ClanCardInstancePbId
}

export type FamilyPieceInstanceData = {
  familyCardInstancePbId: FamilyCardInstancePbId
}

export type PieceInstanceData = ClanPieceInstanceData | FamilyPieceInstanceData



// export type ClanCardType = { pieceType: 'clan-card' }
// export type FamilyCardType = { pieceType: 'family-card' }



export type ClanCardInstance = ClanCardLogic &
  ClanCardDefinition &
  ClanPieceInstanceData

export type ClanCardInPlayInstance = ClanCardInstance &
  ClanInPlayData
  

export type FamilyCardInstance = FamilyCardDefinition &
  FamilyCardLogic &
  FamilyPieceInstanceData

export type FamilyCardInPlayInstance = FamilyCardInstance &
  FamilyInPlayData
  


export type InPlayPieceInstance = ClanCardInPlayInstance | FamilyCardInPlayInstance
