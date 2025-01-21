import { MonumentCard, TotemMonumentCard } from "../../type-defs/monument-defs";
import { CayOfThalumorTheSteadfastData } from "./monument-defs/cay-of-thalumor";
import { TombOfKolrathData } from "./monument-defs/tomb-of-kolrath";
import { FieldsOfMaltherionData } from "./monument-defs/fields-of-maltherion";
import { GravepitsOfMaltherionData } from "./monument-defs/gravepits-of-maltherion";
import { AtollOfArchulorTheTimeless } from "./monument-defs/atoll-of-archulor";
import { PlainsOfSenvaraData } from "./monument-defs/plains-of-senvara";
import { IsleOfMalcaraxTheRelentlessData } from "./monument-defs/isle-of-malcarax";
import { BirthplaceOfKolrathData } from "./monument-defs/birthplace-of-kolrath";
import { PeaksOfSenvaraData } from "./monument-defs/peaks-of-senvara";


export const DefaultMonuments: MonumentCard[] = [
  AtollOfArchulorTheTimeless,
  CayOfThalumorTheSteadfastData,
  IsleOfMalcaraxTheRelentlessData,
]

export const TotemMonuments: TotemMonumentCard[] = [
  BirthplaceOfKolrathData,
  TombOfKolrathData,

  GravepitsOfMaltherionData,
  FieldsOfMaltherionData,
  
  PeaksOfSenvaraData,
  PlainsOfSenvaraData,
]
