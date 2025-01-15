import {
  MwClanPlacementsCardDiv,
  MwClanPlacementsCardBorderFrameDiv,
  MwClanPlacementsCardGridDiv,
  MwClanPlacementsCardGridItemDiv,
  StartingManaCounterDiv,
  MwClanPlacementsCardHeaderDiv,
  MwClanPlacementsCardInteractiveGridItemDiv,
  MwClanPlacementsCardInteractive2GridItemsDiv
} from "./clan-placement-card-styles";
import { AttackCounter_MarkerIndicator, ManaCounter_MarkerIndicator, OnZeroAmountBehavior, PopulationIncreaseCounter_MarkerIndicator, ShieldCounter_MarkerIndicator } from "../../game-symbols/marker-indicator/marker-indicator";
import { MarkerSourceIcon } from "../../game-symbols/marker-source-icon/marker-source-icon";
import { MwLogoPlayerSideIcon } from "@mw-assets/PIECES/mw-logo-player-side-icon";
import { PlayerSide } from "@mw-game-engine/gameboard/game-play-data";
import { MwMarkerType } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types";
import { VerticalMarkerConjurationArea } from "../../game-symbols/marker-conjuration-area/vertical-marker-conjuration-area";
import { HorizontalMarkerConjurationArea } from "../../game-symbols/marker-conjuration-area/horizontal-marker-conjuration-area";


export interface IClanPlacementCardInteractions {
  onAttackCounterConjured: () => void
  onShieldCounterConjured: () => void
  onPopulationIncreaseCounterConjured: () => void
  onManalithTokenConjured: () => void
  
  onAttackTransferredFromTribe: () => void
  onShieldTransferredFromTribe: () => void
  onPopulationIncreaseTransferredFromTribe: () => void
}


export interface IClanPlacementCardProps {
  playerSide: PlayerSide
  clanName: string
  renderMode: 'print' | 'interactive'

  attackCounterManaCost: number
  shieldCounterManaCost: number
  populationIncreaseCounterManaCost: number
  manalithTokenManaCost: number

  numAttackCountersFromTribe: number
  numShieldCountersFromTribe: number
  numPopulationIncreaseCountersFromTribe: number

  numPurchasedAttackCounters: number
  numPurchasedShieldCounters: number
  numPurchasedPopulationIncreaseCounters: number
  numPurchasedManalithTokens: number

  numExpendedManaForAttackCounters: number
  numExpendedManaForShieldCounters: number
  numExpendedManaForPopulationIncreaseCounters: number
  numExpendedManaForManalithTokens: number

  numStockpileManaCounters: number

  interactions: IClanPlacementCardInteractions | null
}


