import { MwFamilyCardIds } from "@mw-assets/mw-asset-ids/manawave-family-ids";
import { MwMarkerType } from "../../mw-v2-protobufs/protofiles-out/manawave-types";
import { createAddMarkersToMyClanInstructionSet, createAddMarkersToMyTribeInstructionSet } from "../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


export const ClubWieldersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Club Wielders",
  newName: "Bastards of Klurb, Stick Improver",
  totemId: 'tiger',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.ClubWielders,
  },
  text: "TODO: fill in text for Club Wielders",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 2 <::attack-counter::> to Clan.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, 2),
      ]),
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 2 <::attack-counter::> to Clan. Add 2 <::attack-counter::> to Tribe.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, 2),
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_AttackCounter, 2),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  // gameLogic: { },
};
