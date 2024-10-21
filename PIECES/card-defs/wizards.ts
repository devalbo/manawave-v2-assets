import { EMPTY_CLAN_PLAY_PIECE_INTRAWAVE_COUNTERS, ManaflowPointProcResult } from "../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows";
import { ClanCardInstanceId, createClanCardInstanceId } from "../../../game-play/branded-string-types";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { IModePrintSettings } from "../mw-card-data";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const WizardsCardDef: FamilyCardDefinition = {
  title: "Wizards",
  totemId: 'spirits',
  text: "TODO: fill in text for Wizards",
  modes: [
    {
      manaCost: 0,
      modeText: "Add 1 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 1,
      modeText: "Add 2 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 2,
      modeText: "Add 4 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaCost: 4,
      modeText: "Add 8 <::mana-counter::> to Tribe. Add 1 <::population-sacrifice-counter::> to Clan.",
      modePrintSettings: ModePrintSettings,
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },

  gameLogic: {
    onManaflowProc: (boardState, playerSide, procPoint): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Wizards");

      const playerLeylineCards = playerSide === 'OPT' ?
        boardState.optLeylineClanCards :
        boardState.osbLeylineClanCards;

      const clanForCard = playerLeylineCards.get(procPoint.leylineDistance)!;
      const clanPieceId: ClanCardInstanceId = createClanCardInstanceId(playerSide, clanForCard.title);

      return {
        clanCardChanges: [
          {
            clanPieceId,
            changes: {
              ...EMPTY_CLAN_PLAY_PIECE_INTRAWAVE_COUNTERS,
              manaCounters: 1,
            },
          },
        ],
      };
    },
    // onManawaveFinalize
  },
    
};
