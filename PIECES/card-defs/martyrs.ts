import { MwFamilyCardIds } from "../../mw-asset-ids/manawave-family-ids";
import { MwMarkerType } from "../../mw-v2-protobufs/protofiles-out/manawave-types";
import { MvmAmountQueryFunctionId } from "../../mw-v2-protobufs/protofiles-out/manawave-vm";
import { 
  createAddMarkersToMyClanInstructionSet, 
  createRemoveMarkersFromMyClanForCountFunctionAmountInstructionSet,
} from "../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


export const MartyrsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Martyrs",
  newName: "Line of Perit, Clan Martyr",
  totemId: 'tiger',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.Martyrs,
  },
  text: "TODO: fill in text for Martyrs",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::attack-counter::> to Clan.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, 1),
      ]),
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 5 <::attack-counter::> to Clan. Reduce total by 1 for each <::soulstain-token::> your Tribe has. Add 1 <::population-sacrifice-counter::> to Clan.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, 5),
        ...createRemoveMarkersFromMyClanForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfMySoulstainTokens,
          MwMarkerType.MwMarkerType_AttackCounter,
        ),
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_PopulationSacrificeCounter, 1),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  // gameLogic: { },
};
