import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
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
      manalithClaimsRequired: 0,
      modeText: "Add 2 <::shield-counter::> to Clan.",
    },
    {
      manalithClaimsRequired: 2,
      modeText: "Add 2 <::shield-counter::> to Clan. Add 3 <::shield-counter::> to Tribe.",
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Shield Crafters");
      return { };
    },
  },
};
