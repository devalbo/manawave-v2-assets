import { MwFamilyCardIds } from "@mw-assets/mw-asset-ids/manawave-family-ids";
import { MwMarkerType } from "../../mw-v2-protobufs/protofiles-out/manawave-types";
import { createAddMarkersToMyClanInstructionSet, createAddMarkersToMyTribeInstructionSet } from "../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import {  createMvmInstructionsOnlyFamilyModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


export const ShieldCraftersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Shield Crafters",
  newName: "Scions of Shcraft, First Shield Crafter",
  totemId: 'tiger',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.ShieldCrafters,
  },
  text: "TODO: fill in text for Shield Crafters",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 2 <::shield-counter::> to Clan.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, 2),
      ]),
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 2 <::shield-counter::> to Clan. Add 3 <::shield-counter::> to Tribe.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, 2),
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, 3),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  // gameLogic: { },
};
