import _ from "lodash";
import { MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { createImgComponentFromMwMarkerType, createImgComponentFromRawSvg } from "../../../icons";
import { MarkerFlowIconDiv } from "./marker-flow-icon-styles";
import { RightArrowIcon } from "../arrow-icons";
import { ExpendedManaCounterSvg, ManawaveRoundTokenSvg, StockpileIconSvg, TribeIconSvg } from "@mw-assets/PIECES/assets/TokenSvgIcons";
import { MarkerFlowSource } from "../marker-flow-area/marker-flow-area";


export interface IMarkerFlowIconProps {
  source: MarkerFlowSource;
  markerManaCost: number;
  markerToConjure: MwMarkerType;
}


const SMALL_MARKER_ICON_SIZE = 12;
// const SmallManaCounterIcon_MarkerIcon = () => createImgComponentFromTag('<::mana-counter::>', SMALL_MARKER_ICON_SIZE);


export const MarkerFlowIcon = (props: IMarkerFlowIconProps) => {

  
  const SourceIcon = () => {
    switch (props.source) {
      case 'from-stockpile':
        return createImgComponentFromRawSvg(StockpileIconSvg, SMALL_MARKER_ICON_SIZE);
      case 'from-conjuration':
        return createImgComponentFromRawSvg(ExpendedManaCounterSvg, SMALL_MARKER_ICON_SIZE);
      case 'from-tribe':
        return createImgComponentFromRawSvg(TribeIconSvg, SMALL_MARKER_ICON_SIZE);
      case 'from-manawave':
        return createImgComponentFromRawSvg(ManawaveRoundTokenSvg, SMALL_MARKER_ICON_SIZE);
      default:
        return props.source;
    }
  }

  const SinkIcon = () => createImgComponentFromMwMarkerType(props.markerToConjure, SMALL_MARKER_ICON_SIZE);

  // const MarkerIcon = createImgComponentFromMwMarkerType(props.markerToConjure, SMALL_MARKER_ICON_SIZE);

  return (
    <MarkerFlowIconDiv>
      <div>
        <SourceIcon />
        <RightArrowIcon size={SMALL_MARKER_ICON_SIZE} style={{marginLeft: 2}} />
        <SinkIcon />
      </div>
    </MarkerFlowIconDiv>
  )
}
