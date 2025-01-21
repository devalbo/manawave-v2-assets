import { createMvmInstructionsOnlyFamilyModeLogic, IModePrintSettings } from "../../../../PIECES/mw-card-data"
import { FamilyCardDefinition } from "../../../../type-defs/family-defs";
import { MwFamilyCardIds } from "../../../../mw-asset-ids/manawave-family-ids";
import { SEASON_FLAVOR_1_PBID } from "../../../season-id-defs";
import { mapToIndexedModes } from "../../../../PIECES/mw-mode-utils";
import { createAddMarkersToMyClanInstructionSet, createAddMarkersToMyTribeInstructionSet } from "../../../../manawave-virtual-machine/mvm-instructions-factory";
import { MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}

export const SoylentGreenFarmersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Soylent Green Farmers",
  newName: "Scions of Necron of the Black Kelp",
  totemId: 'turtle',
  familyCardDefPbId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.SoylentGreenFarmers,
  },
  text: "TODO: fill in text for Soylent Green Farmers",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::population-increase-counter::> to Clan.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_PopulationIncreaseCounter, 1),
      ]),
    },
    {
      numManalithClaimsToActivate: 1,
      modeText: "Add 2 <::population-increase-counter::> to Clan. Add 1 <::population-increase-counter::> to Tribe. Add 1 <::population-sacrifice-counter::> to Clan. Take 1 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_PopulationIncreaseCounter, 2),
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_PopulationIncreaseCounter, 1),
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_PopulationSacrificeCounter, 1),
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_SoulstainToken, 1),
      ]),
    },
    {
      numManalithClaimsToActivate: 4,
      modeText: "Add 4 <::population-increase-counter::> to Clan. Add 2 <::population-increase-counter::> to Tribe. Add 2 <::population-sacrifice-counter::> to Clan. Take 2 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_PopulationIncreaseCounter, 4),
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_PopulationIncreaseCounter, 2),
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_PopulationSacrificeCounter, 2),
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_SoulstainToken, 2),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  // gameLogic: { },
};
