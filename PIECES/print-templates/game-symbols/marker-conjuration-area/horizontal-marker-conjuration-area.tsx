import _ from "lodash";
import { HorizontalConjurationMarkersAreaDiv, NewMarkerConjurationAreaDiv } from "./marker-conjuration-area-styles";
import { IMarkerConjurationIconProps } from "../marker-conjuration-icon/marker-conjuration-icon";
import { AttackCounter_MarkerIndicator, ManaCounter_MarkerIndicator, ManalithToken_MarkerIndicator, PopulationIncreaseCounter_MarkerIndicator, ShieldCounter_MarkerIndicator } from "../marker-indicator/marker-indicator";
import { MwMarkerType } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types";
import { MarkerFlowIcon } from "../marker-flow-icon/marker-flow-icon";


interface IMarkerConjurationAreaProps extends IMarkerConjurationIconProps {
  numConjuredMarkers: number;
  numManaSpent: number;

}


export const HorizontalMarkerConjurationArea = (props: IMarkerConjurationAreaProps) => {

  const ConjuredMarker = () => {
    switch (props.markerToConjure) {
      case MwMarkerType.MwMarkerType_AttackCounter:
        return (
          <AttackCounter_MarkerIndicator
            quantity={props.numConjuredMarkers}
            $onZeroAmountBehavior={props.$onZeroAmountBehavior}
          />
        )
      case MwMarkerType.MwMarkerType_ShieldCounter:
        return (
          <ShieldCounter_MarkerIndicator
            quantity={props.numConjuredMarkers}
            $onZeroAmountBehavior={props.$onZeroAmountBehavior}
          />
        )
      case MwMarkerType.MwMarkerType_PopulationIncreaseCounter:
        return (
          <PopulationIncreaseCounter_MarkerIndicator
            quantity={props.numConjuredMarkers}
            $onZeroAmountBehavior={props.$onZeroAmountBehavior}
          />
        )
      case MwMarkerType.MwMarkerType_ManalithToken:
        return (
          <ManalithToken_MarkerIndicator
            quantity={props.numConjuredMarkers}
            $onZeroAmountBehavior={props.$onZeroAmountBehavior}
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
          $onZeroAmountBehavior={props.$onZeroAmountBehavior}
        />
        <ConjuredMarker />
      </HorizontalConjurationMarkersAreaDiv>
    </NewMarkerConjurationAreaDiv>
  )
}
