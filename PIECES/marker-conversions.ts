import { MwMarkerType } from "@mw-protobufs/manawave-types";
import { TokenCounterTypeTags } from "./token-counter-icons";


export const convertToMwMarkerType = (markerTypeTag: TokenCounterTypeTags): MwMarkerType => {
  switch (markerTypeTag) {
    case '<::mana-counter::>':
      return MwMarkerType.MwMarkerType_ManaCounter;
    case '<::manalith-token::>':
      return MwMarkerType.MwMarkerType_ManalithToken;
    case '<::population-increase-counter::>':
      return MwMarkerType.MwMarkerType_PopulationIncreaseCounter;
    case '<::population-sacrifice-counter::>':
      return MwMarkerType.MwMarkerType_PopulationSacrificeCounter;
    case '<::attack-counter::>':
      return MwMarkerType.MwMarkerType_AttackCounter;
    case '<::shield-counter::>':
      return MwMarkerType.MwMarkerType_ShieldCounter;
    case '<::soulstain-token::>':
      return MwMarkerType.MwMarkerType_SoulstainToken;
    case '<::manalith-claim-counter::>':
      return MwMarkerType.MwMarkerType_ManalithClaimCounter;
    case '<::manawave-round-token::>':
      return MwMarkerType.MwMarkerType_ManawaveRoundToken;
    case '<::population-token::>':
      return MwMarkerType.MwMarkerType_PopulationToken;
    default:
      throw new Error(`Unknown marker type tag: ${markerTypeTag}`);
  }
}


export const convertToMwMarkerTypes = (markerTypeTags: TokenCounterTypeTags[]): MwMarkerType[] => {
  const retval = markerTypeTags.map(mtt => convertToMwMarkerType(mtt));
  return retval;
}
