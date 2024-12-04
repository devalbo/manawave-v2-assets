import { LeylineDistanceFromSource } from "../mw-v2-protobufs/protofiles-out/manawave-types";
import { PlayerSide } from "./game-play-data";


type BrandedString<T> = string & { __brand: T };


const MAX_NUM_RANKS_PER_CLAN_COLUMN = 8;

export type MwBoardPlayerSideCoordinateKey = BrandedString<'MwBoardPlayerSideCoordinateKey'>;

export type SeasonIdStr = BrandedString<'SeasonIdStr'>;
export type ClanIdStr = BrandedString<'ClanIdStr'>;
export type TotemIdStr = BrandedString<'TotemIdStr'>;
export type MonumentIdStr = BrandedString<'MonumentIdStr'>;
export type FamilyCardInstanceIdStr = BrandedString<'FamilyCardInstanceIdStr'>;

export type ClanCardInstanceId = BrandedString<'ClanCardInstanceId'>;
export type FamilyCardInstanceId = BrandedString<'FamilyCardInstanceId'>;
export type PieceInstanceId = ClanCardInstanceId | FamilyCardInstanceId


const mapToLeylineColumnName = (leylineColumn: LeylineDistanceFromSource) => {
  switch (leylineColumn) {
    case LeylineDistanceFromSource.LeylineDistance_1: return 'A';
    case LeylineDistanceFromSource.LeylineDistance_2: return 'B';
    case LeylineDistanceFromSource.LeylineDistance_3: return 'C';
  }
}


export const createMwBoardPlayerSideCoordinateKey = (playerSide: PlayerSide, leylineColumn: LeylineDistanceFromSource, flowRank: number): MwBoardPlayerSideCoordinateKey => {
  if (flowRank > MAX_NUM_RANKS_PER_CLAN_COLUMN) {
    throw new Error("Unexpected rank value");
  }

  const columnName = mapToLeylineColumnName(leylineColumn);
  
  return `${playerSide}:${columnName}${flowRank}` as MwBoardPlayerSideCoordinateKey;
}


// export const createClanCardInstanceId = (playerSide: PlayerSide, clanId: ClanCardDefPbId): ClanCardInstanceId => {
//   return `${playerSide}[${clanId.seasonId}:${clanId.seasonClanCardId}]` as ClanCardInstanceId;
// }


// export const createFamilyCardInstanceId = (totemId: TotemPbId, playerSide: PlayerSide, playerSideCardIndex: number): FamilyCardInstanceId => {
//   const totemIdStr = toTotemIdStr(totemId);
//   return `${totemIdStr}:${playerSide}[${playerSideCardIndex}]` as FamilyCardInstanceId;
// }
