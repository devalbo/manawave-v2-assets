import { PlayerSide } from "../../../../game-data/game-play-data";
import { LbsChannelingClanManaflowsBoardState, ManaflowPointProcResult } from "../../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";


export const ClanOfDiversityData: ClanCardDefinition = {
  title: "Clan of Diversity",
  clanId: "sz1-clan-of-diversity",
  text: "blah",
    modes: [
    {
      manaCost: 0,
      modeText: "Add <::attack-counter::> to Clan. Add <::shield-counter::> to Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
    },
    {
      manaCost: 2,
      modeText: "Add <::attack-counter::> <::attack-counter::> to each adjacent Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
    },
    {
      manaCost: 2,
      modeText: "Add <::shield-counter::> <::shield-counter::> to each adjacent Clan.",
      modePrintSettings: {
        fontSize: 12,
        imageSize: 12,
      },
    },
  ],
  conversionRatios: [
    {
      input: ['<::mana-counter::>'],
      output: ['<::mana-level-token::>'],
    },
    {
      input: ['<::mana-counter::>', '<::mana-counter::>'],
      output: ['<::population-increase-counter::>'],
    },
    {
      input: ['<::mana-counter::>', '<::mana-counter::>'],
      output: ['<::attack-counter::>'],
    },
    {
      input: ['<::mana-counter::>'],
      output: ['<::shield-counter::>'],
    },
  ],

  gameLogic: {
    onManaflowProc: function (boardState: LbsChannelingClanManaflowsBoardState, playerSide: PlayerSide): ManaflowPointProcResult {
      console.log("ON MW PROC FOR CLAN OF DIVERSITY");
      return { };
    }
  },
};
