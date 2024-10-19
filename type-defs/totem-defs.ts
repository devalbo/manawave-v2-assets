import { PlayerSide } from "../../game-data/game-play-data";
import { FamilyCardDataDef, FamilyCardInstance } from "./game-data-type-defs";


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
