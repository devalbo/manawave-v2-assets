import _ from "lodash";
import { MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { createImgComponentFromMwMarkerType, createImgComponentFromRawSvg } from "../../../icons";
import { HorizontalIconsDiv, MarkerFlowIconDiv } from "./marker-flow-icon-styles";
import { UpArrowIcon } from "../arrow-icons";
import { ExpendedManaCounterSvg, ManaCounterSvg } from "@mw-assets/PIECES/assets/TokenSvgIcons";
import { MarkerFlowSource } from "../marker-flow-area/marker-flow-area";


export interface IMarkerFlowUpIconProps {
  source: MarkerFlowSource;
  markerManaCost: number;
  markerToConjure: MwMarkerType;
}


const SMALL_MARKER_ICON_SIZE = 12;
// const SmallManaCounterIcon_MarkerIcon = () => createImgComponentFromTag('<::mana-counter::>', SMALL_MARKER_ICON_SIZE);


export const MarkerFlowUpIcon = (props: IMarkerFlowUpIconProps) => {

  
  // const SourceIcon = () => {
  //   switch (props.source) {
  //     case 'from-stockpile':
  //       return createImgComponentFromRawSvg(StockpileIconSvg, SMALL_MARKER_ICON_SIZE);
  //     case 'from-conjuration':
  //       return createImgComponentFromRawSvg(ExpendedManaCounterSvg, SMALL_MARKER_ICON_SIZE);
  //     case 'from-tribe':
  //       return createImgComponentFromRawSvg(TribeIconSvg, SMALL_MARKER_ICON_SIZE);
  //     case 'from-manawave':
  //       return createImgComponentFromRawSvg(ManawaveRoundTokenSvg, SMALL_MARKER_ICON_SIZE);
  //     default:
  //       return props.source;
  //   }
  // }

  const SourceIcon = () => createImgComponentFromRawSvg(ManaCounterSvg, SMALL_MARKER_ICON_SIZE);
  const ExpdendedManaIcon = () => createImgComponentFromRawSvg(ExpendedManaCounterSvg, SMALL_MARKER_ICON_SIZE);
  // const SinkIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => 
  //   createImgComponentFromMwMarkerType(props.markerToConjure, SMALL_MARKER_ICON_SIZE);
  const SinkIcon = () => createImgComponentFromMwMarkerType(props.markerToConjure, SMALL_MARKER_ICON_SIZE);

  // const MarkerIcon = createImgComponentFromMwMarkerType(props.markerToConjure, SMALL_MARKER_ICON_SIZE);

  return (
    <MarkerFlowIconDiv>
      <SinkIcon />
      <HorizontalIconsDiv style={{marginTop: 2}}>
        {
          _.range(props.markerManaCost).map((_) => <ExpdendedManaIcon />)
        }
      </HorizontalIconsDiv>
      <div style={{ height: '0.0625in' }} />
      <UpArrowIcon
        size={SMALL_MARKER_ICON_SIZE}
      />
      <div style={{ height: '0.0625in' }} />
      <HorizontalIconsDiv>
        {
          _.range(props.markerManaCost).map((_) => <SourceIcon />)
        }
      </HorizontalIconsDiv>
    </MarkerFlowIconDiv>
  )
}
