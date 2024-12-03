

export type Totem = 'tiger' | 'ox' | 'spirits';
export const TotemChoices = ['tiger', 'ox', 'spirits'] as Totem[]
export type TotemId = (typeof TotemChoices)[number];


export type Sd1Totem = 'attack' | 'defense' | 'magic';
export const Sd1TotemChoices = ['attack', 'defense', 'magic'] as Sd1Totem[]
export type Sd1TotemId = (typeof Sd1TotemChoices)[number];
