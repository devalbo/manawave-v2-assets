import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { UnimplementedModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


export const ClubWieldersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Club Wielders",
  totemId: 'tiger',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.ClubWielders,
  },
  text: "TODO: fill in text for Club Wielders",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 2 <::attack-counter::> to Clan.",
      modeLogic: UnimplementedModeLogic,
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 2 <::attack-counter::> to Clan. Add 2 <::attack-counter::> to Tribe.",
      modeLogic: UnimplementedModeLogic,
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: { },
};
