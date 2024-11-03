import { mapToPlayerSideId } from "../../../../game-data/pb-types-mapping/pb-mapping-player";
import { ManaflowPointProcResult } from "../../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { BoardPlayerSideCoordinate, ClanCardStockpile } from "../../../../protobufs/protofiles-out/manawave-board";
import { ClanCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { mapToIndexedModes } from "../../../PIECES/mw-mode-utils";
import { EMPTY_PLAYER_CLAN_STOCKPILE, NOOP_CLAN_STOCKPILE_CHANGES, NOOP_TRIBE_STOCKPILE_CHANGES } from "../../../PIECES/type-defs/type-defs";
import { createMwCounterCount, createMwTokenCount } from "../../../type-defs/branded-marker-types";
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
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::attack-counter::> to Clan. Add 1 <::shield-counter::> to Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      }
    },
    {
      numManalithClaimsToActivate: 1,
      modeText: "Add 1 <::population-increase-counter::> to Tribe.",
    },
    // {
    //   numManalithClaimsToActivate: 3,
    //   modeText: "Unattainable.",
    // },
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
        ...EMPTY_PLAYER_CLAN_STOCKPILE,
        populationTokensCount: createMwTokenCount(2),
        manalithTokensCount: createMwTokenCount(2),
        manalithClaimCountersCount: createMwCounterCount(2),
      };

      return stockpile;
    },

    onManaflowProc: (boardState, playerSide, procPoint): ManaflowPointProcResult => {

      const clanCardCoordinate: BoardPlayerSideCoordinate = {
        playerSideId: mapToPlayerSideId(playerSide),
        leylineDistance: procPoint.leylineDistance,
        familyRank: procPoint.leylineRank,
      };

      return {
        clanCardChanges: [
          {
            clanCardCoordinate,
            changes: {
              ...NOOP_CLAN_STOCKPILE_CHANGES,
              attackCountersCount: 1,
              shieldCountersCount: 1,
            },
          },
        ],
        tribeCardChanges: {
          changes: {
            ...NOOP_TRIBE_STOCKPILE_CHANGES,
            manaCountersCount: 1,
            soulstainTokenCount: 1,
          }
        }
      };
    }
  },
};
