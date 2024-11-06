import { IModePrintSettings, UnimplementedModeLogic } from "../mw-card-data"
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { mapToIndexedModes } from "../mw-mode-utils";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}

export const SoylentGreenFarmersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Soylent Green Farmers",
  totemId: 'ox',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.SoylentGreenFarmers,
  },
  text: "TODO: fill in text for Soylent Green Farmers",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::population-increase-counter::> to Clan.",
      modePrintSettings: ModePrintSettings,
      modeLogic: UnimplementedModeLogic,
    },
    {
      numManalithClaimsToActivate: 1,
      modeText: "Add 2 <::population-increase-counter::> to Clan. Add 1 <::population-increase-counter::> to Tribe. Add 1 <::population-sacrifice-counter::> to Clan. Take 1 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
      modeLogic: UnimplementedModeLogic,
    },
    {
      numManalithClaimsToActivate: 4,
      modeText: "Add 4 <::population-increase-counter::> to Clan. Add 2 <::population-increase-counter::> to Tribe. Add 2 <::population-sacrifice-counter::> to Clan. Take 2 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
      modeLogic: UnimplementedModeLogic,
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: { },
};
