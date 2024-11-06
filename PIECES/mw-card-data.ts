import { PlayerSide } from "../../game-data/game-play-data";
import { ManaflowPointProcResult } from "../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { ManaflowProcPoint } from "../../game-play/local-game-state/channel-clan-manaflows/type-defs";
import { BoardPiecesState } from "../../game-play/local-game-state/local-board-state-types";
import { createMwBoardPlayerSideCoordinateKey } from "../type-defs/branded-string-types";
import { Totems } from "./totems";



export interface IModePrintSettings {
  fontSize: number    // defaults to 16
  imageSize: number   // defaults to 14
}

export interface IModeDigitalSettings {
  fontSize: number    // defaults to 16
  imageSize: number   // defaults to 14
}

export interface IModeLogic {
  onManaflowProc: (
    boardState: BoardPiecesState,
    playerSide: PlayerSide,
    procPoint: ManaflowProcPoint,
  ) => ManaflowPointProcResult
}

export interface IUnindexedMwCardModeData {
  numManalithClaimsToActivate: number
  modeText: string
  modeLogic: IModeLogic
  modePrintSettings?: IModePrintSettings
  modeDigitalSettings?: IModeDigitalSettings
}

export interface IMwCardModeData extends IUnindexedMwCardModeData {
  modeIndex: number;
}

export interface OnCardPickData {
  singlePickInitialPopulation: number
  multiplePickInitialPopulation: number
}

export interface IMwCardData {
  title: string;
  totems: Totems[];
  onCardPickData: OnCardPickData;
  modes: IMwCardModeData[]
}


export const UnimplementedModeLogic: IModeLogic = {
  onManaflowProc: (
    boardState: BoardPiecesState,
    playerSide: PlayerSide,
    procPoint: ManaflowProcPoint,
  ): ManaflowPointProcResult => {
    const coordinate = createMwBoardPlayerSideCoordinateKey(playerSide, procPoint.leylineDistance, procPoint.leylineRank);
    console.log("UNIMPLEMENTED MODE LOGIC @ " + coordinate);
    return { };
  },
};
