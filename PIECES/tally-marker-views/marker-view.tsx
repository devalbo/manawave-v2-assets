/* eslint-disable react/jsx-pascal-case */
import {
  HEX_COLOR_CODE_ATTACK_COUNTER,
  HEX_COLOR_CODE_ATTACK_COUNTER_TEXT,
  HEX_COLOR_CODE_MANA_COUNTER,
  HEX_COLOR_CODE_MANA_COUNTER_TEXT,
  HEX_COLOR_CODE_MANALITH_CLAIM_COUNTER,
  HEX_COLOR_CODE_MANALITH_CLAIM_COUNTER_TEXT,
  HEX_COLOR_CODE_MANALITH_TOKEN,
  HEX_COLOR_CODE_MANALITH_TOKEN_TEXT,
  HEX_COLOR_CODE_MANAWAVE_ROUND_TOKEN,
  HEX_COLOR_CODE_MANAWAVE_ROUND_TOKEN_TEXT,
  HEX_COLOR_CODE_POPULATION_INCREASE_COUNTER,
  HEX_COLOR_CODE_POPULATION_INCREASE_COUNTER_TEXT,
  HEX_COLOR_CODE_POPULATION_SACRIFICE_COUNTER,
  HEX_COLOR_CODE_POPULATION_SACRIFICE_COUNTER_TEXT,
  HEX_COLOR_CODE_POPULATION_SLAUGHTER_COUNTER,
  HEX_COLOR_CODE_POPULATION_SLAUGHTER_COUNTER_TEXT,
  HEX_COLOR_CODE_POPULATION_TOKEN,
  HEX_COLOR_CODE_POPULATION_TOKEN_TEXT,
  HEX_COLOR_CODE_SHIELD_COUNTER,
  HEX_COLOR_CODE_SHIELD_COUNTER_TEXT,
  HEX_COLOR_CODE_SOULSTAIN_TOKEN,
  HEX_COLOR_CODE_SOULSTAIN_TOKEN_TEXT
} from "../../PIECES/constants";
import {
  AttackCounterIcon_MarkerIcon,
  ManaCounterIcon_MarkerIcon,
  ManalithClaimCounterIcon_MarkerIcon,
  ManalithTokenIcon_MarkerIcon,
  ManawaveRoundTokenIcon_MarkerIcon,
  PopulationIncreaseCounterIcon_MarkerIcon,
  PopulationSacrificeCounterIcon_MarkerIcon,
  PopulationSlaughterCounterIcon_MarkerIcon,
  PopulationTokenIcon_MarkerIcon,
  ShieldCounterIcon_MarkerIcon,
  SoulstainTokenIcon_MarkerIcon
} from "./marker-icon";
import {
  MarkerViewDiv,
  MarkerViewIconDiv,
  MarkerViewTextDiv,
  TooltipContainerDiv,
  TooltipTextDiv,
  TooltipWrapperDiv
} from "./marker-view-styles";
import { VerticalMarkerView } from "./vertical-marker-view";


export type MarkerViewMode = 'show-stack' | 'add-to-stack' | 'remove-from-stack'
export type OnZeroAmountBehavior = 'do-nothing' | 'hide' | 'dim'


export interface IMarkerViewProps {
  quantity: number
  mode: MarkerViewMode
  $onZeroAmountLabel?: string
  $onZeroAmountBehavior?: OnZeroAmountBehavior
  $hideZeroAmounts?: boolean
  $hideLabel?: boolean
  $tooltipText?: string
  isVertical?: boolean
}

export interface IInternalMarkerViewProps extends IMarkerViewProps {
  $label: string
  icon: JSX.Element
  $backgroundColorHexCode: string
  $textColorHexCode: string
}


const MwMarkerViewContent = (props: IInternalMarkerViewProps) => {
  const label = (props.$hideLabel || props.isVertical) ? "" : props.$label;

  const getQuantityLabel = () => {
    if (props.quantity === 0 && props.$onZeroAmountLabel) {
      return props.$onZeroAmountLabel;
    }

    const quantity = Math.abs(props.quantity);

    switch (props.mode) {
      case 'show-stack':
        return `x${quantity} ${label}`;
      case 'add-to-stack':
        return `+${quantity} ${label}`;
      case 'remove-from-stack':
        return `-${quantity} ${label}`;
    }
  }

  const viewLabel = getQuantityLabel();

  const opacity = (props.quantity === 0 && props.$onZeroAmountBehavior === 'dim') ? 0.25 : 1;

  if (props.isVertical) {
    return (
      <VerticalMarkerView
        {...props}
        opacity={opacity}
        icon={props.icon}
        viewLabel={viewLabel}
      />
    )
  }

  return (    
    <div style={{ opacity }}>
      <MarkerViewDiv
        {...props}
      >
        <MarkerViewIconDiv
          {...props}
          >
          {props.icon}
        </MarkerViewIconDiv>
        <MarkerViewTextDiv
          {...props}
        >
        {viewLabel}
      </MarkerViewTextDiv>
    </MarkerViewDiv>
    </div>
  )
}


