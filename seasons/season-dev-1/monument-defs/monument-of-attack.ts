import { SeasonDev1MonumentCardDefs } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-season-dev-1";
import { MonumentCard } from "../../../type-defs/monument-defs";
import { SEASON_DEV_1_PBID } from "../../season-id-defs";


export const MonumentOfAttackData: MonumentCard = {
  title: "Monument of Attack",
  monumentId: {
    seasonId: SEASON_DEV_1_PBID,
    seasonMonumentCardId: SeasonDev1MonumentCardDefs.SeasonDev1MonumentOfAttack,
  },
  isDefault: true,
  text:
    "Resolve: If COUNT(<::manawave-round-token::>) >= 2, count number of <::attack-counter::> on each adjacent Clan. " +
    "The Tribe of the Clan with with higher amount of <::attack-counter::> count wins. If tied, resume Manawave.",
  text2: "",
};
