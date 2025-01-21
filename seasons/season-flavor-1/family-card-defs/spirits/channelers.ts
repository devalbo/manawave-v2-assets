import { MwFamilyCardIds } from "../../../../mw-asset-ids/manawave-family-ids";
import { MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { MvmAmountQueryFunctionId } from "../../../../mw-v2-protobufs/protofiles-out/manawave-vm";
import { createAddMarkersToMyTribeForCountFunctionAmountInstructionSet, createNoOpInstructionSet, createRemoveMarkersFromMyTribeForCountFunctionAmountInstructionSet } from "../../../../manawave-virtual-machine/mvm-instructions-factory";
import { SEASON_FLAVOR_1_PBID } from "../../../season-id-defs";
import { FamilyCardDefinition } from "../../../../type-defs/family-defs";
import { createMvmInstructionsOnlyFamilyModeLogic, IModePrintSettings } from "../../../../PIECES/mw-card-data";
import { mapToIndexedModes } from "../../../../PIECES/mw-mode-utils";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const ChannelersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Channelers",
  newName: "Line of Krebor, Spirits Channeler",
  totemId: 'spirits',
  familyCardDefPbId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonFamilyCardId: MwFamilyCardIds.Channelers,
  },
  text: "TODO: fill in text for Channelers",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "No effect.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createNoOpInstructionSet(),
      ]),
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 1 <::mana-counter::> to Tribe for each adjacent X-aligned Family. Reduce total by 1 for each <::soulstain-token::> your Tribe has.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCardWithSameAlignment,
          MwMarkerType.MwMarkerType_ManaCounter,
        ),
        ...createRemoveMarkersFromMyTribeForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfMySoulstainTokens,
          MwMarkerType.MwMarkerType_ManaCounter,
        ),
      ]),
    },
    {
      numManalithClaimsToActivate: 4,
      modeText: "Add 2 <::mana-counter::> to Tribe for each adjacent X-aligned Family. Reduce total by 1 for each <::soulstain-token::> your Tribe has.",
      modePrintSettings: ModePrintSettings,
      modeLogic: createMvmInstructionsOnlyFamilyModeLogic([
        ...createAddMarkersToMyTribeForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCardWithSameAlignment,
          MwMarkerType.MwMarkerType_ManaCounter,
        ),
        ...createAddMarkersToMyTribeForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfAdjacentFamiliesToThisCardWithSameAlignment,
          MwMarkerType.MwMarkerType_ManaCounter,
        ),
        ...createRemoveMarkersFromMyTribeForCountFunctionAmountInstructionSet(
          MvmAmountQueryFunctionId.MvmAmountQueryFunction_CountNumberOfMySoulstainTokens,
          MwMarkerType.MwMarkerType_ManaCounter,
        ),
      ]),
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  // gameLogic: { },
};
