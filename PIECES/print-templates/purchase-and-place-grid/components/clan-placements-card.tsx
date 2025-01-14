import {
  MwClanPlacementsCardDiv,
  MwClanPlacementsCardBorderFrameDiv,
  MwClanPlacementsCardGridDiv,
  MwClanPlacementsCardGridItemDiv,
  StartingManaCounterDiv,
  MwClanPlacementsCardHeaderDiv,
  MwClanPlacementsCardInteractiveGridItemDiv
} from "./clan-placements-card-styles";
import { AttackCounter_MarkerIndicator, ManaCounter_MarkerIndicator, ManalithToken_MarkerIndicator, PopulationIncreaseCounter_MarkerIndicator, ShieldCounter_MarkerIndicator } from "../../game-symbols/marker-indicator/marker-indicator";
import { MarkerSourceIcon } from "../../game-symbols/marker-source-icon/marker-source-icon";
import { MwLogoPlayerSideIcon } from "@mw-assets/PIECES/mw-logo-player-side-icon";
import { PlayerSide } from "@mw-game-engine/gameboard/game-play-data";


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

  numAttackCountersFromTribe: number
  numShieldCountersFromTribe: number
  numPopulationIncreaseCountersFromTribe: number

  numPurchasedAttackCounters: number
  numPurchasedShieldCounters: number
  numPurchasedPopulationIncreaseCounters: number
  numPurchasedManalithTokens: number

  numStockpileManaCounters: number
  // numStockpileManalithTokens: number

  interactions: IClanPlacementCardInteractions | null
}


export const ClanPlacementCard = (props: IClanPlacementCardProps) => {

  const MainClanPlacementGrid = () => {
    return (
      <MwClanPlacementsCardGridDiv>      
  
        {/* Row 1 */}
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
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
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
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
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
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
  
        </MwClanPlacementsCardInteractiveGridItemDiv>
        
        {/* Row 2 */}
        <MwClanPlacementsCardGridItemDiv>
          <MarkerSourceIcon
            source='from-expended-mana'
            sourceIconCount={1}
          />
          <AttackCounter_MarkerIndicator
            quantity={props.numPurchasedAttackCounters}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
  
        </MwClanPlacementsCardGridItemDiv>
        <MwClanPlacementsCardGridItemDiv>
          <MarkerSourceIcon
            source='from-expended-mana'
            sourceIconCount={1}
          />
          <ShieldCounter_MarkerIndicator
            quantity={props.numPurchasedShieldCounters}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
  
        </MwClanPlacementsCardGridItemDiv>
        <MwClanPlacementsCardGridItemDiv>
          <MarkerSourceIcon
            source='from-expended-mana'
            sourceIconCount={1}
          />
          <PopulationIncreaseCounter_MarkerIndicator
            quantity={props.numPurchasedPopulationIncreaseCounters}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
        </MwClanPlacementsCardGridItemDiv>
        
        {/* Row 3 */}
        <MwClanPlacementsCardInteractiveGridItemDiv
          onClick={() => {
            props.interactions?.onAttackCounterConjured();
          }}
        >
          <MarkerSourceIcon
            source='from-conjuration'
            sourceIconCount={2}
          />
          <AttackCounter_MarkerIndicator
            quantity={0}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
        </MwClanPlacementsCardInteractiveGridItemDiv>
        <MwClanPlacementsCardInteractiveGridItemDiv
          onClick={() => {
            props.interactions?.onShieldCounterConjured();
          }}
        >
          <MarkerSourceIcon
            source='from-conjuration'
            sourceIconCount={2}
          />
          <ShieldCounter_MarkerIndicator
            quantity={0}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
        </MwClanPlacementsCardInteractiveGridItemDiv>
        <MwClanPlacementsCardInteractiveGridItemDiv
          onClick={() => {
            props.interactions?.onPopulationIncreaseCounterConjured();
          }}
        >
          <MarkerSourceIcon
            source='from-conjuration'
            sourceIconCount={2}
          />
          <PopulationIncreaseCounter_MarkerIndicator
            quantity={0}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
        </MwClanPlacementsCardInteractiveGridItemDiv>
  
        {/* Row 4 */}
        <MwClanPlacementsCardGridItemDiv>
          <StartingManaCounterDiv>
            <MarkerSourceIcon
              source='from-stockpile'
              sourceIconCount={1}
            />
            <ManaCounter_MarkerIndicator
              quantity={props.numStockpileManaCounters}
              $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            />
          </StartingManaCounterDiv>
        </MwClanPlacementsCardGridItemDiv>
        <MwClanPlacementsCardInteractiveGridItemDiv
          onClick={() => {
            props.interactions?.onManalithTokenConjured();
          }}
        >
          <MarkerSourceIcon
            source='from-conjuration'
            sourceIconCount={1}
          />
          <ManalithToken_MarkerIndicator
            quantity={0}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
        </MwClanPlacementsCardInteractiveGridItemDiv>
        <MwClanPlacementsCardGridItemDiv>
          <MarkerSourceIcon
            source='from-expended-mana'
            sourceIconCount={1}
          />
          <ManalithToken_MarkerIndicator
            quantity={props.numPurchasedManalithTokens}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
        </MwClanPlacementsCardGridItemDiv>
  
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
          />
          {props.clanName} Allocations
        </MwClanPlacementsCardHeaderDiv>

        <MainClanPlacementGrid />

      </MwClanPlacementsCardBorderFrameDiv>
    </MwClanPlacementsCardDiv>
  )
}
