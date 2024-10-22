import { IMwClanModeData } from "../PIECES/MwClanTemplate"
import { FamilyCardLogic } from "./game-data-type-defs"
import { FamilyCardType } from "./piece-type-defs"
import { TotemId } from "./totem-type-defs"


export type FamilyCardDefinition = {
  title: string
  text: string
  totemId: TotemId
  
  modes: IMwClanModeData[]
} & FamilyCardLogic 
  & FamilyCardType
