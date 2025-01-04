import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";
import { MAGIC_TOTEM_DEF } from "../totems/sf1_spirits";
import { DEFENSE_TOTEM_DEF } from "../totems/sf1_ox";


export const PeaksOfTheodenData: TotemMonumentCard = {
  title: "Peaks of Theoden",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.PeaksOfTheoden,
  },
  totem1Id: MAGIC_TOTEM_DEF.totemId,
  totem2Id: DEFENSE_TOTEM_DEF.totemId,
  text:
    "[1-3] <::manawave-round-token::>: Count number of <::manalith-token::> for each adjacent Clan. If either Clan has 3 or more <::manalith-token::> than the other, that Clan's Player wins.",
  text2:
    "[4-8] <::manawave-round-token::>: Count number of <::shield-counter::> for each Tribe. If either Tribe has 4 or more <::shield-counter::> than the other, that Tribe's Player loses.",
}
