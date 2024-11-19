// import { MonumentInPlayInstance } from "../../type-defs/monument-defs";
// import { MonumentOfDiversity } from "./monument-defs/monument-of-diversity";
// import { MonumentOfJustice } from "./monument-defs/monument-of-justice";
// import { MonumentOfLife } from "./monument-defs/monument-of-life";
// import { MonumentOfMagic } from "./monument-defs/monument-of-magic";
// import { MonumentOfNature } from "./monument-defs/monument-of-nature";
// import { MonumentOfPeace } from "./monument-defs/monument-of-peace";
// import { MonumentOfSacrifice } from "./monument-defs/monument-of-sacrifice";
// import { MonumentOfTranquility } from "./monument-defs/monument-of-tranquility";
// import { MonumentOfWar } from "./monument-defs/monument-of-war";


// export const DefaultMonuments: MonumentInPlayInstance[] = [
//   MonumentOfLife,
//   MonumentOfSacrifice,
//   MonumentOfDiversity,
// ]

// export const TotemMonuments: MonumentInPlayInstance[] = [
//   MonumentOfJustice,
//   MonumentOfTranquility,
//   MonumentOfMagic,
//   MonumentOfNature,
//   MonumentOfWar,
//   MonumentOfPeace,
// ]

import { MonumentCard } from "../../type-defs/monument-defs";
import { MonumentOfDiversityData } from "./monument-defs/monument-of-diversity";
import { MonumentOfJusticeData } from "./monument-defs/monument-of-justice";
import { MonumentOfLifeData } from "./monument-defs/monument-of-life";
import { MonumentOfMagicData } from "./monument-defs/monument-of-magic";
import { MonumentOfNatureData } from "./monument-defs/monument-of-nature";
import { MonumentOfPeaceData } from "./monument-defs/monument-of-peace";
import { MonumentOfSacrificeData } from "./monument-defs/monument-of-sacrifice";
import { MonumentOfTranquilityData } from "./monument-defs/monument-of-tranquility";
import { MonumentOfWarData } from "./monument-defs/monument-of-war";


export const DefaultMonuments: MonumentCard[] = [
  MonumentOfLifeData,
  MonumentOfSacrificeData,
  MonumentOfDiversityData,
]

export const TotemMonuments: MonumentCard[] = [
  MonumentOfJusticeData,
  MonumentOfTranquilityData,
  MonumentOfMagicData,
  MonumentOfNatureData,
  MonumentOfWarData,
  MonumentOfPeaceData,
]
