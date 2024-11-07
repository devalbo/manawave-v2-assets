import { mapToPlayerSideId } from "../../../../game-data/pb-types-mapping/pb-mapping-player";
import { ManaflowPointProcResult } from "../../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { BoardPlayerSideCoordinate, ClanCardStockpile } from "../../../../protobufs/protofiles-out/manawave-board";
import { ClanCardDefs } from "../../../../protobufs/protofiles-out/manawave-season-zero-1";
import { MwMarkerType } from "../../../../protobufs/protofiles-out/manawave-types";
import { mapToIndexedModes } from "../../../PIECES/mw-mode-utils";
import { EMPTY_PLAYER_CLAN_STOCKPILE, NOOP_CLAN_STOCKPILE_CHANGES, NOOP_TRIBE_STOCKPILE_CHANGES } from "../../../PIECES/type-defs/type-defs";
import { createMwCounterCount, createMwTokenCount } from "../../../type-defs/branded-marker-types";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";
import { SEASON_ZERO_1_PBID } from "../../season-id-defs";
import { UnimplementedClanCardModeLogic } from "../../../PIECES/mw-card-data";
import { createAddCountersToMyClanInstructionSet } from "../../../manawave-virtual-machine/mvm-instructions-factory";


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
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::attack-counter::> to Clan. Add 1 <::shield-counter::> to Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
      modeLogic: {
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
        },
        mvmInstructions: [
          ...createAddCountersToMyClanInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, 1),
          ...createAddCountersToMyClanInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, 1),
        ],
      },
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add <::attack-counter::> <::attack-counter::> to each adjacent Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
      modeLogic: UnimplementedClanCardModeLogic,
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add <::shield-counter::> <::shield-counter::> to each adjacent Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
      modeLogic: UnimplementedClanCardModeLogic,
    },
  ]),
  conversionRatios: [
    {
      input: [MwMarkerType.MwMarkerType_ManaCounter],
      output: MwMarkerType.MwMarkerType_ManalithToken,
    },
    {
      input: [MwMarkerType.MwMarkerType_ManaCounter, MwMarkerType.MwMarkerType_ManaCounter],
      output: MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
    },
    {
      input: [MwMarkerType.MwMarkerType_ManaCounter, MwMarkerType.MwMarkerType_ManaCounter],
      output: MwMarkerType.MwMarkerType_AttackCounter,
    },
    {
      input: [MwMarkerType.MwMarkerType_ManaCounter],
      output: MwMarkerType.MwMarkerType_ShieldCounter,
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
  },
};
