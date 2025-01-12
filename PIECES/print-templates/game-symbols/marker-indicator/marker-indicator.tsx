/* eslint-disable react/jsx-pascal-case */
import { TokenCounterTypeTags } from "@mw-assets/PIECES/token-counter-icons";
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
} from "../../../constants";
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
} from "./marker-indicator-icon";
import {
  MarkerIndicatorDiv,
  MarkerIndicatorIconDiv,
  TooltipContainerDiv,
  TooltipTextDiv,
  TooltipWrapperDiv
} from "./marker-indicator-styles";
import { createImgComponentFromTag } from "@mw-assets/PIECES/icons";
import { MarkerFlowIcon } from "../marker-flow-icon/marker-flow-icon";
import { mapClanCardMarkerTypeToMwMarkerType, mapTokenCounterTypeTagToMwMarkerType } from "@mw-assets/PIECES/tally-marker-views/marker-utils";
import { MarkerConjurationIcon } from "../marker-conjuration-icon/marker-conjuration-icon";


export type MarkerIndicatorMode = 'show-stack' | 'add-to-stack' | 'remove-from-stack'
export type OnZeroAmountBehavior = 'do-nothing' |
  'dim' |
  'show-stockpile-to-marker-icon' |
  'show-expended-mana-to-marker-icon' |
  'show-mana-conjuration-to-marker-icon' |
  'show-tribe-to-clan-marker-stockpile-icon'


export interface IMarkerIndicatorProps {
  quantity: number
  // mode: MarkerIndicatorMode
  // $onZeroAmountLabel?: string
  $onZeroAmountBehavior?: OnZeroAmountBehavior
  // $hideZeroAmounts?: boolean
  // $hideLabel?: boolean
  $tooltipText?: string
  // isVertical?: boolean
}

export interface IInternalMarkerIndicatorProps extends IMarkerIndicatorProps {
  // $label: string
  // icon: JSX.Element
  markerType: TokenCounterTypeTags
  // markerSize: number
  $backgroundColorHexCode: string
  $textColorHexCode: string
}


