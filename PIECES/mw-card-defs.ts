import { FamilyCardDefinition } from "../type-defs/family-defs";
import { ChannelersCardDef } from "./card-defs/channelers";
import { ClubWieldersCardDef } from "./card-defs/club-wielders";
import { DefendersCardDef } from "./card-defs/defenders";
import { EnchantersCardDef } from "./card-defs/enchanters";
import { FarmersCardDef } from "./card-defs/farmers";
import { ForestHuntersCardDef } from "./card-defs/forest-hunters";
import { GrasslandShepherdsCardDef } from "./card-defs/grassland-shepherds";
import { ManaChannelersCardDef } from "./card-defs/mana-channelers";
import { MartyrsCardDef } from "./card-defs/martyrs";
import { MysticFarmersCardDef } from "./card-defs/mystic-farmers";
import { RoadBuildersCardDef } from "./card-defs/road-builders";
import { RuggedShepherdsCardDef } from "./card-defs/rugged-shepherds";
import { SacrificersCardDef } from "./card-defs/sacrificers";
import { ShieldCraftersCardDef } from "./card-defs/shield-crafters";
import { SlaversCardDef } from "./card-defs/slavers";
import { SoylentGreenFarmersCardDef } from "./card-defs/soylent-green-farmers";
import { TemplarsCardDef } from "./card-defs/templars";
import { WizardsCardDef } from "./card-defs/wizards";


export const getCardDefs = (): FamilyCardDefinition[] => {

  const retVal = [
    ForestHuntersCardDef,
    GrasslandShepherdsCardDef,
    RuggedShepherdsCardDef,
    FarmersCardDef,
    MysticFarmersCardDef,
    SoylentGreenFarmersCardDef,

    RoadBuildersCardDef,
    ManaChannelersCardDef,
    EnchantersCardDef,
    ChannelersCardDef,
    WizardsCardDef,
    SacrificersCardDef,

    ClubWieldersCardDef,
    ShieldCraftersCardDef,
    TemplarsCardDef,
    DefendersCardDef,
    MartyrsCardDef,
    SlaversCardDef,
  ];

  return retVal;
}
