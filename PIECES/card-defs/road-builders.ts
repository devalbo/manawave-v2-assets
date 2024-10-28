import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const RoadBuildersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Road Builders",
  totemId: 'spirits',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.RoadBuilders,
  },
  text: "TODO: fill in text for Road Builders",
  modes: [
    {
      manaClaimsRequired: 0,
      modeText: "Add 1 <::population-increase-counter::> to Clan. Add 1 <::mana-counter::> to Tribe.",
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Road Builders");
      return { };
    },
  }, 
};
