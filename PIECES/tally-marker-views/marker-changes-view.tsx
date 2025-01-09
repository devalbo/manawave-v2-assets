import { HEX_COLOR_CODE_ATTACK_COUNTER, HEX_COLOR_CODE_ATTACK_COUNTER_TEXT, HEX_COLOR_CODE_MANA_COUNTER, HEX_COLOR_CODE_MANA_COUNTER_TEXT, HEX_COLOR_CODE_POPULATION_INCREASE_COUNTER, HEX_COLOR_CODE_POPULATION_INCREASE_COUNTER_TEXT, HEX_COLOR_CODE_POPULATION_SACRIFICE_COUNTER_TEXT, HEX_COLOR_CODE_POPULATION_SACRIFICE_COUNTER, HEX_COLOR_CODE_SHIELD_COUNTER, HEX_COLOR_CODE_SHIELD_COUNTER_TEXT, HEX_COLOR_CODE_SOULSTAIN_TOKEN_TEXT, HEX_COLOR_CODE_SOULSTAIN_TOKEN } from "@mw-assets/PIECES/constants";
import { MarkerViewDiv, MarkerViewIconDiv, MarkerViewLeftTextDiv, TooltipTextDiv } from "./marker-view-styles";
import { TooltipWrapperDiv } from "./marker-view-styles";
import { TooltipContainerDiv } from "./marker-view-styles";
import { AttackCounterIcon_MarkerIcon, ManaCounterIcon_MarkerIcon, PopulationIncreaseCounterIcon_MarkerIcon, PopulationSacrificeCounterIcon_MarkerIcon, ShieldCounterIcon_MarkerIcon, SoulstainTokenIcon_MarkerIcon } from "./marker-icon";


export interface ICounterChangesViewProps {
  quantity: number
  $hideZeroAmounts?: boolean
  $hideLabel?: boolean
  $tooltipText?: string
}

interface IInternalCounterChangesViewProps extends ICounterChangesViewProps {
  $label: string
  icon: JSX.Element
  $backgroundColorHexCode: string
  $textColorHexCode: string
}

const MwCounterChangesViewContent = (props: IInternalCounterChangesViewProps) => {
  const label = props.$hideLabel ? "" : props.$label;

  return (
    <MarkerViewDiv
      {...props}
      >
      <MarkerViewLeftTextDiv
        {...props}
        >
        +{props.quantity} {label}
      </MarkerViewLeftTextDiv>
      <MarkerViewIconDiv
        {...props}
        >
        {props.icon}
      </MarkerViewIconDiv>
    </MarkerViewDiv>
  )
}


export const MwCounterChangesView = (props: IInternalCounterChangesViewProps) => {
  if (props.$hideZeroAmounts && props.quantity < 1) {
    return null;
  }

  if (!props.$tooltipText || props.$hideLabel) {
    return <MwCounterChangesViewContent {...props} />;
  }

  
  return (
    <TooltipContainerDiv>
      <TooltipWrapperDiv>
        <MwCounterChangesViewContent {...props} />
        <TooltipTextDiv>
          {props.$tooltipText}
        </TooltipTextDiv>
      </TooltipWrapperDiv>
    </TooltipContainerDiv>
  )
}


export const AttackCounter_ChangesView = (props: ICounterChangesViewProps) => (
  <MwCounterChangesView
    {...props}
    $label=""
    icon={<AttackCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_ATTACK_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_ATTACK_COUNTER_TEXT}
    $hideZeroAmounts={true}
    />
)


export const ShieldCounter_ChangesView = (props: ICounterChangesViewProps) => (
  <MwCounterChangesView
    {...props}
    $label=""
    icon={<ShieldCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_SHIELD_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_SHIELD_COUNTER_TEXT}
    $hideZeroAmounts={true}
    />
)


export const ManaCounter_ChangesView = (props: ICounterChangesViewProps) => (
  <MwCounterChangesView
    {...props}
    $label=""
    icon={<ManaCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_MANA_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_MANA_COUNTER_TEXT}
    $hideZeroAmounts={true}
    />
)


export const PopulationIncreaseCounter_ChangesView = (props: ICounterChangesViewProps) => (
  <MwCounterChangesView
    {...props}
    $label=""
    icon={<PopulationIncreaseCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_POPULATION_INCREASE_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_POPULATION_INCREASE_COUNTER_TEXT}
    $hideZeroAmounts={true}
    />
)


export const PopulationSacrificeCounter_ChangesView = (props: ICounterChangesViewProps) => (
  <MwCounterChangesView
    {...props}
    $label=""
    icon={<PopulationSacrificeCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_POPULATION_SACRIFICE_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_POPULATION_SACRIFICE_COUNTER_TEXT}
    $hideZeroAmounts={true}
    />
)

export const SoulstainToken_ChangesView = (props: ICounterChangesViewProps) => (
  <MwCounterChangesView
    {...props}
    $label=""
    icon={<SoulstainTokenIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_SOULSTAIN_TOKEN}
    $textColorHexCode={HEX_COLOR_CODE_SOULSTAIN_TOKEN_TEXT}
    />
)