import { PlayerSide } from "../../game-data/game-play-data";
import { TotemPbId } from "../../protobufs/protofiles-out/manawave-types";
import { FamilyCardInstance } from "../PIECES/type-defs/type-defs";


export interface ITotemDetails {
  totemId: TotemPbId
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

  totemDetails.optPlayCards.forEach((fcd, cardIndex) => {
    playCards.push(fcd);
  })

  totemDetails.osbPlayCards.forEach((fcd, cardIndex) => {
    playCards.push(fcd);
  })

  return playCards;
}
