import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";
import { ATTACK_TOTEM_DEF } from "../totems/sf1_shark";
import { MAGIC_TOTEM_DEF } from "../totems/sf1_spirits";


export const BirthplaceOfKolrathData: TotemMonumentCard = {
  title: "Birthplace of Kolrath",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.BirthplaceOfGenghis,
  },
  totem1Id: ATTACK_TOTEM_DEF.totemId,
  totem2Id: MAGIC_TOTEM_DEF.totemId,
  isDefault: false,
  text:
    "Define Attack threshold as 2 + number of <::manawave-round-token::>. " +
    "If neither Clan has more <::attack-counter::> than the Attack threshold, continue the Manawave. " +
    "Otherwise, if ONLY your Clan has more <::attack-counter::> than the Attack threshold, you win the game. " +
    "Otherwise, if your Clan has fewer <::population-slaughter-counter::> than the opposing Clan, you win the game. " +
    "Otherwise, continue the Manawave.",
  text2: "",
}

