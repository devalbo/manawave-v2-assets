import { MwFamilyCardIds } from "@mw-assets/mw-asset-ids/manawave-family-ids";
import { MwMarkerType } from "../../mw-v2-protobufs/protofiles-out/manawave-types";
import { MvmAmountQueryFunctionId } from "../../mw-v2-protobufs/protofiles-out/manawave-vm";
import { createAddMarkersToMyClanInstructionSet, createAddMarkersToMyTribeForCountFunctionAmountInstructionSet, createAddMarkersToMyTribeInstructionSet } from "../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic, IModePrintSettings } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const SacrificersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Sacrificers",
  newName: "Disciples of Krife, Delver of the Spiritworld",
  totemId: 'spirits',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.Sacrificers,
  },
  text: "TODO: fill in text for Sacrificers",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_ManaCounter, 1),
      ]),
    },
    {
      numManalithClaimsToActivate: 1,
      modeText: "Add 1 <::mana-counter::> to Tribe for each adjacent Family. Add 1 <::population-sacrifice-counter::> to Clan. Take 1 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCard,
          MwMarkerType.MwMarkerType_ManaCounter,
        ),
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_PopulationSacrificeCounter, 1),
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_SoulstainToken, 1),
      ]),
    },
    {
      numManalithClaimsToActivate: 1,
      modeText: "Add 1 <::mana-counter::> to Tribe for each adjacent Family. Add 2 <::population-sacrifice-counter::> to Clan for each adjacent Family. Take 2 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCard,
          MwMarkerType.MwMarkerType_ManaCounter,
        ),
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_PopulationSacrificeCounter, 2),
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_SoulstainToken, 2),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: { },
};
