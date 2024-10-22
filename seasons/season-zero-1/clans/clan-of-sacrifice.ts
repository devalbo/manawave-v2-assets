import { EMPTY_CLAN_PLAY_PIECE_INTRAWAVE_COUNTERS, EMPTY_PLAYER_TRIBE_INTRAWAVE_STOCKPILE, ManaflowPointProcResult } from "../../../../game-play/board-data/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { createMwBoardPlayerSideCoordinateKey } from "../../../type-defs/branded-string-types";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";


export const ClanOfSacrificeData: ClanCardDefinition = {
  pieceType: 'clan-card',
  title: "Clan of Sacrifice",
  // clanId: "sz1-clan-of-sacrifice",
  text: "blah",
  modes: [
    {
      manaCost: 0,
      modeText: "Add <::attack-counter::> to Clan. Add <::shield-counter::> to Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
    },
    {
      manaCost: 0,
      modeText: "Add <::mana-counter::> to Clan.",
    },
    {
      manaCost: 1,
      modeText: "Add <::population-sacrifice-counter::> to Clan. Add <::mana-counter::> <::mana-counter::> to Tribe.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
    },
  ],
  conversionRatios: [
    {
      input: ['<::mana-counter::>'],
      output: ['<::mana-level-token::>'],
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
    onManaflowProc: (boardState, playerSide, procPoint): ManaflowPointProcResult => {
      // const playerLeylineCards = playerSide === 'OPT' ?
      //   boardState.optLeylineClanCards :
      //   boardState.osbLeylineClanCards;

      // const clanForCard = playerLeylineCards[procPoint.leylineDistance - LeylineDistanceFromSource.LeylineDistance_1];
      // const clanPieceId: ClanCardInstanceId = createClanCardInstanceId(playerSide, clanForCard.title);

      const clanCardCoordinate = createMwBoardPlayerSideCoordinateKey(playerSide, procPoint.leylineDistance, procPoint.leylineRank);

      return {
        clanCardChanges: [
          {
            // clanPieceId,
            clanCardCoordinate,
            changes: {
              ...EMPTY_CLAN_PLAY_PIECE_INTRAWAVE_COUNTERS,
              attackCounters: 1,
              shieldCounters: 1,
            },
          },
        ],
        tribeCardChanges: {
          changes: {
            ...EMPTY_PLAYER_TRIBE_INTRAWAVE_STOCKPILE,
            manaCounters: 1,
            soulStainTokenCount: 1,
          }
        }
      };
    }
  },

};
