import { ClanCardStockpile, TribeCardStockpile } from "../../../protobufs/protofiles-out/manawave-board"
import { ClanCardInstancePbId, FamilyCardInstancePbId, MwMarkerType } from "../../../protobufs/protofiles-out/manawave-types"
import { MwMarkerTypeToken, MwMarkerTypeCounter, createMwTokenCount, createMwCounterCount } from "../../type-defs/branded-marker-types"
import { ClanCardDefinition } from "../../type-defs/clan-defs"
import { FamilyCardDefinition } from "../../type-defs/family-defs"
import { ClanCardLogic, FamilyCardLogic } from "../../type-defs/game-data-type-defs"
import { convertToMwMarkerTypes } from "../marker-conversions"
import { TokenCounterTypeTags } from "../token-counter-icons"


export type MwCounterTypes<T> = {
  [K in keyof T]: T[K] extends MwMarkerTypeCounter ? K : never;
}[keyof T]

export type MwTokenTypes<T> = {
  [K in keyof T]: T[K] extends MwMarkerTypeToken ? K : never;
}[keyof T]



export interface IMwClanConversionRatio {
  // input: TokenCounterTypeTags[];
  // output: TokenCounterTypeTags[];
  input: MwMarkerType[];
  output: MwMarkerType;
}

export interface IMwTribeConversionRatio {
  // input: TokenCounterTypeTags[];
  // output: TokenCounterTypeTags;
  input: MwMarkerType[];
  output: MwMarkerType;
}


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
  readonly stockpile: ClanCardStockpile
  readonly activeModeIndex: number
  readonly conversionRatios: IMwClanConversionRatio[]
}


export type FamilyInPlayData = {
  readonly activeModeIndex: number
}


export type ClanPieceInstanceData = {
  readonly clanCardInstancePbId: ClanCardInstancePbId
}

export type FamilyPieceInstanceData = {
  readonly familyCardInstancePbId: FamilyCardInstancePbId
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


export const DefaultTribeConversionRatios: IMwTribeConversionRatio[] = [
  // {
  //   input: convertToMwMarkerTypes([
  //     '<::mana-counter::>',
  //     '<::mana-counter::>',
  //   ]),
  //   // output: convertToMwMarkerTypes([
  //   //   '<::manalith-token::>',
  //   // ]),
  //   output: MwMarkerType.MwMarkerType_ManalithToken,
  // },
  
  {
    input: convertToMwMarkerTypes([
      '<::mana-counter::>',
      '<::mana-counter::>',
    ]),
    // output: convertToMwMarkerTypes([
    output: MwMarkerType.MwMarkerType_AttackCounter,
  },
  {
    input: convertToMwMarkerTypes([
      '<::mana-counter::>',
      '<::mana-counter::>',
    ]),
    output: MwMarkerType.MwMarkerType_ShieldCounter,
  },
  {
    input: convertToMwMarkerTypes([
      '<::mana-counter::>',
      '<::mana-counter::>',
    ]),
    // output: convertToMwMarkerTypes([
    //   '<::population-increase-counter::>',
    // ]),
    output: MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
  },
]
