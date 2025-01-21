import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";
import { DEFENSE_TOTEM_DEF } from "../totems/sf1_turtle";
import { MAGIC_TOTEM_DEF } from "../totems/sf1_spirits";


export const TombOfKolrathData: TotemMonumentCard = {
  title: "Tomb of Kolrath",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.TombOfGenghis,
  },
  totem1Id: MAGIC_TOTEM_DEF.totemId,
  totem2Id: DEFENSE_TOTEM_DEF.totemId,
  isDefault: true,
  text:
    "Define Attack threshold as 2 + number of <::manawave-round-token::>. " +
    "If neither Clan has more <::attack-counter::> than the Attack threshold, continue the Manawave. " +
    "Otherwise, if ONLY your Clan has more <::attack-counter::> than the Attack threshold, you win the game. " +
    "Otherwise, if your Clan has more <::manalith-token::> than the opposing Clan, you win the game. " +
    "Otherwise, continue the Manawave.",
  text2: "",
};