export const MwMarkerView = (props: IInternalMarkerViewProps) => {
  if (props.$hideZeroAmounts && props.quantity < 1) {
    return null;
  }

  if (!props.$tooltipText || props.$hideLabel) {
    return <MwMarkerViewContent {...props} />;
  }

  
  return (
    <TooltipContainerDiv>
      <TooltipWrapperDiv>
        <MwMarkerViewContent {...props} />
        <TooltipTextDiv>
          {props.$tooltipText}
        </TooltipTextDiv>
      </TooltipWrapperDiv>
    </TooltipContainerDiv>
  )
}


export const SoulstainToken_MarkerView = (props: IMarkerViewProps) => (
  <MwMarkerView
    {...props}
    $label="Soulstain"
    icon={<SoulstainTokenIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_SOULSTAIN_TOKEN}
    $textColorHexCode={HEX_COLOR_CODE_SOULSTAIN_TOKEN_TEXT}
    />
)


export const PopulationToken_MarkerView = (props: IMarkerViewProps) => (
  <MwMarkerView
    {...props}
    $label="Population"
    icon={<PopulationTokenIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_POPULATION_TOKEN}
    $textColorHexCode={HEX_COLOR_CODE_POPULATION_TOKEN_TEXT}
    />
)


export const PopulationIncreaseCounter_MarkerView = (props: IMarkerViewProps) => (
  <MwMarkerView
    {...props}
    $label="Population Increase"
    icon={<PopulationIncreaseCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_POPULATION_INCREASE_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_POPULATION_INCREASE_COUNTER_TEXT}
    />
)


export const ManalithToken_MarkerView = (props: IMarkerViewProps) => (
  <MwMarkerView
    {...props}
    $label="Manalith"
    icon={<ManalithTokenIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_MANALITH_TOKEN}
    $textColorHexCode={HEX_COLOR_CODE_MANALITH_TOKEN_TEXT}
    />
)


export const ManalithClaimCounter_MarkerView = (props: IMarkerViewProps) => (
  <MwMarkerView
    {...props}
    $label="Manalith Claims"
    icon={<ManalithClaimCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_MANALITH_CLAIM_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_MANALITH_CLAIM_COUNTER_TEXT}
    />
)


export const ManaCounter_MarkerView = (props: IMarkerViewProps) => (
  <MwMarkerView
    {...props}
    $label="Mana"
    icon={<ManaCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_MANA_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_MANA_COUNTER_TEXT}
    />
)


export const AttackCounter_MarkerView = (props: IMarkerViewProps) => (
  <MwMarkerView
    {...props}
    $label="Attack"
    icon={<AttackCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_ATTACK_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_ATTACK_COUNTER_TEXT}
    />
)


export const ShieldCounter_MarkerView = (props: IMarkerViewProps) => (
  <MwMarkerView
    {...props}
    $label="Shield"
    icon={<ShieldCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_SHIELD_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_SHIELD_COUNTER_TEXT}
    />
)


export const PopulationSacrificeCounter_MarkerView = (props: IMarkerViewProps) => (
  <MwMarkerView
    {...props}
    $label="Population Sacrifice"
    icon={<PopulationSacrificeCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_POPULATION_SACRIFICE_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_POPULATION_SACRIFICE_COUNTER_TEXT}
    />
)


export const PopulationSlaughterCounter_MarkerView = (props: IMarkerViewProps) => (
  <MwMarkerView
    {...props}
    $label="Population Slaughter"
    icon={<PopulationSlaughterCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_POPULATION_SLAUGHTER_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_POPULATION_SLAUGHTER_COUNTER_TEXT}
    />
)


export const ManawaveRoundToken_MarkerView = (props: IMarkerViewProps) => (
  <MwMarkerView
    {...props}
    $label="Manawave Round"
    icon={<ManawaveRoundTokenIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_MANAWAVE_ROUND_TOKEN}
    $textColorHexCode={HEX_COLOR_CODE_MANAWAVE_ROUND_TOKEN_TEXT}
    />
)
