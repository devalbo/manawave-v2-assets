import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { UnimplementedFamilyCardModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


export const GrasslandShepherdsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Grassland Shepherds",
  totemId: 'ox',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.GrasslandShepherds,
  },
  text: "TODO: fill in text for Grassland Shepherds",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::population-increase-counter::> to Tribe.",
      modeLogic: UnimplementedFamilyCardModeLogic,
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: { },
};
