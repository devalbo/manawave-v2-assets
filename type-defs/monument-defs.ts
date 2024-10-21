import { MonumentCardPbId } from "../../protobufs/protofiles-out/manawave-types"


export type MonumentCard = {
  title: string
  monumentId: MonumentCardPbId
  text: string
  isDefault?: boolean
}