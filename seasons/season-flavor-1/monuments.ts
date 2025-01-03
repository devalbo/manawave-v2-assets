import { MonumentCard, TotemMonumentCard } from "../../type-defs/monument-defs";
import { RuinsOfErkulData } from "./monument-defs/ruins-of-erkul";
import { TombOfGenghisData } from "./monument-defs/tomb-of-genghis";
import { FieldsOfLerukData } from "./monument-defs/fields-of-leruk";
import { GravepitsOfLerukData } from "./monument-defs/gravepits-of-leruk";
import { ManalithCliffsData } from "./monument-defs/manalith-cliffs";
import { PlainsOfTheodenData } from "./monument-defs/plains-of-theoden";
import { SeaOfLyrtifData } from "./monument-defs/sea-of-lyrtif";
import { BirthplaceOfGenghisData } from "./monument-defs/birthplace-of-genghis";
import { PeaksOfTheodenData } from "./monument-defs/peaks-of-theoden";


export const DefaultMonuments: MonumentCard[] = [
  ManalithCliffsData,
  RuinsOfErkulData,
  SeaOfLyrtifData,
]

export const TotemMonuments: TotemMonumentCard[] = [
  BirthplaceOfGenghisData,
  TombOfGenghisData,

  GravepitsOfLerukData,
  FieldsOfLerukData,
  
  PeaksOfTheodenData,
  PlainsOfTheodenData,
]
