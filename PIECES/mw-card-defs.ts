import { ChannelersCardData } from "./card-defs/channelers";
import { ClubWieldersCardData } from "./card-defs/club-wielders";
import { DefendersCardData } from "./card-defs/defenders";
import { EnchantersCardData } from "./card-defs/enchanters";
import { FarmersCardData } from "./card-defs/farmers";
import { ForestHuntersCardData } from "./card-defs/forest-hunters";
import { GrasslandShepherdsCardData } from "./card-defs/grassland-shepherds";
import { ManaChannelersCardData } from "./card-defs/mana-channelers";
import { MartyrsCardData } from "./card-defs/martyrs";
import { MysticFarmersCardData } from "./card-defs/mystic-farmers";
import { RoadBuildersCardData } from "./card-defs/road-builders";
import { RuggedShepherdsCardData } from "./card-defs/rugged-shepherds";
import { SacrificersCardData } from "./card-defs/sacrificers";
import { ShieldCraftersCardData } from "./card-defs/shield-crafters";
import { SlaversCardData } from "./card-defs/slavers";
import { SoylentGreenFarmersCardData } from "./card-defs/soylent-green-farmers";
import { TemplarsCardData } from "./card-defs/templars";
import { WizardsCardData } from "./card-defs/wizards";
import { IMwCardData } from "./mw-card-data";


export const getCardDefs = (): IMwCardData[] => {

  const retVal = [
    ForestHuntersCardData,
    GrasslandShepherdsCardData,
    RuggedShepherdsCardData,
    FarmersCardData,
    MysticFarmersCardData,
    SoylentGreenFarmersCardData,

    RoadBuildersCardData,
    ManaChannelersCardData,
    EnchantersCardData,
    ChannelersCardData,
    WizardsCardData,
    SacrificersCardData,

    ClubWieldersCardData,
    ShieldCraftersCardData,
    TemplarsCardData,
    DefendersCardData,
    MartyrsCardData,
    SlaversCardData,
  ];

  return retVal;
}
