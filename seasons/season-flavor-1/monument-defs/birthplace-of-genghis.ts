import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";
import { ATTACK_TOTEM_DEF } from "../totems/sf1_tiger";
import { MAGIC_TOTEM_DEF } from "../totems/sf1_spirits";


export const BirthplaceOfGenghisData: TotemMonumentCard = {
  title: "Birthplace of Genghis",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.BirthplaceOfGenghis,
  },
  totem1Id: ATTACK_TOTEM_DEF.totemId,
  totem2Id: MAGIC_TOTEM_DEF.totemId,
  text:
    "[1-3] <::manawave-round-token::>: Count number of <::attack-counter::> for each adjacent Clan. If either Clan has 3 or more <::attack-counter::> than the other, that Clan's Player wins.",
  text2:
    "[4-8] <::manawave-round-token::>: Count number of <::population-slaughter-counter::> counters for each Tribe. If either Tribe has 4 or more <::population-slaughter-counter::> than the other, that Tribe's Player loses.",
}

