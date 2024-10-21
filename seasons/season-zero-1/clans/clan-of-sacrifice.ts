import { PlayerSide } from "../../../../game-data/game-play-data";
import { LbsChannelingClanManaflowsBoardState, ManaflowPointProcResult } from "../../../../game-play/board-data/local-game-state/lbs-channel-clan-manaflows-types";
import { ClanCardDefinition } from "../../../type-defs/clan-defs";


export const ClanOfSacrificeData: ClanCardDefinition = {
  title: "Clan of Sacrifice",
  // clanId: "sz1-clan-of-sacrifice",
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
      manaCost: 0,
      modeText: "Add <::mana-counter::> to Clan.",
    },
    {
      manaCost: 1,
      modeText: "Add <::population-sacrifice-counter::> to Clan. Add <::mana-counter::> <::mana-counter::> to Tribe.",
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
      input: ['<::mana-counter::>'],
      output: ['<::attack-counter::>'],
    },
    {
      input: ['<::mana-counter::>', '<::mana-counter::>'],
      output: ['<::shield-counter::>'],
    },
  ],

  gameLogic: {
    onManaflowProc: function (boardState: LbsChannelingClanManaflowsBoardState, playerSide: PlayerSide): ManaflowPointProcResult {
      console.log("ON MW PROC FOR CLAN OF SACRIFICE");
      return { };
    }
  },

};
