import {
  SoulstainTokenSvg,
  PopulationTokenSvg,
  AttackCounterSvg,
  ShieldCounterSvg,
  SacrificeCounterSvg,
  ManaCounterSvg,
  PopulationIncreaseCounterSvg,
  ManawaveRoundTokenSvg,
  ManaLevelTokenSvg,
 } from "./assets/TokenSvgIcons";

export type TokenCounterTypes = 'soulstain-token' | 'population-token' |
  'sacrifice-counter' | 'population-increase-counter' | 'mana-counter' | 'manawave-round-token';

export type TokenCounterTypeTags = 
  '<::attack-counter::>'               |
  '<::shield-counter::>'               |
  '<::population-increase-counter::>'  |
  '<::population-sacrifice-counter::>' |
  '<::mana-counter::>'                 |

  '<::manawave-round-token::>'         |
  '<::population-token::>'             |
  '<::soulstain-token::>'              |
  '<::mana-level-token::>'
  


const encodedSoulstainTokenSvg = encodeURIComponent(SoulstainTokenSvg);
export const SoulstainTokenDataUrl = `data:image/svg+xml;charset=utf-8,${encodedSoulstainTokenSvg}`;

const encodedPopulationTokenSvg = encodeURIComponent(PopulationTokenSvg);
export const PopulationTokenDataUrl = `data:image/svg+xml;charset=utf-8,${encodedPopulationTokenSvg}`;

const encodedAttackCounterSvg = encodeURIComponent(AttackCounterSvg);
export const AttackCounterDataUrl = `data:image/svg+xml;charset=utf-8,${encodedAttackCounterSvg}`;

const encodedShieldCounterSvg = encodeURIComponent(ShieldCounterSvg);
export const ShieldCounterDataUrl = `data:image/svg+xml;charset=utf-8,${encodedShieldCounterSvg}`;

const encodedSacrificeCounterSvg = encodeURIComponent(SacrificeCounterSvg);
export const SacrificeCounterDataUrl = `data:image/svg+xml;charset=utf-8,${encodedSacrificeCounterSvg}`;

const encodedManaCounterSvg = encodeURIComponent(ManaCounterSvg);
export const ManaCounterDataUrl = `data:image/svg+xml;charset=utf-8,${encodedManaCounterSvg}`;

const encodedManaLevelTokenSvg = encodeURIComponent(ManaLevelTokenSvg);
export const ManaLevelTokenDataUrl = `data:image/svg+xml;charset=utf-8,${encodedManaLevelTokenSvg}`;

const encodedManawaveRoundTokenSvg = encodeURIComponent(ManawaveRoundTokenSvg);
export const ManawaveRoundTokenDataUrl = `data:image/svg+xml;charset=utf-8,${encodedManawaveRoundTokenSvg}`;

const encodedPopulationIncreaseCounterSvg = encodeURIComponent(PopulationIncreaseCounterSvg);
export const PopulationIncreaseCounterDataUrl = `data:image/svg+xml;charset=utf-8,${encodedPopulationIncreaseCounterSvg}`;
