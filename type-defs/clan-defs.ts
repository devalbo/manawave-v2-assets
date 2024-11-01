import { ClanCardDefPbId } from "../../protobufs/protofiles-out/manawave-types"
import { IMwCardModeData } from "../PIECES/mw-card-data"
import { IMwClanConversionRatio } from "../PIECES/MwClanTemplate"
import { ClanCardLogic } from "./game-data-type-defs"
import { ClanCardType } from "./piece-type-defs"


export type ClanCardDefinition = {
  readonly title: string
  readonly text: string
  readonly clanDefPbId: ClanCardDefPbId
  
  readonly modes: IMwCardModeData[]
  readonly conversionRatios: IMwClanConversionRatio[]
} & ClanCardLogic
  & ClanCardType
