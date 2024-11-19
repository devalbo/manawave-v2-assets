
export const PlayerSlotIds = [
  "optPlayer",  // OPT side
  "osbPlayer",  // OSB side
] as const;
export type PlayerSlotId = (typeof PlayerSlotIds)[number];


export const PlayerSides = [
  'OPT',
  'OSB',
] as const;
export type PlayerSide = (typeof PlayerSides)[number];


export type PlayerDefaultStrategy = 'first-choice' | 'last-choice' | 'random-choice'

// export type PlayerCardChoice = 'choose-family-a' | 'choose-family-b' | 'choose-family-c'

export type LeylineName = 'Leyline A' | 'Leyline B' | 'Leyline C'

export type LeylineColumnName = 'A' | 'B' | 'C' | 'SRC' | 'SNK'

export type LeylineDistanceStr = 'Leyline 1' | 'Leyline 2' | 'Leyline 3'
