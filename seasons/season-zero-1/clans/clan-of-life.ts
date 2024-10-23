import { ManaflowPointProcResult } from "../../../../game-play/board-data/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { EMPTY_PLAYER_CLAN_CARD, EMPTY_PLAYER_TRIBE_CARD, NULL_CLAN_CHANGES, NULL_TRIBE_CHANGES } from "../../../PIECES/type-defs/type-defs";
import { createMwBoardPlayerSideCoordinateKey } from "../../../type-defs/branded-string-types";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";


export const ClanOfLifeData: ClanCardDefinition = {
  pieceType: 'clan-card',
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
              ...NULL_CLAN_CHANGES,
              attackCounters: 1,
              shieldCounters: 1,
            },
          },
        ],
        tribeCardChanges: {
          changes: {
            ...NULL_TRIBE_CHANGES,
            manaCounters: 1,
            soulStainTokenCount: 1,
          }
        }
      };
    }
  },
};
