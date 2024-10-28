import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { createMwBoardPlayerSideCoordinateKey } from "../../type-defs/branded-string-types";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { IModePrintSettings } from "../mw-card-data";
import { EMPTY_PLAYER_CLAN_CARD, NOOP_CLAN_CHANGES } from "../type-defs/type-defs";
import { mapToIndexedModes } from "../mw-mode-utils";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const WizardsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Wizards",
  totemId: 'spirits',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.Wizards,
  },
  text: "TODO: fill in text for Wizards",
  modes: mapToIndexedModes([
    {
      manalithClaimsRequired: 0,
      modeText: "Add 1 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manalithClaimsRequired: 1,
      modeText: "Add 2 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manalithClaimsRequired: 2,
      modeText: "Add 4 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manalithClaimsRequired: 4,
      modeText: "Add 8 <::mana-counter::> to Tribe. Add 1 <::population-sacrifice-counter::> to Clan.",
      modePrintSettings: ModePrintSettings,
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },

  gameLogic: {
    onManaflowProc: (boardState, playerSide, procPoint): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Wizards");

      const clanCardCoordinate = createMwBoardPlayerSideCoordinateKey(playerSide, procPoint.leylineDistance, 0);

      return {
        clanCardChanges: [
          {
            // clanPieceId,
            clanCardCoordinate,
            changes: {
              ...NOOP_CLAN_CHANGES,
              manaCounters: 1,
            },
          },
        ],
      };
    },
    // onManawaveFinalize
  },    
};
