import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";
import { DEFENSE_TOTEM_DEF } from "../totems/sf1_ox";
import { MAGIC_TOTEM_DEF } from "../totems/sf1_spirits";


export const TombOfGenghisData: TotemMonumentCard = {
  title: "Tomb of Genghis",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.TombOfGenghis,
  },
  totem1Id: MAGIC_TOTEM_DEF.totemId,
  totem2Id: DEFENSE_TOTEM_DEF.totemId,
  isDefault: true,
  text:
    "If current manawave round number is 1, set Attack threshold to 2.\n" +
    "If current manawave round number is 2, set Attack threshold to 4.\n" +
    "Otherwise, set Attack threshold to 2 + current Manawave round number.\n" +
    "If neither Clan has more Attack counters than the Attack threshold, continue the Manawave.\n" +
    "Otherwise, If ONLY your Clan has more Attack counters than the Attack threshold, you win the game.\n" +
    "Otherwise, If your Clan has more Manalith tokens than the opposing Clan, you win the game.\n" +
    "Otherwise, continue the Manawave.",
  text2: "",
};
