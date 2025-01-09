import { ClanCardStockpile } from "../../../mw-v2-protobufs/protofiles-out/manawave-board";
import { MwMarkerType } from "../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { createAddMarkersToMyClanInstructionSet, createAddMarkersToMyTribeInstructionSet } from "../../../manawave-virtual-machine/mvm-instructions-factory";
import { createMvmInstructionsOnlyClanModeLogic } from "../../../PIECES/mw-card-data";
import { mapToIndexedModes } from "../../../PIECES/mw-mode-utils";
import { EMPTY_PLAYER_CLAN_STOCKPILE, IMwClanConversionRatio } from "../../../PIECES/type-defs/type-defs";
import { createMwCounterCount, createMwTokenCount } from "../../../type-defs/branded-marker-types";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1ClanCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";


export const ClanOfMagicConversionRatios: IMwClanConversionRatio[] = [
  {
    input: [MwMarkerType.MwMarkerType_ManaCounter],
    output: MwMarkerType.MwMarkerType_ManalithToken,
  },
  {
    input: [MwMarkerType.MwMarkerType_ManaCounter, MwMarkerType.MwMarkerType_ManaCounter],
    output: MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
  },
  {
    input: [MwMarkerType.MwMarkerType_ManaCounter],
    output: MwMarkerType.MwMarkerType_AttackCounter,
  },
  {
    input: [MwMarkerType.MwMarkerType_ManaCounter, MwMarkerType.MwMarkerType_ManaCounter],
    output: MwMarkerType.MwMarkerType_ShieldCounter,
  },
]


export const ClanOfMagicData: ClanCardDefinition = {
  pieceType: 'clan-card',
  title: "Clan of Magic",
  clanDefPbId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonClanCardId: SeasonFlavor1ClanCardDefs.SeasonFlavor1ClanOfMagic,
  },
  text: "blah",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::mana-counter::> to Clan.",
      modeLogic: createMvmInstructionsOnlyClanModeLogic(
        [
          ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_ManaCounter, 1),
        ]
      ),
    },
    {
      numManalithClaimsToActivate: 1,
      modeText: "Add 1 <::population-sacrifice-counter::> to Clan. Add <::mana-counter::> <::mana-counter::> to Tribe.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
      modeLogic: createMvmInstructionsOnlyClanModeLogic(
        [
          ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_PopulationSacrificeCounter, 1),
          ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_ManaCounter, 2),
        ]
      ),
    },
  ]),
  conversionRatios: ClanOfMagicConversionRatios,

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
