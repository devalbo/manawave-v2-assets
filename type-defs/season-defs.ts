import { SeasonPbId } from "../../protobufs/protofiles-out/manawave-types"
import { FamilyCardInstance } from "../PIECES/type-defs/type-defs"
import { SeasonZero1 } from "../seasons/season-zero-1/season-zero-1-def"
import { ClanCardDefinition } from "./clan-defs"
import { MonumentCard } from "./monument-defs"
import { ITotemDetails } from "./totem-defs"


export interface ISeason {
  seasonName: string
  seasonId: SeasonPbId
  seasonDescription: string
  allTotemChoices: ITotemDetails[]

  defaultMonumentChoices: MonumentCard[]
  totemMonumentChoices: MonumentCard[]

  allMonumentChoices: MonumentCard[]

  allClanDefinitions: ClanCardDefinition[]

  allFamilyCards: FamilyCardInstance[]
}

export const SEASON_CHOICES: ISeason[] = [
  SeasonZero1,
];
