import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { MwMarkerType } from "../../../protobufs/protofiles-out/manawave-types";
import { createAddMarkersToMyTribeInstructionSet } from "../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic, IModePrintSettings, UnimplementedFamilyCardModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const SacrificersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Sacrificers",
  totemId: 'spirits',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.Sacrificers,
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
      // TODO: figure out how to implement adjacent family counts
      //  see MvmFunction_CountNumberOfAdjacentFamiliesToThisCard
      numManalithClaimsToActivate: 1,
      modeText: "Add 1 <::mana-counter::> to Tribe for each adjacent Family. Add 1 <::population-sacrifice-counter::> to Clan. Take 1 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
      modeLogic: UnimplementedFamilyCardModeLogic,
    },
    {
      // TODO: figure out how to implement adjacent family counts
      //  see MvmFunction_CountNumberOfAdjacentFamiliesToThisCard
      numManalithClaimsToActivate: 1,
      modeText: "Add 1 <::mana-counter::> to Tribe for each adjacent Family. Add 2 <::population-sacrifice-counter::> to Clan for each adjacent Family. Take 2 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
      modeLogic: UnimplementedFamilyCardModeLogic,
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: { },
};
