import { ManaflowPointProcResult } from "../../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows";
import { IMwCardData } from "../../../PIECES/mw-card-data";
import { FamilyCardDataDef } from "../../../type-defs/game-data-type-defs";


export const convertToFamilyCardDataDef = (toConvert: IMwCardData): FamilyCardDataDef => {
  const retVal: FamilyCardDataDef = {
    ...toConvert,
    text: "TODO: fill in text for " + toConvert.title,
    gameLogic: {
      onManawaveProc: (boardState, playerSide): ManaflowPointProcResult => {
        return { };
      },
    },
  };

  return retVal;
}