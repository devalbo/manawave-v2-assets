import { ClanCardStockpile, TribeCardStockpile } from "../../../protobufs/protofiles-out/manawave-board"
import { ClanCardInstancePbId, FamilyCardInstancePbId } from "../../../protobufs/protofiles-out/manawave-types"
import { MwMarkerTypeToken, MwMarkerTypeCounter, createMwTokenCount, createMwCounterCount } from "../../type-defs/branded-marker-types"
import { ClanCardDefinition } from "../../type-defs/clan-defs"
import { FamilyCardDefinition } from "../../type-defs/family-defs"
import { ClanCardLogic, FamilyCardLogic } from "../../type-defs/game-data-type-defs"


export type MwCounterTypes<T> = {
  [K in keyof T]: T[K] extends MwMarkerTypeCounter ? K : never;
}[keyof T]

export type MwTokenTypes<T> = {
  [K in keyof T]: T[K] extends MwMarkerTypeToken ? K : never;
}[keyof T]


export type PlayerTribeCounterTypes = MwCounterTypes<TribeCardStockpile>
export type PlayerTribeTokenTypes = MwTokenTypes<TribeCardStockpile>

export type PlayerTribeCounterChanges = Record<PlayerTribeCounterTypes, number>
export type PlayerTribeTokenChanges = Record<PlayerTribeTokenTypes, number>


export type ClanCounterTypes = MwCounterTypes<ClanCardStockpile>
export type ClanTokenTypes = MwTokenTypes<ClanCardStockpile>

export type ClanCounterChanges = Record<ClanCounterTypes, number>
export type ClanTokenChanges = Record<ClanTokenTypes, number>


export const EMPTY_PLAYER_TRIBE_STOCKPILE: TribeCardStockpile = {
  soulstainTokenCount: createMwTokenCount(0),
  populationIncreaseCountersCount: createMwCounterCount(0),
  manaCountersCount: createMwCounterCount(0),
  attackCountersCount: createMwCounterCount(0),
  shieldCountersCount: createMwCounterCount(0),
}

export const EMPTY_PLAYER_CLAN_STOCKPILE: ClanCardStockpile = {
  manalithTokensCount: createMwTokenCount(0),
  populationTokensCount: createMwTokenCount(0),
  manalithClaimCountersCount: createMwCounterCount(0),
  populationIncreaseCountersCount: createMwCounterCount(0),
  manaCountersCount: createMwCounterCount(0),
  attackCountersCount: createMwCounterCount(0),
  shieldCountersCount: createMwCounterCount(0),
  sacrificeCountersCount: createMwCounterCount(0),
}


export const NOOP_TRIBE_STOCKPILE_CHANGES: TribeCardStockpile = {
  soulstainTokenCount: createMwTokenCount(0),
  populationIncreaseCountersCount: createMwCounterCount(0),
  manaCountersCount: createMwCounterCount(0),
  attackCountersCount: createMwCounterCount(0),
  shieldCountersCount: createMwCounterCount(0),
}

export const NOOP_CLAN_STOCKPILE_CHANGES: ClanCardStockpile = {
  manalithTokensCount: createMwTokenCount(0),
  populationTokensCount: createMwTokenCount(0),
  manalithClaimCountersCount: createMwCounterCount(0),
  populationIncreaseCountersCount: createMwCounterCount(0),
  manaCountersCount: createMwCounterCount(0),
  attackCountersCount: createMwCounterCount(0),
  shieldCountersCount: createMwCounterCount(0),
  sacrificeCountersCount: createMwCounterCount(0),
}


export type ClanInPlayData = {
  stockpile: ClanCardStockpile
  activeModeIndex: number
}


export type FamilyInPlayData = {
  activeModeIndex: number
  manalithClaimCountersCount: MwMarkerTypeCounter
}


export type ClanPieceInstanceData = {
  clanCardInstancePbId: ClanCardInstancePbId
}

export type FamilyPieceInstanceData = {
  familyCardInstancePbId: FamilyCardInstancePbId
}

export type PieceInstanceData = ClanPieceInstanceData | FamilyPieceInstanceData


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
