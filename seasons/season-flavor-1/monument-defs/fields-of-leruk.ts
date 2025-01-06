import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";
import { ATTACK_TOTEM_DEF } from "../totems/sf1_tiger";
import { DEFENSE_TOTEM_DEF } from "../totems/sf1_ox";


export const FieldsOfLerukData: TotemMonumentCard = {
  title: "Fields of Leruk",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.FieldsOfLeruk,
  },
  totem1Id: ATTACK_TOTEM_DEF.totemId,
  totem2Id: DEFENSE_TOTEM_DEF.totemId,
  text:
    "If current manawave round number is 1, Population Increase Threshold is 2.\n" +
    "If current manawave round number is 2, Population Increase Threshold is 4.\n" +
    "Otherwise, Population Increase Threshold is 2 + current Manawave round number.\n" +
    "If neither Clan has more Population Increase counters than Population Increase Threshold, continue the Manawave.\n" +
    "Otherwise, If ONLY your Clan has more Population Increase counters than Population Increase Threshold, you win the game.\n" +
    "Otherwise, If your Clan has more Shield counters than the opposing Clan, you win the game.\n" +
    "Otherwise, continue the Manawave.",
  text2: "",
}
