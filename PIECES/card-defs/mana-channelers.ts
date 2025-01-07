import { MwFamilyCardIds } from "@mw-assets/mw-asset-ids/manawave-family-ids";
import { MwMarkerType } from "../../mw-v2-protobufs/protofiles-out/manawave-types";
import { createAddMarkersToMyTribeInstructionSet } from "../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


export const ManaChannelersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Mana Channelers",
  newName: "Line of Manur, Spirit Friend",
  totemId: 'spirits',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.ManaChannelers,
  },
  text: "TODO: fill in text for Mana Channelers",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 2 <::mana-counter::> to Tribe.",
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeInstructionSet(MwMarkerType.MwMarkerType_ManaCounter, 2),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  // gameLogic: {   },
};
