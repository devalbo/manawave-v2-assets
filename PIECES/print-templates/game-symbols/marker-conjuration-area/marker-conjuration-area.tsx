import _ from "lodash";
import { MarkerConjurationAreaDiv } from "./marker-conjuration-area-styles";
import { IMarkerConjurationIconProps, MarkerConjurationIcon } from "../marker-conjuration-icon/marker-conjuration-icon";
import { ManaCounter_MarkerView } from "../../../tally-marker-views/marker-view";


interface IMarkerConjurationAreaProps extends IMarkerConjurationIconProps {
  numAvailableMana: number;
  numManaSpent: number;
}


export const MarkerConjurationArea = (props: IMarkerConjurationAreaProps) => {

  return (
    <MarkerConjurationAreaDiv>
      <ManaCounter_MarkerView
        mode='show-stack'
        quantity={props.numManaSpent}
        $hideLabel={true}
      />
      <MarkerConjurationIcon
        {...props}
      />
    </MarkerConjurationAreaDiv>
  )
}
