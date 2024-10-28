import { ManaflowPointProcResult } from "../../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { ClanCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { mapToIndexedModes } from "../../../PIECES/mw-mode-utils";
import { ClanCardStockpile, EMPTY_PLAYER_CLAN_CARD, NOOP_CLAN_CHANGES, NOOP_TRIBE_CHANGES } from "../../../PIECES/type-defs/type-defs";
import { createMwCounterCount, createMwTokenCount } from "../../../type-defs/branded-marker-types";
import { createMwBoardPlayerSideCoordinateKey } from "../../../type-defs/branded-string-types";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const ClanOfLifeData: ClanCardDefinition = {
  pieceType: 'clan-card',
  clanDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonClanCardId: ClanCardDefs.ClanOfLife,
  },
  title: "Clan of Life",
  text: "blah",
  modes: mapToIndexedModes([
    {
      manalithClaimsRequired: 0,
      modeText: "Add 1 <::attack-counter::> to Clan. Add 1 <::shield-counter::> to Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      }
    },
    {
      manalithClaimsRequired: 1,
      modeText: "Add 1 <::population-increase-counter::> to Tribe.",
    },
    {
      manalithClaimsRequired: 3,
      modeText: "Unattainable.",
    },
  ]),
  conversionRatios: [
    {
      input: ['<::mana-counter::>'],
      output: ['<::manalith-token::>'],
    },
    {
      input: ['<::mana-counter::>'],
      output: ['<::population-increase-counter::>'],
    },
    {
      input: ['<::mana-counter::>', '<::mana-counter::>'],
      output: ['<::attack-counter::>'],
    },
    {
      input: ['<::mana-counter::>', '<::mana-counter::>'],
      output: ['<::shield-counter::>'],
    },
  ],

  gameLogic: {
    
    createInitialStockpile: () => {
      const stockpile: ClanCardStockpile = {
        ...EMPTY_PLAYER_CLAN_CARD,
        populationTokens: createMwTokenCount(2),
        manalithTokens: createMwTokenCount(2),
        manalithClaimCounters: createMwCounterCount(2),
      };

      return stockpile;
    },

    onManaflowProc: (boardState, playerSide, procPoint): ManaflowPointProcResult => {

      const clanCardCoordinate = createMwBoardPlayerSideCoordinateKey(playerSide, procPoint.leylineDistance, procPoint.leylineRank);

      return {
        clanCardChanges: [
          {
            clanCardCoordinate,
            changes: {
              ...NOOP_CLAN_CHANGES,
              attackCounters: 1,
              shieldCounters: 1,
            },
          },
        ],
        tribeCardChanges: {
          changes: {
            ...NOOP_TRIBE_CHANGES,
            manaCounters: 1,
            soulStainTokenCount: 1,
          }
        }
      };
    }
  },
};
