import { Sd1Totem } from "@mw-assets/type-defs/totem-type-defs";
import { ManaflowPointProcResult } from "../../mw-v2-game-engine/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { ManaflowProcPoint } from "../../mw-v2-game-engine/local-game-state/channel-clan-manaflows/type-defs";
import { createMwBoardPlayerSideCoordinateKey } from "../type-defs/branded-string-types";
import { Totems } from "./totems";
import { ManawaveVmInstruction } from "@mw-protobufs/manawave-vm";
import { PlayerSide } from "@mw-assets/type-defs/game-play-data";
import { GameBoardStatePb } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-board";

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
    boardState: GameBoardStatePb,
    playerSide: PlayerSide,
    procPoint: ManaflowProcPoint,
  ) => ManaflowPointProcResult
  mvmInstructions: ManawaveVmInstruction[]
}


export interface IFamilyCardModeLogic {
  onManaflowProc: (
    boardState: GameBoardStatePb,
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
  totems: (Totems | Sd1Totem)[];
  onCardPickData: OnCardPickData;
  modes: IMwCardModeData[]
}


export const UnimplementedFamilyCardModeLogic: IFamilyCardModeLogic = {
  onManaflowProc: (
    _boardState: GameBoardStatePb,
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
        deferToOnManaflowProcImpl: {
          dummyValue: "",
        }
      },
    },  
  ],
};


export const UnimplementedClanCardModeLogic: IClanCardModeLogic = {
  onManaflowProc: (
    _boardState: GameBoardStatePb,
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
    onManaflowProc: (_boardState: GameBoardStatePb, _playerSide: PlayerSide, _procPoint: ManaflowProcPoint): ManaflowPointProcResult => {
      throw new Error("UNIMPLEMENTED onManaflowProc - MVM INSTRUCTIONS ONLY");
    },
    mvmInstructions,
  };
}


export const createMvmInstructionsOnlyFamilyModeLogic = (mvmInstructions: ManawaveVmInstruction[]): IFamilyCardModeLogic => {
  return {
    onManaflowProc: (_boardState: GameBoardStatePb, _playerSide: PlayerSide, _procPoint: ManaflowProcPoint): ManaflowPointProcResult => {
      throw new Error("UNIMPLEMENTED onManaflowProc - MVM INSTRUCTIONS ONLY");
    },
    mvmInstructions,
  };
}
