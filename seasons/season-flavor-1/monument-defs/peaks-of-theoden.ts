import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";
import { MAGIC_TOTEM_DEF } from "../totems/sf1_magic";
import { DEFENSE_TOTEM_DEF } from "../totems/sf1_defense";


export const PeaksOfTheodenData: TotemMonumentCard = {
  title: "Peaks of Theoden",
  monumentId: {
    seasonId: SEASON_FLAVOR_1_PBID,
    seasonMonumentCardId: SeasonFlavor1MonumentCardDefs.PeaksOfTheoden,
  },
  totem1Id: MAGIC_TOTEM_DEF.totemId,
  totem2Id: DEFENSE_TOTEM_DEF.totemId,
  text:
    "Resolve: Forced draw.",
}
