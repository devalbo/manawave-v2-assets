import { MwFamilyCardIds } from "../../../../mw-asset-ids/manawave-family-ids";
import { SEASON_FLAVOR_1_PBID } from "../../../season-id-defs";
import { FamilyCardDefinition } from "../../../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic } from "../../../../PIECES/mw-card-data";
import { createAddMarkersToMyClanInstructionSet, createAddMarkersToMyTribeInstructionSet } from "../../../../manawave-virtual-machine/mvm-instructions-factory";
import { MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { mapToIndexedModes } from "../../../../PIECES/mw-mode-utils";


export const RoadBuildersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Road Builders",
  newName: "Line of Brap, Guide of the Broken",
  totemId: 'spirits',
  familyCardDefPbId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.RoadBuilders,
  },
  text: "TODO: fill in text for Road Builders",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::shield-counter::> to Tribe.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, 1),
      ]),
    },
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::population-increase-counter::> to Clan. Add 1 <::mana-counter::> to Tribe.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_PopulationIncreaseCounter, 1),
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_ManaCounter, 1),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  // gameLogic: { },
};
