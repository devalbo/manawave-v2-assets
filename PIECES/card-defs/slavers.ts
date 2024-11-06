import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { UnimplementedModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


export const SlaversCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Slavers",
  totemId: 'tiger',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.Slavers,
  },
  text: "TODO: fill in text for Slavers",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::attack-counter::> to Tribe.",
      modeLogic: UnimplementedModeLogic,
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 1 <::attack-counter::> to Tribe for each <::population-token::> on opposing Clan. Take 1 <::soulstain-token::>.",
      modeLogic: UnimplementedModeLogic,
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: { },
};
