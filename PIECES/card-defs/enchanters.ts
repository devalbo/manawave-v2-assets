import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { UnimplementedFamilyCardModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


export const EnchantersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Enchanters",
  totemId: 'spirits',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.Enchanters,
  },
  text: "TODO: fill in text for Enchanters",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      // TODO: figure out how to implement adjacent aligned family counts
      //  see MvmFunction_CountNumberOfAdjacentFamiliesToThisCard
      modeText: "Add 1 <::mana-counter::> to Tribe, plus 1 for each adjacent Family.",
      modeLogic: UnimplementedFamilyCardModeLogic,
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: { },
};
