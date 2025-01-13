import { MwLogoPlayerSideIcon } from "../../../mw-logo-player-side-icon";
import { TribeManaConjurationCardBorderFrameDiv, TribeManaConjurationCardHeaderDiv, TribeManaConjurationGridDiv, TribeManaConjurationGridItemDiv, TribeManaConjurationInteractiveGridItemDiv, TribeManaConjurationStartingManaDiv } from "./tribe-mana-conjuration-card-styles";
import { TribeManaConjurationCardDiv } from "./tribe-mana-conjuration-card-styles";
import { AttackCounter_MarkerIndicator, ManaCounter_MarkerIndicator, PopulationIncreaseCounter_MarkerIndicator, ShieldCounter_MarkerIndicator } from "../../game-symbols/marker-indicator/marker-indicator";
import { MarkerSourceIcon } from "../../game-symbols/marker-source-icon/marker-source-icon";
import { PlayerSide } from "@mw-game-engine/gameboard/game-play-data";


export interface ITribeManaConjurationCardInteractions {
  onAttackCounterConjured: () => void
  onShieldCounterConjured: () => void
  onPopulationIncreaseCounterConjured: () => void
}

export interface ITribeManaConjurationCardProps {
  playerSide: PlayerSide

  numStockpileAttackCounters: number
  numStockpileShieldCounters: number
  numStockpilePopulationIncreaseCounters: number
  numStockpileManaCounters: number

  numExpendedManaAttackCounters: number
  numExpendedManaShieldCounters: number
  numExpendedManaPopulationIncreaseCounters: number

  numConjuredAttackCounters: number
  numConjuredShieldCounters: number
  numConjuredPopulationIncreaseCounters: number

  interactions: ITribeManaConjurationCardInteractions | null
}


export const TribeManaConjurationCard = (props: ITribeManaConjurationCardProps) => {
  const { playerSide } = props;
  
  return (
    <TribeManaConjurationCardDiv>
      <TribeManaConjurationCardBorderFrameDiv>

        <TribeManaConjurationCardHeaderDiv>
          <MwLogoPlayerSideIcon 
            playerSide={playerSide}
            size={30}
          />
          <div style={{width: 10}} />
          Tribe Stockpile & Conjuration
        </TribeManaConjurationCardHeaderDiv>
        
        <TribeManaConjurationGridDiv>
          
          <TribeManaConjurationGridItemDiv>
            <MarkerSourceIcon
              source='from-stockpile'
              sourceIconCount={1}
            />
            <AttackCounter_MarkerIndicator
              quantity={props.numStockpileAttackCounters}
              $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            />
          </TribeManaConjurationGridItemDiv>
          <TribeManaConjurationGridItemDiv>
            <MarkerSourceIcon
              source='from-stockpile'
              sourceIconCount={1}
            />
            <ShieldCounter_MarkerIndicator
              quantity={props.numStockpileShieldCounters}
              $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            />
          </TribeManaConjurationGridItemDiv>
          <TribeManaConjurationGridItemDiv>
            <MarkerSourceIcon
              source='from-stockpile'
              sourceIconCount={1}
            />
            <PopulationIncreaseCounter_MarkerIndicator
              quantity={props.numStockpilePopulationIncreaseCounters}
              $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            />
          </TribeManaConjurationGridItemDiv>
          
          <TribeManaConjurationGridItemDiv>
            <MarkerSourceIcon
              source='from-expended-mana'
              sourceIconCount={2}
            />
            <AttackCounter_MarkerIndicator
              quantity={props.numExpendedManaAttackCounters}
              $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            />
          </TribeManaConjurationGridItemDiv>
          <TribeManaConjurationGridItemDiv>
            <MarkerSourceIcon
              source='from-expended-mana'
              sourceIconCount={2}
            />
            <ShieldCounter_MarkerIndicator
              quantity={props.numExpendedManaShieldCounters}
              $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            />
          </TribeManaConjurationGridItemDiv>
          <TribeManaConjurationGridItemDiv>
            <MarkerSourceIcon
              source='from-expended-mana'
              sourceIconCount={2}
            />
            <PopulationIncreaseCounter_MarkerIndicator
              quantity={props.numExpendedManaPopulationIncreaseCounters}
              $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            />
          </TribeManaConjurationGridItemDiv>
          
          <TribeManaConjurationInteractiveGridItemDiv
            onClick={() => {
              props.interactions?.onAttackCounterConjured();
            }}
          >
            <MarkerSourceIcon
              source='from-conjuration'
              sourceIconCount={2}
            />
            <AttackCounter_MarkerIndicator
              quantity={props.numConjuredAttackCounters}
              $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            />
          </TribeManaConjurationInteractiveGridItemDiv>
          <TribeManaConjurationInteractiveGridItemDiv
            onClick={() => {
              props.interactions?.onShieldCounterConjured();
            }}
          >
            <MarkerSourceIcon
              source='from-conjuration'
              sourceIconCount={2}
            />
            <ShieldCounter_MarkerIndicator
              quantity={props.numConjuredShieldCounters}
              $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            />
          </TribeManaConjurationInteractiveGridItemDiv>
          <TribeManaConjurationInteractiveGridItemDiv
            onClick={() => {
              props.interactions?.onPopulationIncreaseCounterConjured();
            }}
          >
                        <MarkerSourceIcon
              source='from-conjuration'
              sourceIconCount={2}
              // markerToConjure={MwMarkerType.MwMarkerType_AttackCounter}
            />
            <PopulationIncreaseCounter_MarkerIndicator
              quantity={props.numConjuredPopulationIncreaseCounters}
              $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            />
          </TribeManaConjurationInteractiveGridItemDiv>
          
        </TribeManaConjurationGridDiv>

        <TribeManaConjurationStartingManaDiv>
          <MarkerSourceIcon
            source='from-stockpile'
            sourceIconCount={1}
            // markerToConjure={MwMarkerType.MwMarkerType_ManaCounter}
          />

          <ManaCounter_MarkerIndicator
            quantity={props.numStockpileManaCounters}
            // markerType='<::mana-counter::>'
            // markerSize={30}
            // $backgroundColorHexCode='#0000ff'
            // $textColorHexCode='#ffffff'
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />

          {/* <MarkerFlowArea
            source='from-manawave'
            sinkMarkerType={MwMarkerType.MwMarkerType_ManaCounter}
          />
           */}
        </TribeManaConjurationStartingManaDiv>

      </TribeManaConjurationCardBorderFrameDiv>
    </TribeManaConjurationCardDiv>
  )
}
