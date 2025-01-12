import {
  TokenCounterTypeTags,
  AttackCounterDataUrl,
  ManaCounterDataUrl,
  ManawaveRoundTokenDataUrl,
  PopulationIncreaseCounterDataUrl,
  PopulationTokenDataUrl,
  SacrificeCounterDataUrl,
  ShieldCounterDataUrl,
  SoulstainTokenDataUrl,
  ManaLevelTokenDataUrl,
  ManalithClaimCounterDataUrl,
  SlaughterCounterDataUrl,
  StockpileIconDataUrl,
 } from "./token-counter-icons";
import { MwMarkerType } from "../mw-v2-protobufs/protofiles-out/manawave-types";
import { ExpendedManaCounterSvg, StockpileIconSvg, TribeIconSvg } from "./assets/TokenSvgIcons";


export const createImgDataUrlFromTag = (tag: TokenCounterTypeTags) => {
  switch (tag) {
    case '<::mana-counter::>': return ManaCounterDataUrl;
    case '<::manalith-token::>': return ManaLevelTokenDataUrl;
    case '<::manawave-round-token::>': return ManawaveRoundTokenDataUrl;
    case '<::manalith-claim-counter::>': return ManalithClaimCounterDataUrl;

    case '<::attack-counter::>': return AttackCounterDataUrl;
    case '<::shield-counter::>': return ShieldCounterDataUrl;

    case '<::population-increase-counter::>': return PopulationIncreaseCounterDataUrl;
    case '<::population-sacrifice-counter::>': return SacrificeCounterDataUrl;
    case '<::population-slaughter-counter::>': return SlaughterCounterDataUrl;

    case '<::population-token::>': return PopulationTokenDataUrl;
    case '<::soulstain-token::>': return SoulstainTokenDataUrl;
  }

  console.log(`Unrecognized token counter type: ${tag}`);
  return `Unrecognized token counter type: ${tag}`;
}

const mapMwMarkerTypeToTag = (mwMarkerType: MwMarkerType): TokenCounterTypeTags => {
  switch (mwMarkerType) {
    case MwMarkerType.MwMarkerType_AttackCounter: return '<::attack-counter::>';  
    case MwMarkerType.MwMarkerType_ShieldCounter: return '<::shield-counter::>';
    case MwMarkerType.MwMarkerType_PopulationIncreaseCounter: return '<::population-increase-counter::>';
    case MwMarkerType.MwMarkerType_SoulstainToken: return '<::soulstain-token::>';
    case MwMarkerType.MwMarkerType_ManaCounter: return '<::mana-counter::>';
    case MwMarkerType.MwMarkerType_ManalithClaimCounter: return '<::manalith-claim-counter::>'; 
    case MwMarkerType.MwMarkerType_PopulationToken: return '<::population-token::>';
    case MwMarkerType.MwMarkerType_ManalithToken: return '<::manalith-token::>';  
    case MwMarkerType.MwMarkerType_ManawaveRoundToken: return '<::manawave-round-token::>';
    case MwMarkerType.MwMarkerType_PopulationSacrificeCounter: return '<::population-sacrifice-counter::>';
    case MwMarkerType.MwMarkerType_PopulationSlaughterCounter: return '<::population-slaughter-counter::>';

    default:
      throw new Error(`Unrecognized MwMarkerType: ${mwMarkerType}`);
  }
}


export const createImgComponentFromTag = (tag: TokenCounterTypeTags, imageSize: number) => {
  const imageDataUrl = createImgDataUrlFromTag(tag);

  const imageSizePx = `${imageSize}px`;
  return (
    <img src={imageDataUrl} alt={"Missing tag: " + tag} height={imageSizePx} width={imageSizePx} />
  )
}


export const createImgComponentFromMwMarkerType = (mwMarkerType: MwMarkerType, imageSize: number) => {
  const tag = mapMwMarkerTypeToTag(mwMarkerType);
  const imageDataUrl = createImgDataUrlFromTag(tag);

  const imageSizePx = `${imageSize}px`;
  return (
    <img src={imageDataUrl} alt={"Missing tag: " + tag} height={imageSizePx} width={imageSizePx} />
  )
}


