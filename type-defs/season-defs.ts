import { SeasonPbId } from "@mw-protobufs/manawave-types"
import { FamilyCardInstance } from "../PIECES/type-defs/type-defs"
import { SeasonZero1 } from "../seasons/season-zero-1/season-zero-1-def"
import { ClanCardDefinition } from "./clan-defs"
import { FamilyCardPlacementResult } from "./game-data-type-defs"
import { MonumentCard, TotemMonumentCard } from "./monument-defs"
import { ITotemDetails } from "./totem-defs"
import { SeasonDev1 } from "@mw-assets/seasons/season-dev-1/season-dev-1-def"
import { SeasonFlavor1 } from "@mw-assets/seasons/season-flavor-1/season-flavor-1-def"


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
  totemMonumentChoices: TotemMonumentCard[]

  allMonumentChoices: MonumentCard[]

  allClanDefinitions: ClanCardDefinition[]

  allFamilyCards: FamilyCardInstance[]

  noPickFamilyEffect: INoPickFamilyEffect
}


export const SEASON_CHOICES: ISeason[] = [
  SeasonFlavor1,
  SeasonZero1,
  SeasonDev1,
];
