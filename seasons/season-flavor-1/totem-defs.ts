import { TotemPbId } from "@mw-protobufs/manawave-types";
import { FamilyCardInstance } from "../../PIECES/type-defs/type-defs";
import { PlayerSide } from "../../type-defs/game-play-data";


export type TotemIconId = 'shark' | 'turtle' | 'spirits';

export interface ITotemDetails {
  totemId: TotemPbId
  totemIconId: TotemIconId
  totemName: string

  optPlayCards: FamilyCardInstance[]
  osbPlayCards: FamilyCardInstance[]
}


export interface ITotemCardSet {
  totemDetails: ITotemDetails

  selectorCards: []
  playCards: []
}



export const getPlayerCardsForTotem = (totemDetails: ITotemDetails, playerSide: PlayerSide): FamilyCardInstance[] => {

  const playCards = [] as FamilyCardInstance[];

  if (playerSide === 'OPT') {
    totemDetails.optPlayCards.forEach((fcd, ) => {
      playCards.push(fcd);
    });
  } else {
    totemDetails.osbPlayCards.forEach((fcd, ) => {
      playCards.push(fcd);
    });
  }

  return playCards;
}
