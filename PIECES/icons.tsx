import React from "react";
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
 } from "./token-counter-icons";


export const createImgDataUrlFromTag = (tag: TokenCounterTypeTags) => {
  switch (tag) {
    case '<::mana-counter::>': return ManaCounterDataUrl;
    case '<::mana-level-token::>': return ManaLevelTokenDataUrl;
    case '<::manawave-round-token::>': return ManawaveRoundTokenDataUrl;

    case '<::attack-counter::>': return AttackCounterDataUrl;
    case '<::shield-counter::>': return ShieldCounterDataUrl;

    case '<::population-increase-counter::>': return PopulationIncreaseCounterDataUrl;
    case '<::population-sacrifice-counter::>': return SacrificeCounterDataUrl;

    case '<::population-token::>': return PopulationTokenDataUrl;
    case '<::soulstain-token::>': return SoulstainTokenDataUrl;
  }

  console.log(`Unrecognized token counter type: ${tag}`);
  return `Unrecognized token counter type: ${tag}`;
}


export const createImgComponentFromTag = (tag: TokenCounterTypeTags, imageSize: number) => {
  const imageDataUrl = createImgDataUrlFromTag(tag);

  const imageSizePx = `${imageSize}px`;
  return (
    <img src={imageDataUrl} alt={"Missing tag: " + tag} height={imageSizePx} width={imageSizePx} />
  )
}


const DefaultIconImageSize = 40;

export const ManaCounterIcon_DefaultSize = () => createImgComponentFromTag('<::mana-counter::>', DefaultIconImageSize);
export const AttackCounterIcon_DefaultSize = () => createImgComponentFromTag('<::attack-counter::>', DefaultIconImageSize);
export const ShieldCounterIcon_DefaultSize = () => createImgComponentFromTag('<::shield-counter::>', DefaultIconImageSize);
export const PopulationIncreaseCounterIcon_DefaultSize = () => createImgComponentFromTag('<::population-increase-counter::>', DefaultIconImageSize);
export const PopulationSacrificeCounterIcon_DefaultSize = () => createImgComponentFromTag('<::population-sacrifice-counter::>', DefaultIconImageSize);

export const PopulationTokenIcon_DefaultSize = () => createImgComponentFromTag('<::population-token::>', DefaultIconImageSize);
export const SoulstainTokenIcon_DefaultSize = () => createImgComponentFromTag('<::soulstain-token::>', DefaultIconImageSize);
export const ManawaveRoundTokenIcon_DefaultSize = () => createImgComponentFromTag('<::manawave-round-token::>', DefaultIconImageSize);
export const ManaLevelTokenIcon_DefaultSize = () => createImgComponentFromTag('<::mana-level-token::>', DefaultIconImageSize);



export interface IMwGameIcon {
  iconKey: string
  imageSize: number
}

export const MwGameImgIcon = (props: IMwGameIcon) => {
  return createImgComponentFromTag(props.iconKey as TokenCounterTypeTags, props.imageSize);
}


export const getMwIconAscii = (tag: TokenCounterTypeTags) => {
  switch (tag) {
    // case '<::on-manawave-proc::>': return "On MW:";

    case '<::attack-counter::>': return "Attack";
    case '<::shield-counter::>': return "Shield";

    case '<::population-increase-counter::>': return "Population Increase";
    case '<::population-sacrifice-counter::>': return "Population Sacrifice";

    // case '<::population-count-token::>': return "Population Count";
    case '<::soulstain-token::>': return "Soulstain";

    // case '<::manawave-surge-strength::>': return "Surge Strength";
    // case '<::round-number::>': return "Round Number";
  }

  return `Unrecognized token counter type: ${tag}`;

}
