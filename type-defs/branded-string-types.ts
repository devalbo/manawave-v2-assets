import { PlayerSide } from "../../game-data/game-play-data";
import { LeylineDistanceFromSource } from "../../protobufs/protofiles-out/manawave-types";
import { MAX_NUM_RANKS_PER_CLAN_COLUMN } from "../../game-play/phases/constants";


type BrandedString<T> = string & { __brand: T };


export type MwBoardPlayerSideCoordinateKey = BrandedString<'MwBoardPlayerSideCoordinateKey'>;

export type SeasonIdStr = BrandedString<'SeasonIdStr'>;
export type TotemIdStr = BrandedString<'TotemIdStr'>;
export type MonumentIdStr = BrandedString<'MonumentIdStr'>;

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


export const createMwBoardPlayerSideCoordinateKey = (playerSide: PlayerSide, leylineColumn: LeylineDistanceFromSource, leylineRank: number): MwBoardPlayerSideCoordinateKey => {
  if (leylineRank > MAX_NUM_RANKS_PER_CLAN_COLUMN) {
    throw new Error("Unexpected rank value");
  }

  const columnName = mapToLeylineColumnName(leylineColumn);
  
  return `${playerSide}:${columnName}${leylineRank}` as MwBoardPlayerSideCoordinateKey;
}


export const createClanCardInstanceId = (playerSide: PlayerSide, title: string): ClanCardInstanceId => {
  return `${playerSide}[${title}]` as ClanCardInstanceId;
}


export const createFamilyCardInstanceId = (totemId: TotemIdStr, playerSide: PlayerSide, playerSideCardIndex: number): FamilyCardInstanceId => {
  return `${totemId}:${playerSide}[${playerSideCardIndex}]` as FamilyCardInstanceId;
}
