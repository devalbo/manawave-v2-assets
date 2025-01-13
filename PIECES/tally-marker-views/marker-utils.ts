import { MwMarkerType } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types";
import { throwUnexpectedStateError } from "@mw-game-engine/game-engine-utils";
import { ClanCardMarkerTypes } from "@mw-game-engine/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { TokenCounterTypeTags } from "../token-counter-icons";


export const mapMwMarkerTypeToClanCardMarkerType = (markerType: MwMarkerType): ClanCardMarkerTypes => {
  switch (markerType) {
    case MwMarkerType.MwMarkerType_AttackCounter: return 'attackCountersCount';
    case MwMarkerType.MwMarkerType_ShieldCounter: return 'shieldCountersCount';
    case MwMarkerType.MwMarkerType_PopulationIncreaseCounter: return 'populationIncreaseCountersCount';
    case MwMarkerType.MwMarkerType_PopulationSacrificeCounter: return 'sacrificeCountersCount';
    case MwMarkerType.MwMarkerType_ManalithClaimCounter: return 'manalithClaimCountersCount';
    case MwMarkerType.MwMarkerType_ManalithToken: return 'manalithTokensCount'; 
    case MwMarkerType.MwMarkerType_ManaCounter: return 'manaCountersCount';
    case MwMarkerType.MwMarkerType_PopulationToken: return 'populationTokensCount';
    default: return throwUnexpectedStateError(`Unknown marker type: ${markerType}`);
  }
}


export const mapClanCardMarkerTypeToMwMarkerType = (markerType: ClanCardMarkerTypes): MwMarkerType => {
  switch (markerType) {
    case 'attackCountersCount': return MwMarkerType.MwMarkerType_AttackCounter;
    case 'shieldCountersCount': return MwMarkerType.MwMarkerType_ShieldCounter;
    case 'populationIncreaseCountersCount': return MwMarkerType.MwMarkerType_PopulationIncreaseCounter;
    case 'sacrificeCountersCount': return MwMarkerType.MwMarkerType_PopulationSacrificeCounter;
    case 'manalithClaimCountersCount': return MwMarkerType.MwMarkerType_ManalithClaimCounter;
    case 'manalithTokensCount': return MwMarkerType.MwMarkerType_ManalithToken; 
    case 'manaCountersCount': return MwMarkerType.MwMarkerType_ManaCounter;
    case 'populationTokensCount': return MwMarkerType.MwMarkerType_PopulationToken;
    default: return throwUnexpectedStateError(`Unknown marker type: ${markerType}`);
  }
}


export const mapTokenCounterTypeTagToMwMarkerType = (markerTag: TokenCounterTypeTags): MwMarkerType => {
  switch (markerTag) {
    case '<::attack-counter::>': return MwMarkerType.MwMarkerType_AttackCounter;
    case '<::shield-counter::>': return MwMarkerType.MwMarkerType_ShieldCounter;
    case '<::population-increase-counter::>': return MwMarkerType.MwMarkerType_PopulationIncreaseCounter;
    case '<::population-sacrifice-counter::>': return MwMarkerType.MwMarkerType_PopulationSacrificeCounter;
    case '<::manalith-claim-counter::>': return MwMarkerType.MwMarkerType_ManalithClaimCounter;
    case '<::manalith-token::>': return MwMarkerType.MwMarkerType_ManalithToken; 
    case '<::mana-counter::>': return MwMarkerType.MwMarkerType_ManaCounter;
    case '<::population-token::>': return MwMarkerType.MwMarkerType_PopulationToken;
    case '<::manawave-round-token::>': return MwMarkerType.MwMarkerType_ManawaveRoundToken;
    case '<::soulstain-token::>': return MwMarkerType.MwMarkerType_SoulstainToken;
    default: return throwUnexpectedStateError(`Unknown marker type: ${markerTag}`);
  }
}
