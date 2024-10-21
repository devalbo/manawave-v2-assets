import { ManaflowPointProcResult } from "../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows-types";
import { FamilyCardDefinition } from "../../type-defs/family-defs";


export const ManaChannelersCardDef: FamilyCardDefinition = {
  title: "Mana Channelers",
  totemId: 'spirits',
  text: "TODO: fill in text for Mana Channelers",
  modes: [
    {
      manaCost: 0,
      modeText: "Add 2 <::mana-counter::> to Tribe.",
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Mana Channelers");
      return { };
    },
  }, 
};




// Enchanters [X]

// M0: Add 1 <::mana-counter::> to Tribe, plus 1 for each adjacent Family.
// Channelers [X]

//     M0: No effect.
//     M1 [2]: Add 1 <::mana-counter::> to Tribe for each adjacent X-aligned Family. Reduce total by 1 for each <::soulstain-token::> your Tribe has.
//     M2 [4]: Add 2 <::mana-counter::> to Tribe for each adjacent X-aligned Family. Reduce total by 1 for each <::soulstain-token::> your Tribe has.

// Wizards [X]

//     M0: Add 1 <::mana-counter::> to Tribe.
//     M1 [1]: Add 2 <::mana-counter::> to Tribe.
//     M2 [2]: Add 4 <::mana-counter::> to Tribe.
//     M3 [4]: Add 8 <::mana-counter::> to Tribe. Add 1 <::population-sacrifice-counter::> to Clan.

// Sacrificers [X]

//     M0: Add 1 <::mana-counter::> to Tribe.
//     M1 [1]: Add 1 <::mana-counter::> to Tribe for each adjacent Family. Add 1 <::population-sacrifice-counter::> to Clan. Take 1 <::soulstain-token::>.
//     M2 [4]: Add 1 <::mana-counter::> to Tribe. Add 2 <::mana-counter::> for each adjacent Family. Add 2 <::population-sacrifice-counter::> to Clan. Take 2 <::soulstain-token::>.