export const ClanPlacementCard = (props: IClanPlacementCardProps) => {

  const onZeroAmountBehaviorForMarkers: OnZeroAmountBehavior = props.renderMode === 'print' ?
    'hide-badge' :
    'dim';

  const MainClanPlacementGrid = () => {
    return (
      <MwClanPlacementsCardGridDiv>      
  
        {/* Row 1 - allocations from tribe */}
        <MwClanPlacementsCardInteractiveGridItemDiv
          onClick={() => {
            props.interactions?.onAttackTransferredFromTribe();
          }}
        >
          <MarkerSourceIcon
            source='from-tribe'
            sourceIconCount={1}
          />
          <AttackCounter_MarkerIndicator
            quantity={props.numAttackCountersFromTribe}
            // $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
          />
  
        </MwClanPlacementsCardInteractiveGridItemDiv>
        <MwClanPlacementsCardInteractiveGridItemDiv
          onClick={() => {
            props.interactions?.onShieldTransferredFromTribe();
          }}
        >
          <MarkerSourceIcon
            source='from-tribe'
            sourceIconCount={1}
          />
          <ShieldCounter_MarkerIndicator
            quantity={props.numShieldCountersFromTribe}
            // $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
          />
  
        </MwClanPlacementsCardInteractiveGridItemDiv>
        <MwClanPlacementsCardInteractiveGridItemDiv
          onClick={() => {
            props.interactions?.onPopulationIncreaseTransferredFromTribe();
          }}
        >
          <MarkerSourceIcon
            source='from-tribe'
            sourceIconCount={1}
          />
          <PopulationIncreaseCounter_MarkerIndicator
            quantity={props.numPopulationIncreaseCountersFromTribe}
            // $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
          />
        </MwClanPlacementsCardInteractiveGridItemDiv>

        {/* Row 2 - conjured allocations */}
        <MwClanPlacementsCardInteractiveGridItemDiv
          gridItemHeight='1.33in'
          onClick={() => {
            props.interactions?.onAttackCounterConjured();
          }}
        >
          <VerticalMarkerConjurationArea
            markerToConjure={MwMarkerType.MwMarkerType_AttackCounter}
            numConjuredMarkers={props.numPurchasedAttackCounters}
            markerManaCost={props.attackCounterManaCost}
            numManaSpent={props.numExpendedManaForAttackCounters}
            $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
          />
        </MwClanPlacementsCardInteractiveGridItemDiv>
        <MwClanPlacementsCardInteractiveGridItemDiv
          gridItemHeight='1.33in'
          onClick={() => {
            props.interactions?.onShieldCounterConjured();
          }}
        >
          <VerticalMarkerConjurationArea
            markerToConjure={MwMarkerType.MwMarkerType_ShieldCounter}
            numConjuredMarkers={props.numPurchasedShieldCounters}
            markerManaCost={props.shieldCounterManaCost}
            numManaSpent={props.numExpendedManaForShieldCounters}
            $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
          />
        </MwClanPlacementsCardInteractiveGridItemDiv>
        <MwClanPlacementsCardInteractiveGridItemDiv
          gridItemHeight='1.33in'
          onClick={() => {
            props.interactions?.onPopulationIncreaseCounterConjured();
          }}
        >
          <VerticalMarkerConjurationArea
            markerToConjure={MwMarkerType.MwMarkerType_PopulationIncreaseCounter}
            numConjuredMarkers={props.numPurchasedPopulationIncreaseCounters}
            markerManaCost={props.populationIncreaseCounterManaCost}
            numManaSpent={props.numExpendedManaForPopulationIncreaseCounters}
            $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
          />
        </MwClanPlacementsCardInteractiveGridItemDiv>

        {/* Row 3 - manalith conjuration */}
        <MwClanPlacementsCardGridItemDiv>
          <StartingManaCounterDiv>
            <MarkerSourceIcon
              source='from-stockpile'
              sourceIconCount={1}
            />
            <ManaCounter_MarkerIndicator
              quantity={props.numStockpileManaCounters}
              $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
            />
          </StartingManaCounterDiv>
        </MwClanPlacementsCardGridItemDiv>
        <MwClanPlacementsCardInteractive2GridItemsDiv
          onClick={() => {
            props.interactions?.onManalithTokenConjured();
          }}
        >
          <HorizontalMarkerConjurationArea
            markerToConjure={MwMarkerType.MwMarkerType_ManalithToken}
            numConjuredMarkers={props.numPurchasedManalithTokens}
            markerManaCost={props.manalithTokenManaCost}
            numManaSpent={props.numExpendedManaForManalithTokens}
            $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
          />
        </MwClanPlacementsCardInteractive2GridItemsDiv>
  
      </MwClanPlacementsCardGridDiv>
    )
  }


  return (
    <MwClanPlacementsCardDiv>
      <MwClanPlacementsCardBorderFrameDiv>

        <MwClanPlacementsCardHeaderDiv>
          <MwLogoPlayerSideIcon
            playerSide={props.playerSide}
            size={30}
            style={{marginRight: 8}}
          />
          {props.clanName} Allocations
        </MwClanPlacementsCardHeaderDiv>

        <MainClanPlacementGrid />

      </MwClanPlacementsCardBorderFrameDiv>
    </MwClanPlacementsCardDiv>
  )
}
