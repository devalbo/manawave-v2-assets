import { MonumentCardPbId } from "../../protobufs/protofiles-out/manawave-types"


export type MonumentCard = {
  readonly title: string
  readonly monumentId: MonumentCardPbId
  readonly text: string
  readonly isDefault?: boolean
}