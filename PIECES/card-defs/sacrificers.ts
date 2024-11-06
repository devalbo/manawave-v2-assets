import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { IModePrintSettings, UnimplementedModeLogic } from "../mw-card-data";
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
      numManalithClaimsToActivate: 1,
      modeText: "Add 1 <::mana-counter::> to Tribe for each adjacent Family. Add 1 <::population-sacrifice-counter::> to Clan. Take 1 <::soulstain-token::>.",
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
