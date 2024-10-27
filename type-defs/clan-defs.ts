import { IMwCardModeData } from "../PIECES/mw-card-data"
import { IMwClanConversionRatio } from "../PIECES/MwClanTemplate"
import { ClanCardLogic } from "./game-data-type-defs"
import { ClanCardType } from "./piece-type-defs"


export type ClanCardDefinition = {
  title: string
  text: string
  
  modes: IMwCardModeData[]
  conversionRatios: IMwClanConversionRatio[]
} & ClanCardLogic
  & ClanCardType
