import { PlayerSide } from "../../../../game-data/game-play-data";
import { EMPTY_CLAN_PLAY_PIECE_INTRAWAVE_COUNTERS, EMPTY_PLAYER_TRIBE_INTRAWAVE_COUNTERS, LbsChannelingClanManaflowsBoardState, ManaflowPointProcResult } from "../../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows-types";
import { ClanCardInstanceId, createClanCardInstanceId } from "../../../type-defs/branded-string-types";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";


export const ClanOfLifeData: ClanCardDefinition = {
  title: "Clan of Life",
  // clanId: "sz1-clan-of-life",
  text: "blah",
  modes: [
    {
      manaCost: 0,
      modeText: "Add <::attack-counter::> to Clan. Add <::shield-counter::> to Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      }
    },
    {
      manaCost: 1,
      modeText: "Add <::population-increase-counter::> to Tribe.",
    },
  ],
  conversionRatios: [
    {
      input: ['<::mana-counter::>'],
      output: ['<::mana-level-token::>'],
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
    onManaflowProc: (boardState, playerSide, procPoint): ManaflowPointProcResult => {
      const playerLeylineCards = playerSide === 'OPT' ?
        boardState.optLeylineClanCards :
        boardState.osbLeylineClanCards;

      const clanForCard = playerLeylineCards.get(procPoint.leylineDistance)!;
      const clanPieceId: ClanCardInstanceId = createClanCardInstanceId(playerSide, clanForCard.title);

      return {
        clanCardChanges: [
          {
            clanPieceId,
            changes: {
              ...EMPTY_CLAN_PLAY_PIECE_INTRAWAVE_COUNTERS,
              attackCounters: 1,
              shieldCounters: 1,
            },
          },
        ],
        tribeCardChanges: {
          changes: {
            ...EMPTY_PLAYER_TRIBE_INTRAWAVE_COUNTERS,
            manaCounters: 1,
            soulStainTokenCount: 1,
          }
        }
      };
    }
  },
};
