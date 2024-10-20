import { PlayerSide } from "../../game-data/game-play-data";
import { FamilyCardInstance } from "../PIECES/type-defs/type-defs";


export type Totem = 'tiger' | 'ox' | 'spirits';
export const TotemChoices = ['tiger', 'ox', 'spirits'] as Totem[]
export type TotemId = (typeof TotemChoices)[number];

export interface ITotemDetails {
  totemId: TotemId
  totemName: string

  optPlayCards: FamilyCardInstance[]
  osbPlayCards: FamilyCardInstance[]
}

export interface ITotemCardSet {
  totemDetails: ITotemDetails

  selectorCards: []
  playCards: []
}


export const getPlayCardsForTotem = (totemDetails: ITotemDetails, playerSide: PlayerSide): FamilyCardInstance[] => {

  const playCards = [] as FamilyCardInstance[];

  // const familyCardDefs = totemDetails.playCards;

  totemDetails.optPlayCards.forEach((fcd, cardIndex) => {
    // const familyCard: FamilyCardInstance = {
    //   // dataDef: fcd,
    //   ...fcd,
    //   // instanceId: `${playerSide}:${totemDetails.totemId}[${cardIndex}]`,
      
    // }
    playCards.push(fcd);
  })

  totemDetails.osbPlayCards.forEach((fcd, cardIndex) => {
    // const familyCard: FamilyCardInstance = {
    //   // dataDef: fcd,
    //   ...fcd,
    //   // instanceId: `${playerSide}:${totemDetails.totemId}[${cardIndex}]`,
      
    // }
    playCards.push(fcd);
  })

  return playCards;
}
