import { ManaflowPointProcResult } from "../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { IModePrintSettings, IMwCardData } from "../mw-card-data";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const SacrificersCardDef: FamilyCardDefinition = {
  title: "Sacrificers",
  totemId: 'spirits',
  text: "TODO: fill in text for Sacrificers",
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 1,
      modeText: "Add 1 <::mana-counter::> to Tribe for each adjacent Family. Add 1 <::population-sacrifice-counter::> to Clan. Take 1 <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 4,
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
