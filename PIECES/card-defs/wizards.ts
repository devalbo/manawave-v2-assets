import { MwFamilyCardIds } from "@mw-assets/mw-asset-ids/manawave-family-ids";
import { createAddMarkersToMyClanInstructionSet } from "../../manawave-virtual-machine/mvm-instructions-factory";
import { MwMarkerType } from "../../mw-v2-protobufs/protofiles-out/manawave-types";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { createAddMarkersToMyTribeInstructionSet } from "../../manawave-virtual-machine/mvm-instructions-factory";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { FamilyCardPlacementResult } from "../../type-defs/game-data-type-defs";
import { createMvmInstructionsOnlyFamilyModeLogic, IModePrintSettings, OnCardPickData } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


const ON_CARD_PICK_DATA: OnCardPickData = {
  singlePickInitialPopulation: 2,
  multiplePickInitialPopulation: 1,
}


export const WizardsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Wizards",
  newName: "Scions of Krez, Gazer into the Spirit World",
  totemId: 'spirits',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.Wizards,
  },
  text: "TODO: fill in text for Wizards",
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
      modeText: "Add 2 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_ManaCounter, 2),
      ]),
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 4 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_ManaCounter, 4),
      ]),
    },
    {
      numManalithClaimsToActivate: 4,
      modeText: "Add 8 <::mana-counter::> to Tribe. Add 1 <::population-sacrifice-counter::> to Clan.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_ManaCounter, 8),
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_PopulationSacrificeCounter, 1),
      ]),
    },
  ]),
  onCardPickData: ON_CARD_PICK_DATA,

  gameLogic: {
    onFamilyCardPlacement: (): FamilyCardPlacementResult => {
      const retVal: FamilyCardPlacementResult = {
        numPopulationTokensToAddToClan: ON_CARD_PICK_DATA.singlePickInitialPopulation,
      };
      return retVal;
    },
  },    
};
