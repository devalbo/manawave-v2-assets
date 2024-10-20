import { IMwClanModeData, IMwClanConversionRatio } from "../PIECES/MwClanTemplate"
import { ClanCardLogic } from "./game-data-type-defs"


export type ClanCardDefinition = {
  title: string
  text: string
  
  modes: IMwClanModeData[]
  conversionRatios: IMwClanConversionRatio[]
} & ClanCardLogic
