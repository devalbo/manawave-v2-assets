import { Totems } from "./totems";



export interface IModePrintSettings {
  fontSize: number    // defaults to 16
  imageSize: number   // defaults to 14
}

export interface ICardModeData {
  manaCost: number;
  modeText: string;
  modePrintSettings?: IModePrintSettings
}

export interface OnCardPickData {
  singlePickInitialPopulation: number
  multiplePickInitialPopulation: number
}

export interface IMwCardData {
  title: string;
  totems: Totems[];
  onCardPickData: OnCardPickData;
  modes: ICardModeData[]
}