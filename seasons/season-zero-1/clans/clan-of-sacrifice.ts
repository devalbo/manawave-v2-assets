import { ManaflowPointProcResult } from "../../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { ClanCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { ClanCardStockpile, EMPTY_PLAYER_CLAN_CARD, NOOP_CLAN_CHANGES, NOOP_TRIBE_CHANGES } from "../../../PIECES/type-defs/type-defs";
import { createMwTokenCount } from "../../../type-defs/branded-marker-types";
import { createMwBoardPlayerSideCoordinateKey } from "../../../type-defs/branded-string-types";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";


export const ClanOfSacrificeData: ClanCardDefinition = {
  pieceType: 'clan-card',
  title: "Clan of Sacrifice",
  clanPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonClanCardId: ClanCardDefs.ClanOfSacrifice,
  },
  text: "blah",
  modes: [
    {
      manaClaimsRequired: 0,
      modeText: "Add 1 <::attack-counter::> to Clan. Add 1 <::shield-counter::> to Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
    },
    {
      manaClaimsRequired: 0,
      modeText: "Add 1 <::mana-counter::> to Clan.",
    },
    {
      manaClaimsRequired: 1,
      modeText: "Add 1 <::population-sacrifice-counter::> to Clan. Add <::mana-counter::> <::mana-counter::> to Tribe.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
    },
  ],
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
      input: ['<::mana-counter::>'],
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
      };

      return stockpile;
    },
    
    onManaflowProc: (boardState, playerSide, procPoint): ManaflowPointProcResult => {

      const clanCardCoordinate = createMwBoardPlayerSideCoordinateKey(playerSide, procPoint.leylineDistance, procPoint.leylineRank);

      return {
        clanCardChanges: [
          {
            // clanPieceId,
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
