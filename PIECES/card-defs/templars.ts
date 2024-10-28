import { ManaflowPointProcResult } from "../../../game-play/local-game-state/channel-clan-manaflows/lbs-channel-clan-manaflows-types";
import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { IModePrintSettings } from "../mw-card-data";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const TemplarsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Templars",
  totemId: 'tiger',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.Templars,
  },
  text: "TODO: fill in text for Templars",
  modes: [
    {
      manaClaimsRequired: 0,
      modeText: "Add 1 <::attack-counter::> to Clan. Add 1 <::shield-counter::> to Clan.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaClaimsRequired: 1,
      modeText: "Add 3 <::shield-counter::> to Clan. Add 1 <::attack-counter::> to Tribe. Reduce each by 1 if your Tribe has any <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
    },
    {
      manaClaimsRequired: 1,
      modeText: "Add 3 <::attack-counter::> to Clan. Add 1 <::shield-counter::> to Tribe. Reduce each by 1 if your Tribe has any <::soulstain-token::>.",
      modePrintSettings: ModePrintSettings,
    },
  ],
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: {
    onManaflowProc: (boardState, playerSide): ManaflowPointProcResult => {
      console.log("ON MANAFLOW PROC FOR Templars");
      return { };
    },
  },
};
