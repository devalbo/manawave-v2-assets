import { MonumentCardPbId } from "@mw-protobufs/manawave-types"
import { MonumentCardLogic } from "./game-data-type-defs"


export type MonumentCard = {
  readonly title: string
  readonly monumentId: MonumentCardPbId
  readonly text: string
  readonly isDefault?: boolean
}


export type MonumentInPlayInstance = MonumentCard & MonumentCardLogic
