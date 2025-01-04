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
    "[1-3] <::manawave-round-token::>: Count number of <::mana-counter::> for each adjacent Clan. If either Clan has 3 or more <::mana-counter::> than the other, that Clan's Player wins.",
  text2:
    "[4-8] <::manawave-round-token::>: Count number of <::soulstain-token::> for each Tribe. If either Tribe has 4 or more <::soulstain-token::> than the other, that Tribe's Player loses.",
}
