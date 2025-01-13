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


export interface IClanPlacementCardProps {
  playerSide: PlayerSide
  clanName: string

  numStockpileAttackCounters: number
  numStockpileShieldCounters: number
  numStockpilePopulationIncreaseCounters: number
  numStockpileManaCounters: number

  numStockpileManalithTokens: number
}


export const ClanPlacementCard = (props: IClanPlacementCardProps) => {

  const MainClanPlacementGrid = () => {
    return (
      <MwClanPlacementsCardGridDiv>      
  
        {/* Row 1 */}
        <MwClanPlacementsCardInteractiveGridItemDiv>
          <MarkerSourceIcon
            source='from-tribe'
            sourceIconCount={1}
          />
          <AttackCounter_MarkerIndicator
            quantity={props.numStockpileAttackCounters}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
  
        </MwClanPlacementsCardInteractiveGridItemDiv>
        <MwClanPlacementsCardInteractiveGridItemDiv>
          <MarkerSourceIcon
            source='from-tribe'
            sourceIconCount={1}
          />
          <ShieldCounter_MarkerIndicator
            quantity={props.numStockpileShieldCounters}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
  
        </MwClanPlacementsCardInteractiveGridItemDiv>
        <MwClanPlacementsCardInteractiveGridItemDiv>
          <MarkerSourceIcon
            source='from-tribe'
            sourceIconCount={1}
          />
          <PopulationIncreaseCounter_MarkerIndicator
            quantity={0}
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
            quantity={0}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
  
        </MwClanPlacementsCardGridItemDiv>
        <MwClanPlacementsCardGridItemDiv>
          <MarkerSourceIcon
            source='from-expended-mana'
            sourceIconCount={1}
          />
          <ShieldCounter_MarkerIndicator
            quantity={0}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
  
        </MwClanPlacementsCardGridItemDiv>
        <MwClanPlacementsCardGridItemDiv>
          <MarkerSourceIcon
            source='from-expended-mana'
            sourceIconCount={1}
          />
          <PopulationIncreaseCounter_MarkerIndicator
            quantity={0}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
        </MwClanPlacementsCardGridItemDiv>
        
        {/* Row 3 */}
        <MwClanPlacementsCardInteractiveGridItemDiv>
          <MarkerSourceIcon
            source='from-conjuration'
            sourceIconCount={2}
          />
          <AttackCounter_MarkerIndicator
            quantity={0}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
        </MwClanPlacementsCardInteractiveGridItemDiv>
        <MwClanPlacementsCardInteractiveGridItemDiv>
          <MarkerSourceIcon
            source='from-conjuration'
            sourceIconCount={2}
          />
          <ShieldCounter_MarkerIndicator
            quantity={0}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
        </MwClanPlacementsCardInteractiveGridItemDiv>
        <MwClanPlacementsCardInteractiveGridItemDiv>
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
              quantity={0}
              $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            />
          </StartingManaCounterDiv>
        </MwClanPlacementsCardGridItemDiv>
        <MwClanPlacementsCardInteractiveGridItemDiv>
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
            quantity={0}
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
