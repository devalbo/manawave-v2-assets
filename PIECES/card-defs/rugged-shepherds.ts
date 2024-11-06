import { FamilyCardDefs } from "../../../protobufs/protofiles-out/manawave-season-zero-1";
import { SEASON_ZERO_1_PBID } from "../../seasons/season-id-defs";
import { FamilyCardDefinition } from "../../type-defs/family-defs";
import { IModePrintSettings, UnimplementedFamilyCardModeLogic } from "../mw-card-data";
import { mapToIndexedModes } from "../mw-mode-utils";


const ModePrintSettings: IModePrintSettings = {
  fontSize: 12,
  imageSize: 12,
}


export const RuggedShepherdsCardDef: FamilyCardDefinition = {
  pieceType: 'family-card',
  title: "Rugged Shepherds",
  totemId: 'ox',
  familyCardDefPbId: {
    seasonId: SEASON_ZERO_1_PBID,
    seasonFamilyCardId: FamilyCardDefs.RuggedShepherds,
  },
  text: "TODO: fill in text for Rugged Shepherds",
  modes: mapToIndexedModes([
    {
      numManalithClaimsToActivate: 0,
      modeText: "Add 1 <::population-increase-counter::> to Clan for each adjacent Family.",
      modePrintSettings: ModePrintSettings,
      modeLogic: UnimplementedFamilyCardModeLogic,
    },
    {
      numManalithClaimsToActivate: 2,
      modeText: "Add 2 <::population-increase-counter::> to Clan for each adjacent Family. Reduce total by 1 for each <::soulstain-token::> your Tribe has.",
      modePrintSettings: ModePrintSettings,
      modeLogic: UnimplementedFamilyCardModeLogic,
    },
  ]),
  onCardPickData: {
    singlePickInitialPopulation: 2,
    multiplePickInitialPopulation: 1,
  },
  gameLogic: { },
};
