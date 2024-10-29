import { ManaflowPointProcResult } from "../../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { ClanCardStockpile } from "../../../../protobufs/protofiles-out/manawave-board";
import { ClanCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { mapToIndexedModes } from "../../../PIECES/mw-mode-utils";
import { EMPTY_PLAYER_CLAN_STOCKPILE, NOOP_CLAN_STOCKPILE_CHANGES, NOOP_TRIBE_STOCKPILE_CHANGES } from "../../../PIECES/type-defs/type-defs";
import { createMwCounterCount, createMwTokenCount } from "../../../type-defs/branded-marker-types";
import { createMwBoardPlayerSideCoordinateKey } from "../../../type-defs/branded-string-types";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const ClanOfDiversityData: ClanCardDefinition = {
  pieceType: 'clan-card',
  title: "Clan of Diversity",
  clanDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonClanCardId: ClanCardDefs.ClanOfDiversity,
  },
  text: "blah",
  modes: mapToIndexedModes([
    {
      manalithClaimsRequired: 0,
      modeText: "Add 1 <::attack-counter::> to Clan. Add 1 <::shield-counter::> to Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
    },
    {
      manalithClaimsRequired: 2,
      modeText: "Add <::attack-counter::> <::attack-counter::> to each adjacent Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
    },
    {
      manalithClaimsRequired: 2,
      modeText: "Add <::shield-counter::> <::shield-counter::> to each adjacent Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
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
      input: ['<::mana-counter::>', '<::mana-counter::>'],
      output: ['<::population-increase-counter::>'],
    },
    {
      input: ['<::mana-counter::>', '<::mana-counter::>'],
      output: ['<::attack-counter::>'],
    },
    {
      input: ['<::mana-counter::>'],
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

      const clanCardCoordinate = createMwBoardPlayerSideCoordinateKey(playerSide, procPoint.leylineDistance, procPoint.leylineRank);

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
