import { mapToPlayerSideId } from "../../../game-data/pb-types-mapping/pb-mapping-player";
import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { BoardPlayerSideCoordinate } from "../../../protobufs/protofiles-out/manawave-board";
import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { FamilyCardPlacementResult } from "../../type-defs/game-data-type-defs";
import { IModePrintSettings, OnCardPickData, UnimplementedModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";
import { NOOP_CLAN_STOCKPILE_CHANGES } from "../type-defs/type-defs";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


const ON_CARD_PICK_DATA: OnCardPickData = {
  singlePickInitialPopulation: 2,
  multiplePickInitialPopulation: 1,
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
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
      modeLogic: {
        onManaflowProc: (boardState, playerSide, procPoint): ManaflowPointProcResult => {
          console.log("ON MANAFLOW PROC FOR Wizards");

          const clanCardCoordinate: BoardPlayerSideCoordinate = {
            playerSideId: mapToPlayerSideId(playerSide),
            leylineDistance: procPoint.leylineDistance,
            familyRank: 0,
          };

          return {
            clanCardChanges: [
              {
                clanCardCoordinate,
                changes: {
                  ...NOOP_CLAN_STOCKPILE_CHANGES,
                  manaCountersCount: 1,
                },
              },
            ],
          };
        },
      },
    },
    {
      numManalithClaimsToActivate: 1,
      modeText: "Add 2 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
      modeLogic: UnimplementedModeLogic,
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 4 <::mana-counter::> to Tribe.",
      modePrintSettings: ModePrintSettings,
      modeLogic: UnimplementedModeLogic,
    },
    {
      numManalithClaimsToActivate: 4,
      modeText: "Add 8 <::mana-counter::> to Tribe. Add 1 <::population-sacrifice-counter::> to Clan.",
      modePrintSettings: ModePrintSettings,
      modeLogic: UnimplementedModeLogic,
    },
  ]),
  onCardPickData: ON_CARD_PICK_DATA,

  gameLogic: {
    onFamilyCardPlacement: (): FamilyCardPlacementResult => {
      const retVal: FamilyCardPlacementResult = {
        numPopulationTokensToAddToClan: ON_CARD_PICK_DATA.singlePickInitialPopulation,
      };
      return retVal;
    },
  },    
};