export const createImgComponentFromRawSvg = (rawSvg: string, imageSize: number) => {
  const encodedSvg = encodeURIComponent(rawSvg);
  const encodedSvgUrl = `data:image/svg+xml;charset=utf-8,${encodedSvg}`;

  const imageSizePx = `${imageSize}px`;
  return (
    <img src={encodedSvgUrl} alt={"Missing SVG"} height={imageSizePx} width={imageSizePx} />
  )
}


const DefaultIconImageSize = 40;

export const ManaCounterIcon_DefaultSize = () => createImgComponentFromTag('<::mana-counter::>', DefaultIconImageSize);
export const AttackCounterIcon_DefaultSize = () => createImgComponentFromTag('<::attack-counter::>', DefaultIconImageSize);
export const ShieldCounterIcon_DefaultSize = () => createImgComponentFromTag('<::shield-counter::>', DefaultIconImageSize);
export const PopulationIncreaseCounterIcon_DefaultSize = () => createImgComponentFromTag('<::population-increase-counter::>', DefaultIconImageSize);
export const PopulationSacrificeCounterIcon_DefaultSize = () => createImgComponentFromTag('<::population-sacrifice-counter::>', DefaultIconImageSize);
export const ManalithClaimCounterIcon_DefaultSize = () => createImgComponentFromTag('<::manalith-claim-counter::>', DefaultIconImageSize);
export const PopulationSlaughterCounterIcon_DefaultSize = () => createImgComponentFromTag('<::population-slaughter-counter::>', DefaultIconImageSize);

export const PopulationTokenIcon_DefaultSize = () => createImgComponentFromTag('<::population-token::>', DefaultIconImageSize);
export const SoulstainTokenIcon_DefaultSize = () => createImgComponentFromTag('<::soulstain-token::>', DefaultIconImageSize);
export const ManawaveRoundTokenIcon_DefaultSize = () => createImgComponentFromTag('<::manawave-round-token::>', DefaultIconImageSize);
export const ManaLevelTokenIcon_DefaultSize = () => createImgComponentFromTag('<::manalith-token::>', DefaultIconImageSize);

export const StockpileIcon_DefaultSize = () => createImgComponentFromRawSvg(StockpileIconSvg, DefaultIconImageSize);
export const ExpendedManaCounterIcon_DefaultSize = () => createImgComponentFromRawSvg(ExpendedManaCounterSvg, DefaultIconImageSize);
export const TribeIcon_DefaultSize = () => createImgComponentFromRawSvg(TribeIconSvg, DefaultIconImageSize);


export interface IMwGameIcon {
  iconKey: string
  imageSize: number
}

export const MwGameImgIcon = (props: IMwGameIcon) => {
  return createImgComponentFromTag(props.iconKey as TokenCounterTypeTags, props.imageSize);
}


export const getMwIconAscii = (tag: TokenCounterTypeTags) => {
  switch (tag) {

    case '<::attack-counter::>': return "Attack Counter";
    case '<::shield-counter::>': return "Shield Counter";

    case '<::population-increase-counter::>': return "Population Increase Counter";
    case '<::population-sacrifice-counter::>': return "Population Sacrifice Counter";
    case '<::population-token::>': return 'Population Token';

    case '<::soulstain-token::>': return "Soulstain Token";
    
    case '<::mana-counter::>': return 'Mana Counter';
    case '<::manalith-claim-counter::>': return 'Manalith Claim Counter';
    case '<::manawave-round-token::>': return 'Manawave Round Token';
    case '<::manalith-token::>': return 'Manalith Token';
  }

  return `Unrecognized token counter type: ${tag}`;
}



export const getMwIconShortAscii = (tag: TokenCounterTypeTags) => {
  switch (tag) {

    case '<::attack-counter::>': return "[ATK]";
    case '<::shield-counter::>': return "[SHLD]";

    case '<::population-increase-counter::>': return "[+POP]";
    case '<::population-sacrifice-counter::>': return "[-POP]";
    case '<::population-token::>': return '[POP]';

    case '<::soulstain-token::>': return "[SS]";
    
    case '<::mana-counter::>': return '[+MANA]';
    case '<::manalith-claim-counter::>': return '[-MLTH]';
    case '<::manawave-round-token::>': return '[MWRND]';
    case '<::manalith-token::>': return '[MLTH]';
  }

  return `Unrecognized token counter type: ${tag}`;
}