import { FamilyCardDefPbId } from "../../protobufs/protofiles-out/manawave-types"
import { IMwCardModeData } from "../PIECES/mw-card-data"
import { FamilyCardLogic } from "./game-data-type-defs"
import { FamilyCardType } from "./piece-type-defs"
import { TotemId } from "./totem-type-defs"


export type FamilyCardDefinition = {
  title: string
  text: string
  totemId: TotemId
  familyCardDefPbId: FamilyCardDefPbId
  
  modes: IMwCardModeData[]
} & FamilyCardLogic 
  & FamilyCardType
