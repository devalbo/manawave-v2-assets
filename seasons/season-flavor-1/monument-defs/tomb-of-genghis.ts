import { TotemMonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_FLAVOR_1_PBID } from "../../season-id-defs";
import { SeasonFlavor1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-flavor-1";
import { DEFENSE_TOTEM_DEF } from "../totems/sf1_defense";
import { MAGIC_TOTEM_DEF } from "../totems/sf1_magic";


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
    "Resolve: If COUNT(<::manawave-round-token::>) >= 2, count number of <::attack-counter::> on each adjacent Clan. " +
    "The Tribe of the Clan with with higher amount of <::attack-counter::> count wins. If tied, resume Manawave.",
};
