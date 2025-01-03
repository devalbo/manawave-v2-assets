import { MonumentCardPbId, TotemPbId } from "@mw-protobufs/manawave-types"
import { MonumentCardLogic } from "./game-data-type-defs"


export type MonumentCard = {
  readonly title: string
  readonly monumentId: MonumentCardPbId
  readonly text: string
  readonly isDefault?: boolean
}

export type TotemMonumentCard = MonumentCard & {
  readonly totem1Id: TotemPbId
  readonly totem2Id: TotemPbId
}


export type MonumentInPlayInstance = MonumentCard & MonumentCardLogic
