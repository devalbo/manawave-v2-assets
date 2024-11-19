import _ from "lodash";


export const LEYLINE_SHUFFLE_RANDOM_OFFSET = 12346;
export const CLAN_PLACEMENT_RANDOM_OFFSET = 9999;
export const START_MANAWAVE_ROUND_OFFSET = 1337;
export const NEXT_MANAWAVE_ROUND_OFFSET = 31337;
export const FAMILY_PLACEMENT_ROUND_OFFSET = 987;

export const NUM_CARDS_PER_ROUND = 3;
export const MAX_NUM_ROUNDS_PER_GAME = 8;
export const NUM_CARDS_PER_TOTEM = 6;
export const MIN_NUM_RANKS_PER_CLAN_COLUMN = 2;
export const MAX_NUM_RANKS_PER_CLAN_COLUMN = 8;

export const FamilyRanksRange = _.range(1, MAX_NUM_RANKS_PER_CLAN_COLUMN + 1);


export const STARTING_FAMILY_CARD_PILE_SIZE = 24;