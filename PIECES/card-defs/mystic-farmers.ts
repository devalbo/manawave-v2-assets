import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const MysticFarmersCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Mystic Farmers",
  totemId: 'ox',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.MysticFarmers,
  },
  text: "TODO: fill in text for Mystic Farmers",
  modes: [
    {
      manaClaimsRequired: 0,
      modeText: "Add 1 <::population-increase-counter::> to Clan.",
    },
    {
      manaClaimsRequired: 1,
      modeText: "Execute M0. Add 1 <::mana-counter::> to Clan.",
    },
    {
      manaClaimsRequired: 2,
      modeText: "Execute M0. Add 1 <::mana-counter::> to Tribe.",
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Mystic Farmers");
      return { };
    },
  },
};
