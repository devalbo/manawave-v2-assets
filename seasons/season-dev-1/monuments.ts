import { MonumentCard } from "../../type-defs/monument-defs";
import { MonumentOfAttackAndMagicData } from "./monument-defs/monument-of-attack-and-magic";
import { MonumentOfAttackData } from "./monument-defs/monument-of-attack";
import { MonumentOfDefenseData } from "./monument-defs/monument-of-defense";
import { MonumentOfDefenseAndMagicData } from "./monument-defs/monument-of-defense-and-magic";
import { MonumentOfAttackAndDefenseData } from "./monument-defs/monument-of-attack-and-defense";
import { MonumentOfMagicData } from "./monument-defs/monument-of-magic";
import { MonumentOfBothPlayersLoseData } from "./monument-defs/monument-of-both-players-lose";
import { MonumentOfBothPlayersWinData } from "./monument-defs/monument-of-both-players-win";
import { MonumentOfForcedDrawData } from "./monument-defs/monument-of-forced-draw";
import { MonumentOfOptPlayerWinsData } from "./monument-defs/monument-of-opt-wins";
import { MonumentOfOsbPlayerWinsData } from "./monument-defs/monument-of-osb-wins";


export const DefaultMonuments: MonumentCard[] = [
  MonumentOfAttackData,
  MonumentOfDefenseData,
  MonumentOfMagicData,
]

export const TotemMonuments: MonumentCard[] = [
  MonumentOfAttackAndMagicData,
  MonumentOfDefenseAndMagicData,
  MonumentOfAttackAndDefenseData,

  MonumentOfBothPlayersWinData,
  MonumentOfBothPlayersLoseData,
  MonumentOfForcedDrawData,
  MonumentOfOptPlayerWinsData,
  MonumentOfOsbPlayerWinsData,
]
