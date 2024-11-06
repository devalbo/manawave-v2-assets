import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { UnimplementedModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


export const ForestHuntersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "MW Forest Hunters",
  totemId: 'ox',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.MwForestHunters,
  },
  text: "TODO: fill in text for Forest Hunters",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 2 <::population-increase-counter::> to Clan.",
      modeLogic: UnimplementedModeLogic,
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 3 <::population-increase-counter::> to Clan.",
      modeLogic: UnimplementedModeLogic,
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: { },
};
