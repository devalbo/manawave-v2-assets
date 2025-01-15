import _ from "lodash";
import { MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { createImgComponentFromMwMarkerType, createImgComponentFromRawSvg } from "../../../icons";
import { HorizontalIconsDiv, MarkerFlowUpIconDiv } from "./marker-flow-icon-styles";
import { UpArrowIcon } from "../arrow-icons";
import { ExpendedManaCounterSvg, ManaCounterSvg } from "@mw-assets/PIECES/assets/TokenSvgIcons";
import { MarkerFlowSource } from "../marker-flow-area/marker-flow-area";


export interface IMarkerFlowUpIconProps {
  source: MarkerFlowSource;
  markerManaCost: number;
  markerToConjure: MwMarkerType;
}


const SMALL_MARKER_ICON_SIZE = 12;


export const MarkerFlowUpIcon = (props: IMarkerFlowUpIconProps) => {

  const SourceIcon = () => createImgComponentFromRawSvg(ManaCounterSvg, SMALL_MARKER_ICON_SIZE);
  const ExpdendedManaIcon = () => createImgComponentFromRawSvg(ExpendedManaCounterSvg, SMALL_MARKER_ICON_SIZE);
  const SinkIcon = () => createImgComponentFromMwMarkerType(props.markerToConjure, SMALL_MARKER_ICON_SIZE);


  return (
    <MarkerFlowUpIconDiv>
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
    </MarkerFlowUpIconDiv>
  )
}
