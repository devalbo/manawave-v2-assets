import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { IModePrintSettings } from "../mw-card-data";


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
  modes: [
    {
      manaClaimsRequired: 0,
      modeText: "Add 1 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaClaimsRequired: 1,
      modeText: "Add 1 <::mana-counter::> to Tribe for each adjacent Family. Add 1 <::population-sacrifice-counter::> to Clan. Take 1 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaClaimsRequired: 4,
      modeText: "Add 1 <::mana-counter::> to Tribe. Add 2 <::mana-counter::> for each adjacent Family. Add 2 <::population-sacrifice-counter::> to Clan. Take 2 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Wizards");
      return { };
    },
  },
};
