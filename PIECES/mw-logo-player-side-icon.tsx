import { PlayerSide } from "../../mw-v2-game-engine/gameboard/game-play-data";
import { PlayerId } from "./constants";
import { MW_DOC_SITE_PREFIX } from "./constants";


export const MwLogoPlayerSideIcon = (props: {
  playerSide: PlayerSide | PlayerId
  size: number
  style?: React.CSSProperties
}) => {

  const playerIdImgSrc = props.playerSide === 'OPT' ? 
    `${MW_DOC_SITE_PREFIX}/img/mw_logo_black_top.svg` :
    `${MW_DOC_SITE_PREFIX}/img/mw_logo_white_top.svg`;

    return (
      <div style={props.style}>
        <img src={playerIdImgSrc} height={props.size} width={props.size} />
      </div>
    )
}


export const OptMwLogoIcon = (props: {
  size: number
}) => {
  return (
    <MwLogoPlayerSideIcon playerSide="OPT" size={props.size} />
  )
}


export const OsbMwLogoIcon = (props: {
  size: number
}) => {
  return (
    <MwLogoPlayerSideIcon playerSide="OSB" size={props.size} />
  )
}
