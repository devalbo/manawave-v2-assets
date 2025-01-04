import { MonumentCard, TotemMonumentCard } from "../../type-defs/monument-defs";
import { JungleOfPyrhhusData } from "./monument-defs/jungle-of-pyrhhus";
import { TombOfGenghisData } from "./monument-defs/tomb-of-genghis";
import { FieldsOfLerukData } from "./monument-defs/fields-of-leruk";
import { GravepitsOfLerukData } from "./monument-defs/gravepits-of-leruk";
import { ManalithCliffsData } from "./monument-defs/manalith-cliffs";
import { PlainsOfTheodenData } from "./monument-defs/plains-of-theoden";
import { RiverOfLyrtifData } from "./monument-defs/river-of-lyrtif";
import { BirthplaceOfGenghisData } from "./monument-defs/birthplace-of-genghis";
import { PeaksOfTheodenData } from "./monument-defs/peaks-of-theoden";


export const DefaultMonuments: MonumentCard[] = [
  ManalithCliffsData,
  JungleOfPyrhhusData,
  RiverOfLyrtifData,
]

export const TotemMonuments: TotemMonumentCard[] = [
  BirthplaceOfGenghisData,
  TombOfGenghisData,

  GravepitsOfLerukData,
  FieldsOfLerukData,
  
  PeaksOfTheodenData,
  PlainsOfTheodenData,
]
