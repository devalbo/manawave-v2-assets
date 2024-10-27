import { ManaflowPointProcResult } from "../../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { NOOP_CLAN_CHANGES, NOOP_TRIBE_CHANGES } from "../../../PIECES/type-defs/type-defs";
import { createMwBoardPlayerSideCoordinateKey } from "../../../type-defs/branded-string-types";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";


export const ClanOfLifeData: ClanCardDefinition = {
  pieceType: 'clan-card',
  title: "Clan of Life",
  // clanId: "sz1-clan-of-life",
  text: "blah",
  modes: [
    {
      manaClaimsRequired: 0,
      modeText: "Add 1 <::attack-counter::> to Clan. Add 1 <::shield-counter::> to Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      }
    },
    {
      manaClaimsRequired: 1,
      modeText: "Add 1 <::population-increase-counter::> to Tribe.",
    },
  ],
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
