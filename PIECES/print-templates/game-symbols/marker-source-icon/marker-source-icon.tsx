import _ from "lodash";
import { createImgComponentFromRawSvg } from "../../../icons";
import { RightArrowIcon } from "../arrow-icons";
import { ExpendedManaCounterSvg, ManaCounterSvg, ManawaveRoundTokenSvg, StockpileIconSvg, TribeIconSvg } from "@mw-assets/PIECES/assets/TokenSvgIcons";
import { MarkerFlowSource } from "../marker-flow-area/marker-flow-area";
import { MarkerSourceIconDiv } from "./marker-source-icon-styles";


export interface IMarkerSourceIconProps {
  source: MarkerFlowSource;
  sourceIconCount: number;
  // markerToConjure: MwMarkerType;
}


const SMALL_MARKER_ICON_SIZE = 12;
// const SmallManaCounterIcon_MarkerIcon = () => createImgComponentFromTag('<::mana-counter::>', SMALL_MARKER_ICON_SIZE);


export const MarkerSourceIcon = (props: IMarkerSourceIconProps) => {

  
  const SourceIcon = () => {
    switch (props.source) {
      case 'from-stockpile':
        return createImgComponentFromRawSvg(StockpileIconSvg, SMALL_MARKER_ICON_SIZE);
      case 'from-conjuration':
        return createImgComponentFromRawSvg(ManaCounterSvg, SMALL_MARKER_ICON_SIZE);
      case 'from-expended-mana':
        return createImgComponentFromRawSvg(ExpendedManaCounterSvg, SMALL_MARKER_ICON_SIZE);
      case 'from-tribe':
        return createImgComponentFromRawSvg(TribeIconSvg, SMALL_MARKER_ICON_SIZE);
      case 'from-manawave':
        return createImgComponentFromRawSvg(ManawaveRoundTokenSvg, SMALL_MARKER_ICON_SIZE);
      default:
        return props.source;
    }
  }

  // const SinkIcon = () => createImgComponentFromMwMarkerType(props.markerToConjure, SMALL_MARKER_ICON_SIZE);

  // const MarkerIcon = createImgComponentFromMwMarkerType(props.markerToConjure, SMALL_MARKER_ICON_SIZE);

  return (
    <MarkerSourceIconDiv>
      <div>
        {_.range(props.sourceIconCount).map(_i => (
          <SourceIcon />
        ))}
        <RightArrowIcon size={SMALL_MARKER_ICON_SIZE} style={{marginLeft: 2}} />
        {/* <SinkIcon /> */}
      </div>
    </MarkerSourceIconDiv>
  )
}
