/* eslint-disable react/jsx-pascal-case */
import {
  HEX_COLOR_CODE_MANAWAVE_ROUND_TOKEN,
  HEX_COLOR_CODE_MANAWAVE_ROUND_TOKEN_TEXT} from "../../../constants";
import {
  ModeMarkerDiv,
  ModeMarkerIconDiv,
  TooltipContainerDiv,
  TooltipTextDiv,
  TooltipWrapperDiv
} from "./mode-marker-styles";
import { createImgComponentFromRawSvg } from "@mw-assets/PIECES/icons";
import { IMarkerIndicatorProps, MwMarkerIndicator } from "../marker-indicator/marker-indicator";
import { ModeConstellationIconMode1Svg, ModeConstellationIconMode4Svg, ModeConstellationIconMode2Svg, ModeConstellationIconMode3Svg, ModeConstellationIconBlankSvg } from "@mw-assets/PIECES/assets/TokenSvgIcons";


export type ModeMarkerModeIndex = 'blank' | '1' | '2' | '3' | '4';

export interface IModeMarkerProps {
  modeIndex: ModeMarkerModeIndex
  renderMode: 'print' | 'interactive'
  $tooltipText?: string
}


const MwModeMarkerContent = (props: IModeMarkerProps) => {

  const opacity = 1;

  const getModeSvg = (modeIndex: ModeMarkerModeIndex) => {
    switch (modeIndex) {
      case '1': return ModeConstellationIconMode1Svg;
      case '2': return ModeConstellationIconMode2Svg;
      case '3': return ModeConstellationIconMode3Svg;
      case '4': return ModeConstellationIconMode4Svg;
      case 'blank': return ModeConstellationIconBlankSvg;
    }
  }

  const modeSvg = getModeSvg(props.modeIndex);

  const icon = createImgComponentFromRawSvg(modeSvg, 50);

  return (    
    <ModeMarkerDiv
      {...props}
      style={{ opacity }}
    >
      <ModeMarkerIconDiv
        {...props}
      >
        {icon}
      </ModeMarkerIconDiv>
    </ModeMarkerDiv>
  )
}


export const MwModeMarker = (props: IModeMarkerProps) => {

  if (!props.$tooltipText) {
    return <MwModeMarkerContent {...props} />;
  }

  
  return (
    <TooltipContainerDiv>
      <TooltipWrapperDiv>
        <MwModeMarkerContent {...props} />
        <TooltipTextDiv>
          {props.$tooltipText}
        </TooltipTextDiv>
      </TooltipWrapperDiv>
    </TooltipContainerDiv>
  )
}


export const ManawaveRoundToken_MarkerIndicator = (props: IMarkerIndicatorProps) => (
  <MwMarkerIndicator
    {...props}
    // $label="Manawave Round"
    // icon={<ManawaveRoundTokenIcon_MarkerIcon />}
    markerType='<::manawave-round-token::>'
    $backgroundColorHexCode={HEX_COLOR_CODE_MANAWAVE_ROUND_TOKEN}
    $textColorHexCode={HEX_COLOR_CODE_MANAWAVE_ROUND_TOKEN_TEXT}
    />
)
