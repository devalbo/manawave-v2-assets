import { ClanCardStockpile } from "../../../mw-v2-protobufs/protofiles-out/manawave-board";
import { MwMarkerType } from "../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { createAddMarkersToMyClanInstructionSet, createAddMarkersToMyTribeInstructionSet } from "../../../manawave-virtual-machine/mvm-instructions-factory";
import { createMvmInstructionsOnlyClanModeLogic } from "../../../PIECES/mw-card-data";
import { mapToIndexedModes } from "../../../PIECES/mw-mode-utils";
import { EMPTY_PLAYER_CLAN_STOCKPILE } from "../../../PIECES/type-defs/type-defs";
import { createMwCounterCount, createMwTokenCount } from "../../../type-defs/branded-marker-types";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1ClanCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";


export const ClanOfDefenseData: ClanCardDefinition = {
  pieceType: 'clan-card',
  clanDefPbId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonClanCardId: SeasonFlavor1ClanCardDefs.SeasonFlavor1ClanOfDefense,
  },
  title: "Clan of Defense",
  text: "blah",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::attack-counter::> to Clan. Add 1 <::shield-counter::> to Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
      modeLogic: createMvmInstructionsOnlyClanModeLogic(
        [
          ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, 1),
          ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, 1),
        ]
      ),
    },
    {
      numManalithClaimsToActivate: 1,
      modeText: "Add 1 <::population-increase-counter::> to Tribe.",
      modeLogic: createMvmInstructionsOnlyClanModeLogic(
        [
          ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_PopulationIncreaseCounter, 1),
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
      input: [MwMarkerType.MwMarkerType_ManaCounter],
      output: MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
    },
    {
      input: [MwMarkerType.MwMarkerType_ManaCounter, MwMarkerType.MwMarkerType_ManaCounter],
      output: MwMarkerType.MwMarkerType_AttackCounter,
    },
    {
      input: [MwMarkerType.MwMarkerType_ManaCounter, MwMarkerType.MwMarkerType_ManaCounter],
      output: MwMarkerType.MwMarkerType_ShieldCounter,
    },
  ],

  gameLogic: {
    
    createInitialStockpile: () => {
      const stockpile: ClanCardStockpile = {
        ...EMPTY_PLAYER_CLAN_STOCKPILE,
        populationTokensCount: createMwTokenCount(2),
        manalithTokensCount: createMwTokenCount(0),
        manalithClaimCountersCount: createMwCounterCount(0),
      };

      return stockpile;
    },
  },
};
