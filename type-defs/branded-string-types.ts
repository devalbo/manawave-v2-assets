import { LeylineDistanceFromSource } from "../mw-v2-protobufs/protofiles-out/manawave-types";
import { PlayerSide } from "./game-play-data";


type BrandedString<T> = string & { __brand: T };

export type LeylineColumnName = 'A' | 'B' | 'C';


const MAX_NUM_RANKS_PER_CLAN_COLUMN = 8;

export type MwBoardPlayerSideCoordinate = {
  playerSide: PlayerSide;
  leylineColumn: LeylineDistanceFromSource;
  rank: number;
}

export type MwBoardPlayerSideCoordinateKey = BrandedString<'MwBoardPlayerSideCoordinateKey'>;

export type SeasonIdStr = BrandedString<'SeasonIdStr'>;
export type ClanIdStr = BrandedString<'ClanIdStr'>;
export type TotemIdStr = BrandedString<'TotemIdStr'>;
export type MonumentIdStr = BrandedString<'MonumentIdStr'>;
export type FamilyCardInstanceIdStr = BrandedString<'FamilyCardInstanceIdStr'>;

export type ClanCardInstanceId = BrandedString<'ClanCardInstanceId'>;
export type FamilyCardInstanceId = BrandedString<'FamilyCardInstanceId'>;
export type PieceInstanceId = ClanCardInstanceId | FamilyCardInstanceId


const mapToLeylineColumnName = (leylineColumn: LeylineDistanceFromSource): LeylineColumnName => {
  switch (leylineColumn) {
    case LeylineDistanceFromSource.LeylineDistance_1: return 'A';
    case LeylineDistanceFromSource.LeylineDistance_2: return 'B';
    case LeylineDistanceFromSource.LeylineDistance_3: return 'C';
    default: throw new Error(`UNHANDLED LEYLINE COLUMN: ${leylineColumn}`);
  }
}

const mapFromLeylineColumnName = (columnName: LeylineColumnName): LeylineDistanceFromSource => {
  switch (columnName) {
    case 'A': return LeylineDistanceFromSource.LeylineDistance_1;
    case 'B': return LeylineDistanceFromSource.LeylineDistance_2;
    case 'C': return LeylineDistanceFromSource.LeylineDistance_3;
  }
}


export const createMwBoardPlayerSideCoordinate = (playerSide: PlayerSide, leylineColumn: LeylineDistanceFromSource, flowRank: number): MwBoardPlayerSideCoordinate => {
  const retVal: MwBoardPlayerSideCoordinate = {
    playerSide,
    leylineColumn,
    rank: flowRank,
  };

  return retVal;
}


export const createMwBoardPlayerSideCoordinateKey = (playerSide: PlayerSide, leylineColumn: LeylineDistanceFromSource, flowRank: number): MwBoardPlayerSideCoordinateKey => {
  if (flowRank > MAX_NUM_RANKS_PER_CLAN_COLUMN) {
    throw new Error("Unexpected rank value");
  }

  const columnName = mapToLeylineColumnName(leylineColumn);
  
  return `${playerSide}:${columnName}${flowRank}` as MwBoardPlayerSideCoordinateKey;
}


export const createMwBoardPlayerSideCoordinateKeyFromCoordinate = (coordinate: MwBoardPlayerSideCoordinate): MwBoardPlayerSideCoordinateKey => {
  return createMwBoardPlayerSideCoordinateKey(coordinate.playerSide, coordinate.leylineColumn, coordinate.rank);
}

export const parseMwBoardPlayerSideCoordinateKey = (coordinateKey: MwBoardPlayerSideCoordinateKey): MwBoardPlayerSideCoordinate => {
  const [playerSide, rest] = coordinateKey.split(':') as [PlayerSide, string];

  const columnName = rest.slice(0, 1) as LeylineColumnName;
  const rank = parseInt(rest.slice(1));
  const leylineColumn = mapFromLeylineColumnName(columnName);
  
  const retVal: MwBoardPlayerSideCoordinate = {
    playerSide,
    leylineColumn,
    rank,
  };

  return retVal;
}
