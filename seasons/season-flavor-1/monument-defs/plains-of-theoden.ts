import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";
import { ATTACK_TOTEM_DEF } from "../totems/sf1_tiger";
import { DEFENSE_TOTEM_DEF } from "../totems/sf1_ox";


export const PlainsOfTheodenData: TotemMonumentCard = {
  title: "Plains of Theoden",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.PlainsOfTheoden,
  },
  totem1Id: ATTACK_TOTEM_DEF.totemId,
  totem2Id: DEFENSE_TOTEM_DEF.totemId,
  text:
    "Define Shield Threshold as 2 + number of <::manawave-round-token::>. " +
    "If neither Clan has more <::shield-counter::> than Shield Threshold, continue the Manawave. " +
    "Otherwise, if ONLY your Clan has more <::shield-counter::> than Shield Threshold, you win the game. " +
    "Otherwise, if your Clan has more <::population-increase-counter::> than the opposing Clan, you win the game. " +
    "Otherwise, continue the Manawave.",
  text2: "",
}
