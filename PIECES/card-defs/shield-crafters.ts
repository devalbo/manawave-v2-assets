import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import {  UnimplementedFamilyCardModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


export const ShieldCraftersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Shield Crafters",
  totemId: 'tiger',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.ShieldCrafters,
  },
  text: "TODO: fill in text for Shield Crafters",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 2 <::shield-counter::> to Clan.",
      modeLogic: UnimplementedFamilyCardModeLogic,
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 2 <::shield-counter::> to Clan. Add 3 <::shield-counter::> to Tribe.",
      modeLogic: UnimplementedFamilyCardModeLogic,
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: { },
};
