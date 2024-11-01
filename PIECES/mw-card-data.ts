import { Totems } from "./totems";



export interface IModePrintSettings {
  fontSize: number    // defaults to 16
  imageSize: number   // defaults to 14
}

export interface IModeDigitalSettings {
  fontSize: number    // defaults to 16
  imageSize: number   // defaults to 14
}

export interface IUnindexedMwCardModeData {
  numManalithClaimsToActivate: number;
  modeText: string;
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
