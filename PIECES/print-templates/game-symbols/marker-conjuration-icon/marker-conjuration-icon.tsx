import _ from "lodash";
import { MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { createImgComponentFromMwMarkerType, createImgComponentFromTag } from "../../../../PIECES/icons";
import { MarkerConjurationIconDiv } from "./marker-conjuration-icon-styles";
import { RightArrowIcon } from "../arrow-icons";
import { OnZeroAmountBehavior } from "../marker-indicator/marker-indicator";


export interface IMarkerConjurationIconProps {
  markerManaCost: number;
  markerToConjure: MwMarkerType;
  $onZeroAmountBehavior: OnZeroAmountBehavior;
}


const SMALL_MARKER_ICON_SIZE = 10;
const SmallManaCounterIcon_MarkerIcon = () => createImgComponentFromTag('<::mana-counter::>', SMALL_MARKER_ICON_SIZE);


export const MarkerConjurationIcon = (props: IMarkerConjurationIconProps) => {

  const MarkerIcon = createImgComponentFromMwMarkerType(props.markerToConjure, SMALL_MARKER_ICON_SIZE);

  return (
    <MarkerConjurationIconDiv>
      <div>
        {_.range(props.markerManaCost).map((i) => (
          <SmallManaCounterIcon_MarkerIcon
            key={i}
          />
        ))}
          <RightArrowIcon size={SMALL_MARKER_ICON_SIZE} style={{marginLeft: 2}} />
        {MarkerIcon}
      </div>
    </MarkerConjurationIconDiv>
  )
}
