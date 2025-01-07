import { MwFamilyCardIds } from "@mw-assets/mw-asset-ids/manawave-family-ids";
import { MwMarkerType } from "../../mw-v2-protobufs/protofiles-out/manawave-types";
import { createAddMarkersToAdjacentClansInstructionSet, createAddMarkersToMyClanInstructionSet, createAddMarkersToMyTribeInstructionSet } from "../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


export const DefendersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Defenders",
  newName: "Offspring of Shold, Defender",
  totemId: 'tiger',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.Defenders,
  },
  text: "TODO: fill in text for Defenders",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 3 <::shield-counter::> to adjacent Clans. Add 1 <::population-sacrifice-counter::> to Clan.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToAdjacentClansInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, 3),
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_PopulationSacrificeCounter, 1),
      ]),
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 5 <::shield-counter::> to Clan. Add 1 <::population-sacrifice-counter::> to adjacent Clans. Take 1 <::soulstain-token::>.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyClanInstructionSet(MwMarkerType.MwMarkerType_ShieldCounter, 5),
        ...createAddMarkersToAdjacentClansInstructionSet(MwMarkerType.MwMarkerType_PopulationSacrificeCounter, 1),
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_SoulstainToken, 1),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  // gameLogic: { },
};
