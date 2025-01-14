import _ from "lodash";
import { ConjurationMarkersAreaDiv, NewMarkerConjurationAreaDiv } from "./marker-conjuration-area-styles";
import { IMarkerConjurationIconProps } from "../marker-conjuration-icon/marker-conjuration-icon";
import { AttackCounter_MarkerIndicator, ManaCounter_MarkerIndicator, PopulationIncreaseCounter_MarkerIndicator, ShieldCounter_MarkerIndicator } from "../marker-indicator/marker-indicator";
import { MarkerFlowUpIcon } from "../marker-flow-icon/marker-flow-up-icon";
import { MwMarkerType } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types";


interface IMarkerConjurationAreaProps extends IMarkerConjurationIconProps {
  // markerToConjure: MwMarkerType;
  // numAvailableMana: number;
  numConjuredMarkers: number;
  numManaSpent: number;
  // conversionRate: number;
  // backgroundColorHexCode: string;
  // textColorHexCode: string;
}


export const VerticalMarkerConjurationArea = (props: IMarkerConjurationAreaProps) => {

  const ConjuredMarker = () => {
    switch (props.markerToConjure) {
      case MwMarkerType.MwMarkerType_AttackCounter:
        return (
          <AttackCounter_MarkerIndicator
            quantity={props.numConjuredMarkers}
          />
        )
      case MwMarkerType.MwMarkerType_ShieldCounter:
        return (
          <ShieldCounter_MarkerIndicator
            quantity={props.numConjuredMarkers}
          />
        )
      case MwMarkerType.MwMarkerType_PopulationIncreaseCounter:
        return (
          <PopulationIncreaseCounter_MarkerIndicator
            quantity={props.numConjuredMarkers}
          />
        )
      default:
        return null;
    }
  }

  return (
    <NewMarkerConjurationAreaDiv>
      <MarkerFlowUpIcon
        source='from-conjuration'
        markerToConjure={props.markerToConjure}
        markerManaCost={props.markerManaCost}
      />
      <ConjurationMarkersAreaDiv>
        <ConjuredMarker />
        <div style={{ height: '0.0625in' }} />
        <ManaCounter_MarkerIndicator
          quantity={props.numManaSpent}
        />
      </ConjurationMarkersAreaDiv>
    </NewMarkerConjurationAreaDiv>
  )


  // return (
  //   <MarkerConjurationAreaDiv>
  //     <ManaCounter_MarkerView
  //       mode='show-stack'
  //       quantity={props.numManaSpent}
  //       $hideLabel={true}
  //     />
  //     <MarkerConjurationIcon
  //       {...props}
  //     />
  //   </MarkerConjurationAreaDiv>
  // )
}
