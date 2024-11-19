import { SeasonPbId } from "@mw-protobufs/manawave-types"
import { FamilyCardInstance } from "../PIECES/type-defs/type-defs"
import { SeasonZero1 } from "../seasons/season-zero-1/season-zero-1-def"
import { ClanCardDefinition } from "./clan-defs"
import { FamilyCardPlacementResult } from "./game-data-type-defs"
import { MonumentCard } from "./monument-defs"
import { ITotemDetails } from "./totem-defs"


export type INoPickFamilyEffect = {
  title: string
  text: string
  onFamilyCardPlacement?: () => FamilyCardPlacementResult  // run this when card is placed by player on board
}


export interface ISeason {
  seasonName: string
  seasonId: SeasonPbId
  seasonDescription: string
  allTotemChoices: ITotemDetails[]

  defaultMonumentChoices: MonumentCard[]
  totemMonumentChoices: MonumentCard[]

  // allMonumentChoices: MonumentInPlayInstance[]
  allMonumentChoices: MonumentCard[]

  allClanDefinitions: ClanCardDefinition[]

  allFamilyCards: FamilyCardInstance[]

  noPickFamilyEffect: INoPickFamilyEffect
}


export const SEASON_CHOICES: ISeason[] = [
  SeasonZero1,
];
