import { SeasonDefinition } from "../../protobufs/protofiles-out/manawave-types"
import { SeasonZero1 } from "../seasons/season-zero-1/season-zero-1-def"
import { ClanCardDefinition } from "./clan-defs"
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

  allClanChoices: ClanCardDefinition[]

  allFamilyCards: FamilyCardInstance[]
}

export const SEASON_CHOICES: ISeason[] = [
  SeasonZero1,
];
