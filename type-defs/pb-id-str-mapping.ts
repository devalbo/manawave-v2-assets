import { ClanIdStr, FamilyCardInstanceIdStr, MonumentIdStr, SeasonIdStr, TotemIdStr } from "./branded-string-types";
import { ClanCardDefPbId, FamilyCardInstancePbId, MonumentCardPbId, SeasonPbId, TotemPbId } from "../mw-v2-protobufs/protofiles-out/manawave-types";


export const toSeasonIdStr = (seasonPbId: SeasonPbId): SeasonIdStr => {
  return `season[${seasonPbId}]` as SeasonIdStr;
}


export const fromSeasonIdStr = (seasonIdStr: SeasonIdStr): SeasonPbId => {
  const regex = /season\[(\d+)\]/;
  const match = seasonIdStr.match(regex);
  if (match) {
    const seasonDefinition = parseInt(match[1]);
    const retVal: SeasonPbId = {
      seasonDefinition,
    };

    return retVal;
  }

  throw new Error("Invalid SeasonIdStr: " + seasonIdStr);
}


export const toTotemIdStr = (totemId: TotemPbId): TotemIdStr => {
  return `season[${totemId.seasonId!.seasonDefinition}]:totem[${totemId.seasonTotemId}]` as TotemIdStr;
}


export const fromTotemIdStr = (totemIdStr: TotemIdStr): TotemPbId => {
  const regex = /season\[(\d+)\]:totem\[(\d+)\]/;
  const match = totemIdStr.match(regex);
  if (match) {
    const seasonDefinition = parseInt(match[1]);
    const seasonTotemId = parseInt(match[2]);

    const retVal: TotemPbId = {
      seasonId: {
        seasonDefinition,
      },
      seasonTotemId,
    };

    console.log(match)
    console.log("RETURN")
    console.log(retVal)
    return retVal;
  }
  throw new Error("Invalid TotemIdStr: " + totemIdStr);
}


export const toMonumentIdStr = (monumentId: MonumentCardPbId): MonumentIdStr => {
  return `season[${monumentId.seasonId!.seasonDefinition}]:monument[${monumentId.seasonMonumentCardId}]` as MonumentIdStr;
}


export const fromMonumentIdStr = (monumentIdStr: MonumentIdStr): MonumentCardPbId => {
  const regex = /season\[(\d+)\]:monument\[(\d+)\]/;
  const match = monumentIdStr.match(regex);
  if (match) {
    const seasonDefinition = parseInt(match[1]);
    const seasonMonumentCardId = parseInt(match[2]);
    
    const retVal: MonumentCardPbId = {
      seasonId: {
        seasonDefinition,
      },
      seasonMonumentCardId,
    };

    return retVal;
  }
  throw new Error("Invalid MonumentCardPbId: " + monumentIdStr);
}


export const toClanIdStr = (clanId: ClanCardDefPbId): ClanIdStr => {
  return `season[${clanId.seasonId!.seasonDefinition}]:clan[${clanId.seasonClanCardId}]` as ClanIdStr;
}


export const fromClanIdStr = (clanIdStr: ClanIdStr): ClanCardDefPbId => {
  const regex = /season\[(\d+)\]:clan\[(\d+)\]/;
  const match = clanIdStr.match(regex);
  if (match) {
    const seasonDefinition = parseInt(match[1]);
    const seasonClanCardId = parseInt(match[2]);
    
    const retVal: ClanCardDefPbId = {
      seasonId: {
        seasonDefinition,
      },
      seasonClanCardId,
    };

    return retVal;
  }
  throw new Error("Invalid ClanIdStr: " + clanIdStr);
}


export const toFamilyCardInstanceIdStr = (familyCardId: FamilyCardInstancePbId): FamilyCardInstanceIdStr => {
  return `season[${familyCardId.familyCardDefId!.seasonId!.seasonDefinition}]:player[${familyCardId.owningPlayerSide}]:family[${familyCardId.familyCardDefId!.seasonFamilyCardId}]` as FamilyCardInstanceIdStr;
}

export const fromFamilyCardInstanceStr = (familyIdStr: FamilyCardInstanceIdStr): FamilyCardInstancePbId => {
  const regex = /season\[(\d+)\]:player\[(\d+)\]:family\[(\d+)\]/;
  const match = familyIdStr.match(regex);
  if (match) {
    const seasonDefinition = parseInt(match[1]);
    const owningPlayerSide = parseInt(match[2]);
    const familyCardId = parseInt(match[3]);
    
    const retVal: FamilyCardInstancePbId = {
      familyCardDefId: {
        seasonId: {
          seasonDefinition,
        },
        seasonFamilyCardId: familyCardId,
      },
      owningPlayerSide,
    };

    return retVal;
  }
  throw new Error("Invalid FamilyCardInstanceIdStr: " + familyIdStr);
}
