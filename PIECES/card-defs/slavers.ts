import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
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
      manalithClaimsRequired: 0,
      modeText: "Add 1 <::attack-counter::> to Tribe.",
    },
    {
      manalithClaimsRequired: 2,
      modeText: "Add 1 <::attack-counter::> to Tribe for each <::population-token::> on opposing Clan. Take 1 <::soulstain-token::>.",
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Slavers");
      return { };
    },
  },
};
