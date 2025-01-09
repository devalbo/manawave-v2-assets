/* eslint-disable react/jsx-pascal-case */
import { MwMarkerType } from "@mw-protobufs/manawave-types"
import { AttackCounter_MarkerView, IMarkerViewProps, ManaCounter_MarkerView, ManalithClaimCounter_MarkerView, ManalithToken_MarkerView, PopulationIncreaseCounter_MarkerView, PopulationSacrificeCounter_MarkerView, PopulationSlaughterCounter_MarkerView, PopulationToken_MarkerView, ShieldCounter_MarkerView, SoulstainToken_MarkerView } from "./marker-view"


export interface IMarkerTypeViewProps extends IMarkerViewProps {
  $markerType: MwMarkerType
}


export const MarkerTypeView = (props: IMarkerTypeViewProps) => {


  const getTooltipText = (): string => {
    switch (props.$markerType) {
      case MwMarkerType.MwMarkerType_ManalithToken:
        return `${props.quantity} Manalith tokens`;
      case MwMarkerType.MwMarkerType_PopulationToken:
        return `${props.quantity} Population tokens`;
      case MwMarkerType.MwMarkerType_SoulstainToken:
        return `${props.quantity} Soulstain tokens`;
      case MwMarkerType.MwMarkerType_AttackCounter:
        return `${props.quantity} Attack counters`;
      case MwMarkerType.MwMarkerType_ShieldCounter:
        return `${props.quantity} Shield counters`;
      case MwMarkerType.MwMarkerType_ManaCounter:
        return `${props.quantity} Mana counters`;
      case MwMarkerType.MwMarkerType_PopulationIncreaseCounter:
        return `${props.quantity} Population increase counters`;
      case MwMarkerType.MwMarkerType_PopulationSacrificeCounter:
        return `${props.quantity} Population sacrifice counters`;
      case MwMarkerType.MwMarkerType_ManalithClaimCounter:
        return `${props.quantity} Manalith claim counters`;
      case MwMarkerType.MwMarkerType_PopulationSlaughterCounter:
        return `${props.quantity} Population slaughter counters`;

      default:
        return "";
    } 
  }

  const tooltipText = getTooltipText();

  const viewProps: IMarkerViewProps = {
    ...props,
    $hideLabel: true,
    $tooltipText: tooltipText,
  }

  switch (props.$markerType) {
    case MwMarkerType.MwMarkerType_ManalithToken:
      return <ManalithToken_MarkerView {...viewProps} />
    case MwMarkerType.MwMarkerType_PopulationToken:
      return <PopulationToken_MarkerView {...viewProps} />
    case MwMarkerType.MwMarkerType_SoulstainToken:
      return <SoulstainToken_MarkerView {...viewProps} />

    case MwMarkerType.MwMarkerType_AttackCounter:
      return <AttackCounter_MarkerView {...viewProps} />
    case MwMarkerType.MwMarkerType_ShieldCounter:
      return <ShieldCounter_MarkerView {...viewProps} />
    case MwMarkerType.MwMarkerType_ManaCounter:
      return <ManaCounter_MarkerView {...viewProps} />
    case MwMarkerType.MwMarkerType_PopulationIncreaseCounter:
      return <PopulationIncreaseCounter_MarkerView {...viewProps} />
    case MwMarkerType.MwMarkerType_PopulationSacrificeCounter:
      return <PopulationSacrificeCounter_MarkerView {...viewProps} />
    case MwMarkerType.MwMarkerType_ManalithClaimCounter:
      return <ManalithClaimCounter_MarkerView {...viewProps} />
    case MwMarkerType.MwMarkerType_PopulationSlaughterCounter:
      return <PopulationSlaughterCounter_MarkerView {...viewProps} />

    default:
      return null;
  }
}
