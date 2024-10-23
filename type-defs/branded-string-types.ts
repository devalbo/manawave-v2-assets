import { PlayerSide } from "../../game-data/game-play-data";
import { LeylineDistanceFromSource, TotemPbId } from "../../protobufs/protofiles-out/manawave-types";
import { MAX_NUM_RANKS_PER_CLAN_COLUMN } from "../../game-play/phase-views/constants";
import { toTotemIdStr } from "../../game-data/pb-id-str-mapping";


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


export const createMwBoardPlayerSideCoordinateKey = (playerSide: PlayerSide, leylineColumn: LeylineDistanceFromSource, flowRank: number): MwBoardPlayerSideCoordinateKey => {
  if (flowRank > MAX_NUM_RANKS_PER_CLAN_COLUMN) {
    throw new Error("Unexpected rank value");
  }

  const columnName = mapToLeylineColumnName(leylineColumn);
  
  return `${playerSide}:${columnName}${flowRank}` as MwBoardPlayerSideCoordinateKey;
}


export const createClanCardInstanceId = (playerSide: PlayerSide, title: string): ClanCardInstanceId => {
  return `${playerSide}[${title}]` as ClanCardInstanceId;
}


// export const createFamilyCardInstanceId = (totemId: TotemIdStr, playerSide: PlayerSide, playerSideCardIndex: number): FamilyCardInstanceId => {
//   return `${totemId}:${playerSide}[${playerSideCardIndex}]` as FamilyCardInstanceId;
// }


export const createFamilyCardInstanceId = (totemId: TotemPbId, playerSide: PlayerSide, playerSideCardIndex: number): FamilyCardInstanceId => {
  const totemIdStr = toTotemIdStr(totemId);
  return `${totemIdStr}:${playerSide}[${playerSideCardIndex}]` as FamilyCardInstanceId;
}
