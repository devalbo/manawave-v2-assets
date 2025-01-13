import { MarkerFlowAreaDiv } from "./marker-flow-area-styles";
import { MwMarkerType } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types";
import { MarkerFlowIcon } from "../marker-flow-icon/marker-flow-icon";
import { MarkerTypeView } from "@mw-assets/PIECES/tally-marker-views/marker-type-view";
import { MarkerSourceIcon } from "../marker-source-icon/marker-source-icon";
import { AttackCounter_MarkerIndicator } from "../marker-indicator/marker-indicator";


export type MarkerFlowSource = 'from-manawave' | 'from-stockpile' | 'from-conjuration' | 'from-tribe' | 'from-expended-mana';


interface IMarkerFlowAreaProps {
  source: MarkerFlowSource;
  sinkMarkerType: MwMarkerType;
}

// const SMALL_MARKER_ICON_SIZE = 12;

export const MarkerFlowArea = (props: IMarkerFlowAreaProps) => {

  // const SourceIcon = () => {
  //   switch (props.source) {
  //     case 'from-stockpile':
  //       return createImgComponentFromRawSvg(StockpileIconSvg, SMALL_MARKER_ICON_SIZE);
  //     case 'from-conjuration':
  //       return createImgComponentFromRawSvg(ExpendedManaCounterSvg, SMALL_MARKER_ICON_SIZE);
  //     case 'from-tribe':
  //       return createImgComponentFromRawSvg(TribeIconSvg, SMALL_MARKER_ICON_SIZE);
  //     default:
  //       return props.source;
  //   }
  // }

  // const SinkIcon = () => createImgComponentFromMwMarkerType(props.sinkMarkerType, SMALL_MARKER_ICON_SIZE);

  return (
    <MarkerFlowAreaDiv>
      {/* <MarkerSourceIcon
        source='from-stockpile'
        markerManaCost={0}
        markerToConjure={MwMarkerType.MwMarkerType_AttackCounter}
      />
      <AttackCounter_MarkerIndicator
        quantity={0}
        $onZeroAmountBehavior='show-stockpile-to-marker-icon'
      /> */}
      <MarkerTypeView
        $markerType={props.sinkMarkerType}
        $hideLabel={true}
        quantity={2}
        mode='show-stack'
      />
      <MarkerFlowIcon
        source={props.source}
        markerManaCost={1}
        markerToConjure={props.sinkMarkerType}
      />
    </MarkerFlowAreaDiv>
  )
}
