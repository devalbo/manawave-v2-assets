import { EMPTY_CLAN_PLAY_PIECE_INTRAWAVE_COUNTERS, EMPTY_PLAYER_TRIBE_INTRAWAVE_COUNTERS, ManaflowPointProcResult } from "../../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows-types";
import { ClanCardInstanceId, createClanCardInstanceId } from "../../../type-defs/branded-string-types";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";


export const ClanOfDiversityData: ClanCardDefinition = {
  title: "Clan of Diversity",
  // clanId: "sz1-clan-of-diversity",
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
      manaCost: 2,
      modeText: "Add <::attack-counter::> <::attack-counter::> to each adjacent Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
    },
    {
      manaCost: 2,
      modeText: "Add <::shield-counter::> <::shield-counter::> to each adjacent Clan.",
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
      input: ['<::mana-counter::>', '<::mana-counter::>'],
      output: ['<::attack-counter::>'],
    },
    {
      input: ['<::mana-counter::>'],
      output: ['<::shield-counter::>'],
    },
  ],

  gameLogic: {
    onManaflowProc: function (boardState, playerSide, procPoint): ManaflowPointProcResult {
      console.log("ON MW PROC FOR CLAN OF DIVERSITY");

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
