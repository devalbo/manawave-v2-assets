import { SeasonDefinition } from "../../protobufs/protofiles-out/manawave-types"
import { ClanCard } from "./clan-defs"
import { FamilyCardInstance } from "./game-data-type-defs"
import { MonumentCard } from "./monument-defs"
import { ITotemDetails } from "./totem-defs"


export interface ISeason {
  seasonName: string
  seasonId: string
  seasonDefinitionId: SeasonDefinition
  seasonDescription: string
  allTotemChoices: ITotemDetails[]

  defaultMonumentChoices: MonumentCard[]
  totemMonumentChoices: MonumentCard[]

  allMonumentChoices: MonumentCard[]

  allClanChoices: ClanCard[]

  allFamilyCards: FamilyCardInstance[]
}
