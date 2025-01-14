import _ from "lodash";
import { ConjurationMarkersAreaDiv, HorizontalConjurationMarkersAreaDiv, NewMarkerConjurationAreaDiv } from "./marker-conjuration-area-styles";
import { IMarkerConjurationIconProps } from "../marker-conjuration-icon/marker-conjuration-icon";
import { AttackCounter_MarkerIndicator, ManaCounter_MarkerIndicator, ManalithToken_MarkerIndicator, PopulationIncreaseCounter_MarkerIndicator, ShieldCounter_MarkerIndicator } from "../marker-indicator/marker-indicator";
import { MarkerFlowUpIcon } from "../marker-flow-icon/marker-flow-up-icon";
import { MwMarkerType } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types";
import { MarkerFlowIcon } from "../marker-flow-icon/marker-flow-icon";


interface IMarkerConjurationAreaProps extends IMarkerConjurationIconProps {
  // markerToConjure: MwMarkerType;
  // numAvailableMana: number;
  numConjuredMarkers: number;
  numManaSpent: number;
  // conversionRate: number;
  // backgroundColorHexCode: string;
  // textColorHexCode: string;
}


export const HorizontalMarkerConjurationArea = (props: IMarkerConjurationAreaProps) => {

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
      case MwMarkerType.MwMarkerType_ManalithToken:
        return (
          <ManalithToken_MarkerIndicator
            quantity={props.numConjuredMarkers}
          />
        )
      default:
        return null;
    }
  }

  return (
    <NewMarkerConjurationAreaDiv>
      <MarkerFlowIcon
        source='from-conjuration'
        markerToConjure={props.markerToConjure}
        markerManaCost={props.markerManaCost}
      />
      <HorizontalConjurationMarkersAreaDiv>
        <ManaCounter_MarkerIndicator
          quantity={props.numManaSpent}
        />
        {/* <div style={{ width: '0.25in' }} /> */}
        <ConjuredMarker />
      </HorizontalConjurationMarkersAreaDiv>
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
