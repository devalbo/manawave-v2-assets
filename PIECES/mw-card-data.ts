import { PlayerSide } from "../../game-data/game-play-data";
import { ManaflowPointProcResult } from "../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { ManaflowProcPoint } from "../../game-play/local-game-state/channel-clan-manaflows/type-defs";
import { BoardPiecesState } from "../../game-play/local-game-state/local-board-state-types";
import { createMwBoardPlayerSideCoordinateKey } from "../type-defs/branded-string-types";
import { Totems } from "./totems";
import { ManawaveVmInstruction } from "../../protobufs/protofiles-out/manawave-vm";

export interface IModePrintSettings {
  fontSize: number    // defaults to 16
  imageSize: number   // defaults to 14
}

export interface IModeDigitalSettings {
  fontSize: number    // defaults to 16
  imageSize: number   // defaults to 14
}

export interface IClanCardModeLogic {
  onManaflowProc: (
    boardState: BoardPiecesState,
    playerSide: PlayerSide,
    procPoint: ManaflowProcPoint,
  ) => ManaflowPointProcResult
  mvmInstructions: ManawaveVmInstruction[]
}


export interface IFamilyCardModeLogic {
  onManaflowProc: (
    boardState: BoardPiecesState,
    playerSide: PlayerSide,
    procPoint: ManaflowProcPoint,
  ) => ManaflowPointProcResult
  mvmInstructions: ManawaveVmInstruction[]
}

export interface IUnindexedMwCardModeData {
  numManalithClaimsToActivate: number
  modeText: string
  modeLogic: IClanCardModeLogic | IFamilyCardModeLogic
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


export const UnimplementedFamilyCardModeLogic: IFamilyCardModeLogic = {
  onManaflowProc: (
    boardState: BoardPiecesState,
    playerSide: PlayerSide,
    procPoint: ManaflowProcPoint,
  ): ManaflowPointProcResult => {
    const coordinate = createMwBoardPlayerSideCoordinateKey(playerSide, procPoint.leylineDistance, procPoint.leylineRank);
    console.log("UNIMPLEMENTED FAMILY CARD MODE LOGIC @ " + coordinate);
    return { };
  },
  mvmInstructions: [
    {
      instruction: {
        oneofKind: "deferToOnManaflowProcImpl",
        deferToOnManaflowProcImpl: {}
      },
    },  
  ],
};


export const UnimplementedClanCardModeLogic: IClanCardModeLogic = {
  onManaflowProc: (
    boardState: BoardPiecesState,
    playerSide: PlayerSide,
    procPoint: ManaflowProcPoint,
  ): ManaflowPointProcResult => {
    const coordinate = createMwBoardPlayerSideCoordinateKey(playerSide, procPoint.leylineDistance, procPoint.leylineRank);
    console.log("UNIMPLEMENTED CLAN CARD MODE LOGIC @ " + coordinate);
    return { };
  },
  mvmInstructions: [],
};


export const createMvmInstructionsOnlyClanModeLogic = (mvmInstructions: ManawaveVmInstruction[]): IClanCardModeLogic => {
  return {
    onManaflowProc: (boardState: BoardPiecesState, playerSide: PlayerSide, procPoint: ManaflowProcPoint): ManaflowPointProcResult => {
      throw new Error("UNIMPLEMENTED onManaflowProc - MVM INSTRUCTIONS ONLY");
    },
    mvmInstructions,
  };
}


export const createMvmInstructionsOnlyFamilyModeLogic = (mvmInstructions: ManawaveVmInstruction[]): IFamilyCardModeLogic => {
  return {
    onManaflowProc: (boardState: BoardPiecesState, playerSide: PlayerSide, procPoint: ManaflowProcPoint): ManaflowPointProcResult => {
      throw new Error("UNIMPLEMENTED onManaflowProc - MVM INSTRUCTIONS ONLY");
    },
    mvmInstructions,
  };
}