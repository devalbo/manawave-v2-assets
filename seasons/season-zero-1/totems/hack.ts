import { PlayerSide } from "../../../../game-data/game-play-data";
import { ManaflowPointProcResult } from "../../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows";
import { createFamilyCardInstanceId } from "../../../../game-play/branded-string-types";
import { IMwCardData } from "../../../PIECES/mw-card-data";
import { FamilyCardInstance } from "../../../PIECES/type-defs/type-defs";
import { TotemId } from "../../../type-defs/totem-defs";


export const convertToFamilyCardInstance = (toConvert: IMwCardData, totemId: TotemId, playerSide: PlayerSide, playerSideCardIndex: number): FamilyCardInstance => {
  const retVal: FamilyCardInstance = {
    ...toConvert,
    text: "TODO: fill in text for " + toConvert.title,
    totemId,
    pieceId: createFamilyCardInstanceId(totemId, playerSide, playerSideCardIndex),
    gameLogic: {
      onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
        return { };
      },
    },
    conversionRatios: [],
    pieceType: 'family-card',
  };

  return retVal;
}

