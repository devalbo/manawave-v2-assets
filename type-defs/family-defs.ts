import { IMwClanModeData, IMwClanConversionRatio } from "../PIECES/MwClanTemplate"
import { FamilyCardLogic } from "./game-data-type-defs"
import { TotemId } from "./totem-defs"


export type FamilyCardDefinition = {
  title: string
  text: string
  totemId: TotemId
  
  modes: IMwClanModeData[]
} & FamilyCardLogic
