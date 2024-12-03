import { MonumentCard } from "../../type-defs/monument-defs";
import { MonumentOfMagicData } from "../season-zero-1/monument-defs/monument-of-magic";
import { MonumentOfAttackAndMagicData } from "./monument-defs/monument-of-attack-and-magic";
import { MonumentOfAttackData } from "./monument-defs/monument-of-attack";
import { MonumentOfDefenseData } from "./monument-defs/monument-of-defense";
import { MonumentOfDefenseAndMagicData } from "./monument-defs/monument-of-defense-and-magic";
import { MonumentOfAttackAndDefenseData } from "./monument-defs/monument-of-attack-and-defense";


export const DefaultMonuments: MonumentCard[] = [
  MonumentOfAttackData,
  MonumentOfDefenseData,
  MonumentOfMagicData,
]

export const TotemMonuments: MonumentCard[] = [
  MonumentOfAttackData,
  MonumentOfDefenseData,
  MonumentOfMagicData,
  MonumentOfAttackAndMagicData,
  MonumentOfDefenseAndMagicData,
  MonumentOfAttackAndDefenseData,
]
