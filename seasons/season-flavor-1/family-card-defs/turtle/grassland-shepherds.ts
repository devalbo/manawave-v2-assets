import { MwFamilyCardIds } from "../../../../mw-asset-ids/manawave-family-ids";
import { MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { createAddMarkersToMyTribeInstructionSet } from "../../../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_FLAVOR_1_PBID } from "../../../season-id-defs";
import { FamilyCardDefinition } from "../../../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic } from "../../../../PIECES/mw-card-data";
import { mapToIndexedModes } from "../../../../PIECES/mw-mode-utils";


export const GrasslandShepherdsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Grassland Shepherds",
  newName: "Allies of Honu",
  totemId: 'turtle',
  familyCardDefPbId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.GrasslandShepherds,
  },
  text: "TODO: fill in text for Grassland Shepherds",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::population-increase-counter::> to Tribe.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_PopulationIncreaseCounter, 1),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  // gameLogic: { },
};