const MwMarkerIndicatorContent = (props: IInternalMarkerIndicatorProps) => {
  // const label = props.$hideLabel ? "" : props.$label;

  // const getQuantityLabel = () => {
  //   if (props.quantity === 0 && props.$onZeroAmountLabel) {
  //     return props.$onZeroAmountLabel;
  //   }

  //   const quantity = Math.abs(props.quantity);

  //   switch (props.mode) {
  //     case 'show-stack':
  //       return `x${quantity} ${label}`;
  //     case 'add-to-stack':
  //       return `+${quantity} ${label}`;
  //     case 'remove-from-stack':
  //       return `-${quantity} ${label}`;
  //   }
  // }

  // const viewLabel = getQuantityLabel();

  const opacity = (props.quantity === 0 && props.$onZeroAmountBehavior === 'dim') ? 0.25 : 1;

  // if (props.isVertical) {
  //   return (
  //     <VerticalMarkerView
  //       {...props}
  //       opacity={opacity}
  //       icon={props.icon}
  //       viewLabel={viewLabel}
  //     />
  //   )
  // }

  const icon = createImgComponentFromTag(props.markerType, props.markerSize);

  if (props.quantity === 0) {
    switch (props.$onZeroAmountBehavior) {
      case 'show-stockpile-to-marker-icon':
        return (
          <MarkerIndicatorDiv
            {...props}
            style={{ opacity }}
          >
            <MarkerFlowIcon
              source='from-stockpile'
              markerManaCost={1}
              markerToConjure={mapTokenCounterTypeTagToMwMarkerType(props.markerType)}
            />
          </MarkerIndicatorDiv>
        )
      case 'show-expended-mana-to-marker-icon':
        return (
          <MarkerIndicatorDiv
            {...props}
            style={{ opacity }}
          >
            <MarkerFlowIcon
              source='from-conjuration'
              markerManaCost={1}
              markerToConjure={mapTokenCounterTypeTagToMwMarkerType(props.markerType)}
            />
          </MarkerIndicatorDiv>
        )
      case 'show-tribe-to-clan-marker-stockpile-icon':
        return (
          <MarkerIndicatorDiv
            {...props}
            style={{ opacity }}
          >
            <MarkerFlowIcon
              source='from-tribe'
              markerManaCost={1}
              markerToConjure={mapTokenCounterTypeTagToMwMarkerType(props.markerType)}
            />
          </MarkerIndicatorDiv>
        )
      case 'show-mana-conjuration-to-marker-icon':
        return (
          <MarkerIndicatorDiv
            {...props}
            style={{ opacity }}
          >
            <MarkerConjurationIcon
              markerManaCost={2}
              markerToConjure={mapTokenCounterTypeTagToMwMarkerType(props.markerType)}
            />
          </MarkerIndicatorDiv>
        )
    }
  }

  return (    
    // <div style={{ opacity }}>
      <MarkerIndicatorDiv
        {...props}
        style={{ opacity }}
      >
        <MarkerIndicatorIconDiv
          {...props}
        >
          {icon}
        </MarkerIndicatorIconDiv>
        <div
          style={{ position: 'absolute', bottom: '-5px', right: '-5px', backgroundColor: 'red', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}
        >
          {props.quantity}
        </div>
        {/* <div style={{ position: 'absolute', bottom: '10px', right: '110px', backgroundColor: 'red', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          3
        </div> */}
        {/* <MarkerIndicatorTextDiv
          {...props}
        >
        {viewLabel}
        </MarkerIndicatorTextDiv> */}
      </MarkerIndicatorDiv>
    // </div>
  )
}


export const MwMarkerIndicator = (props: IInternalMarkerIndicatorProps) => {
  // if (props.$hideZeroAmounts && props.quantity < 1) {
  //   return null;
  // }

  // if (!props.$tooltipText || props.$hideLabel) {
  //   return <MwMarkerIndicatorContent {...props} />;
  // }

  
  return (
    <TooltipContainerDiv>
      <TooltipWrapperDiv>
        <MwMarkerIndicatorContent {...props} />
        <TooltipTextDiv>
          {props.$tooltipText}
        </TooltipTextDiv>
      </TooltipWrapperDiv>
    </TooltipContainerDiv>
  )
}


export const SoulstainToken_MarkerIndicator = (props: IMarkerIndicatorProps) => (
  <MwMarkerIndicator
    {...props}
    // $label="Soulstain"
    // icon={<SoulstainTokenIcon_MarkerIcon />}
    markerType='<::soulstain-token::>'
    $backgroundColorHexCode={HEX_COLOR_CODE_SOULSTAIN_TOKEN}
    $textColorHexCode={HEX_COLOR_CODE_SOULSTAIN_TOKEN_TEXT}
    />
)


export const PopulationToken_MarkerIndicator = (props: IMarkerIndicatorProps) => (
  <MwMarkerIndicator
    {...props}
    // $label="Population"
    // icon={<PopulationTokenIcon_MarkerIcon />}
    markerType='<::population-token::>'
    $backgroundColorHexCode={HEX_COLOR_CODE_POPULATION_TOKEN}
    $textColorHexCode={HEX_COLOR_CODE_POPULATION_TOKEN_TEXT}
    />
)


export const PopulationIncreaseCounter_MarkerIndicator = (props: IMarkerIndicatorProps) => (
  <MwMarkerIndicator
    {...props}
    // $label="Population Increase"
    // icon={<PopulationIncreaseCounterIcon_MarkerIcon />}
    markerType='<::population-increase-counter::>'
    $backgroundColorHexCode={HEX_COLOR_CODE_POPULATION_INCREASE_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_POPULATION_INCREASE_COUNTER_TEXT}
    />
)


export const ManalithToken_MarkerIndicator = (props: IMarkerIndicatorProps) => (
  <MwMarkerIndicator
    {...props}

    // $label="Manalith"
    // icon={<ManalithTokenIcon_MarkerIcon />}
    markerType='<::manalith-token::>'
    $backgroundColorHexCode={HEX_COLOR_CODE_MANALITH_TOKEN}
    $textColorHexCode={HEX_COLOR_CODE_MANALITH_TOKEN_TEXT}
    />
)


export const ManalithClaimCounter_MarkerIndicator = (props: IMarkerIndicatorProps) => (
  <MwMarkerIndicator
    {...props}
    // $label="Manalith Claims"
    icon={<ManalithClaimCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_MANALITH_CLAIM_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_MANALITH_CLAIM_COUNTER_TEXT}
    />
)


export const ManaCounter_MarkerIndicator = (props: IMarkerIndicatorProps) => (
  <MwMarkerIndicator
    {...props}
    // $label="Mana"
    icon={<ManaCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_MANA_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_MANA_COUNTER_TEXT}
    />
)


export const AttackCounter_MarkerIndicator = (props: IMarkerIndicatorProps) => (
  <MwMarkerIndicator
    {...props}
    // $label="Attack"
    icon={<AttackCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_ATTACK_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_ATTACK_COUNTER_TEXT}
    />
)


export const ShieldCounter_MarkerIndicator = (props: IMarkerIndicatorProps) => (
  <MwMarkerIndicator
    {...props}
    // $label="Shield"
    icon={<ShieldCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_SHIELD_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_SHIELD_COUNTER_TEXT}
    />
)


export const PopulationSacrificeCounter_MarkerIndicator = (props: IMarkerIndicatorProps) => (
  <MwMarkerIndicator
    {...props}
    // $label="Population Sacrifice"
    icon={<PopulationSacrificeCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_POPULATION_SACRIFICE_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_POPULATION_SACRIFICE_COUNTER_TEXT}
    />
)


export const PopulationSlaughterCounter_MarkerIndicator = (props: IMarkerIndicatorProps) => (
  <MwMarkerIndicator
    {...props}
    // $label="Population Slaughter"
    icon={<PopulationSlaughterCounterIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_POPULATION_SLAUGHTER_COUNTER}
    $textColorHexCode={HEX_COLOR_CODE_POPULATION_SLAUGHTER_COUNTER_TEXT}
    />
)


export const ManawaveRoundToken_MarkerIndicator = (props: IMarkerIndicatorProps) => (
  <MwMarkerIndicator
    {...props}
    // $label="Manawave Round"
    icon={<ManawaveRoundTokenIcon_MarkerIcon />}
    $backgroundColorHexCode={HEX_COLOR_CODE_MANAWAVE_ROUND_TOKEN}
    $textColorHexCode={HEX_COLOR_CODE_MANAWAVE_ROUND_TOKEN_TEXT}
    />
)
