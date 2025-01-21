

export type Totem = 'tiger' | 'ox' | 'spirits' | 'shark' | 'turtle';
// export const TotemChoices = ['tiger', 'ox', 'spirits', 'shark', 'turtle'] as Totem[]
export const TotemChoices = ['tiger', 'ox', 'spirits', 'shark', 'turtle'] as Totem[]
export type TotemId = (typeof TotemChoices)[number];


export type Sd1Totem = 'attack' | 'defense' | 'magic';
export const Sd1TotemChoices = ['attack', 'defense', 'magic'] as Sd1Totem[]
export type Sd1TotemId = (typeof Sd1TotemChoices)[number];
