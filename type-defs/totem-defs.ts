// import { PlayCardInstance, PlayCardInstanceId, PlayerId } from "../game-state/type-defs";
// import { totemId, FactionIndicatorTileDef, PlayPiece, PlayPieceDef, PlayPieceInstanceId } from "../game-typedefs/game-tile"

import { PlayerSide } from "../../game-data/game-play-data";
import { FamilyCardDataDef, FamilyCardInstance } from "./game-data-type-defs";


// export type Faction = 'defenders' | 'warriors' | 'increasers';
// export const FactionChoices = ['defenders', 'increasers', 'warriors'] as Faction[]


// export interface ITotemDetails {
//   totemId: totemId
//   totemName: string
  
//   indicatorTileDef: FactionIndicatorTileDef
//   playingPieceTileDefs: PlayPieceDef[]
// }


// export interface ISeason {
//   playSetName: string
//   playSetId: string
//   playSetDescription: string
//   allTotemChoices: ITotemDetails[]
// }


export type Totem = 'tiger' | 'ox' | 'spirits';
export const TotemChoices = ['tiger', 'ox', 'spirits'] as Totem[]
export type TotemId = (typeof TotemChoices)[number];

export interface ITotemDetails {
  totemId: TotemId
  totemName: string

  playCards: FamilyCardDataDef[]
}

export interface ITotemCardSet {
  totemDetails: ITotemDetails

  selectorCards: []
  playCards: []
}

// export interface ISeason {
//   seasonName: string
//   seasonId: string
//   seasonDescription: string
//   allTotemChoices: ITotemDetails[]
// }


// export const getPlayTilesForTotem = (totemDetails: ITotemDetails, playerId: PlayerId): PlayPiece[] => {

//   const playPieces = [] as PlayPiece[];

//   const gameTileDefs = totemDetails.playingPieceTileDefs;
//   gameTileDefs.forEach((ptd, tileIndex) => {
//     const playPiece: PlayPiece = {
//       ...ptd,
//       instanceId: `${playerId}:${totemDetails.totemId}[${tileIndex}]` as unknown as PlayPieceInstanceId,
//     }
//     playPieces.push(playPiece);
//   })

//   return playPieces;
// }


export const getPlayCardsForTotem = (totemDetails: ITotemDetails, playerSide: PlayerSide): FamilyCardInstance[] => {

  const playCards = [] as FamilyCardInstance[];

  const familyCardDefs = totemDetails.playCards;

  familyCardDefs.forEach((fcd, cardIndex) => {
    const familyCard: FamilyCardInstance = {
      dataDef: fcd,
      instanceId: `${playerSide}:${totemDetails.totemId}[${cardIndex}]`,
    }
    playCards.push(familyCard);
  })

  return playCards;
}
