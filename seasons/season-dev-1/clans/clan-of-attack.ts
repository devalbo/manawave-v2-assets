import { ClanCardStockpile } from "../../../mw-v2-protobufs/protofiles-out/manawave-board";
import { SeasonDev1ClanCardDefs } from "../../../mw-v2-protobufs/protofiles-out/manawave-season-dev-1";
import { MwMarkerType } from "../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { mapToIndexedModes } from "../../../PIECES/mw-mode-utils";
import { EMPTY_PLAYER_CLAN_STOCKPILE } from "../../../PIECES/type-defs/type-defs";
import { createMwCounterCount, createMwTokenCount } from "../../../type-defs/branded-marker-types";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";
import { SEASON_DEV_1_PBID } from "../../season-id-defs";
import { createMvmInstructionsOnlyClanModeLogic } from "../../../PIECES/mw-card-data";
import { createAddMarkersToAdjacentClansInstructionSet, createAddMarkersToMyClanInstructionSet } from "../../../manawave-virtual-machine/mvm-instructions-factory";


export const ClanOfAttackData: ClanCardDefinition = {
  pieceType: 'clan-card',
  title: "Clan of Attack",
  clanDefPbId: {
    seasonId: SEASON_DEV_1_PBID,
    seasonClanCardId: SeasonDev1ClanCardDefs.SeasonDev1ClanOfAttack,
  },
  text: "blah",
  modes: mapToIndexedModes([

    {
      numManalithClaimsToActivate: 0,
      modeText: "Add <::attack-counter::> <::attack-counter::> to each adjacent Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
      modeLogic: createMvmInstructionsOnlyClanModeLogic(
        [
          ...createAddMarkersToAdjacentClansInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, 2),
        ]
      ),
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add <::shield-counter::> <::shield-counter::> to each adjacent Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
      modeLogic: createMvmInstructionsOnlyClanModeLogic(
        [
          ...createAddMarkersToAdjacentClansInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, 2),
        ]
      ),
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
