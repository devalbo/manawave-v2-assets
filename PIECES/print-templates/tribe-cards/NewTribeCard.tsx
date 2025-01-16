/* eslint-disable react/jsx-pascal-case */
import { PlayerSide } from "@mw-game-engine/gameboard/game-play-data";
import { IMwTribeConversionRatio } from "../../type-defs/type-defs";
import { MwTribeCardBorderFrameDiv, MwTribePlayerHeaderDiv, MwTribeStockpileTableContainerDiv, MwTribeTablesDiv, NewMwTribeCardDiv, NewMwTribeStockpileTableDiv, NewMwTribeStockpileTableGridItemDiv } from './tribe-card-styles';
import { MwLogoPlayerSideIcon } from "@mw-assets/PIECES/mw-logo-player-side-icon";
import { AttackCounter_MarkerIndicator, ExpendedManaCounter_MarkerIndicator, ManaCounter_MarkerIndicator, OnZeroAmountBehavior, PopulationIncreaseCounter_MarkerIndicator, ShieldCounter_MarkerIndicator, SoulstainToken_MarkerIndicator } from "../game-symbols/marker-indicator/marker-indicator";


export interface IMwTribeCardData {
  playerSide: PlayerSide
  playerName: string
  conversionRatios: IMwTribeConversionRatio[]
  renderMode: 'print' | 'interactive'

  numStockpileAttackCounters: number
  numStockpileShieldCounters: number
  numStockpilePopulationIncreaseCounters: number
  numStockpileManaCounters: number
  numStockpileExpendedManaCounters: number
  numStockpileSoulstainTokens: number
}

// const ConversionImageSize = 20;

// const MwTribeConversionRatioRow = (props: {conversionRatio: IMwTribeConversionRatio}) => {
//   return (
//     <>
//       <MwTribeConversionRatesTableGridItemDiv>
//         {
//           props.conversionRatio.input.map((input) => 
//             createImgComponentFromMwMarkerType(input, ConversionImageSize)
//           )
//         }
//       </MwTribeConversionRatesTableGridItemDiv>
//       <MwTribeConversionRatesTableGridItemDiv>
//         {
//           createImgComponentFromMwMarkerType(props.conversionRatio.output, ConversionImageSize)
//         }
//       </MwTribeConversionRatesTableGridItemDiv>
//     </>
//   )
// }


// export const MwConversionRatesTable = (props: {conversionRatios: IMwTribeConversionRatio[]}) => {
//   return (
//     <MwTribeConversionRatesTableDiv>
//       <MwTribeConversionRatesTableGridHeaderDiv>Mana</MwTribeConversionRatesTableGridHeaderDiv>
//       <MwTribeConversionRatesTableGridHeaderDiv>Conjuration</MwTribeConversionRatesTableGridHeaderDiv>

//       {
//         props.conversionRatios.map((conversionRatio) => (
//           <MwTribeConversionRatioRow conversionRatio={conversionRatio} />
//         ))
//       }

//     </MwTribeConversionRatesTableDiv>
//   )
// }


export const NewMwTribeCard = (props: IMwTribeCardData) => {

  const onZeroAmountBehaviorForMarkers: OnZeroAmountBehavior = props.renderMode === 'print' ?
    'hide-badge' :
    'dim';

  const MwStockpileTable = () => {
    return (
      <NewMwTribeStockpileTableDiv>

        <NewMwTribeStockpileTableGridItemDiv>
          <AttackCounter_MarkerIndicator
              quantity={props.numStockpileAttackCounters}
              $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
            />
        </NewMwTribeStockpileTableGridItemDiv>

        <NewMwTribeStockpileTableGridItemDiv>
          <ManaCounter_MarkerIndicator
            quantity={props.numStockpileManaCounters}
            $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
          />
        </NewMwTribeStockpileTableGridItemDiv>

        <NewMwTribeStockpileTableGridItemDiv>
          <PopulationIncreaseCounter_MarkerIndicator
            quantity={props.numStockpilePopulationIncreaseCounters}
            $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
          />
        </NewMwTribeStockpileTableGridItemDiv>

        <NewMwTribeStockpileTableGridItemDiv>
          <ShieldCounter_MarkerIndicator
            quantity={props.numStockpileShieldCounters}
            $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
          />
        </NewMwTribeStockpileTableGridItemDiv>

        <NewMwTribeStockpileTableGridItemDiv>
          <ExpendedManaCounter_MarkerIndicator
            quantity={props.numStockpileExpendedManaCounters}
            $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
          />
        </NewMwTribeStockpileTableGridItemDiv>

        <NewMwTribeStockpileTableGridItemDiv>
          <SoulstainToken_MarkerIndicator
            quantity={props.numStockpileSoulstainTokens}
            $onZeroAmountBehavior={onZeroAmountBehaviorForMarkers}
          />
        </NewMwTribeStockpileTableGridItemDiv>
          
      </NewMwTribeStockpileTableDiv>
    )
  }


  return (
    <NewMwTribeCardDiv>
      <MwTribeCardBorderFrameDiv>

        <MwTribePlayerHeaderDiv>
          <MwLogoPlayerSideIcon
            playerSide={props.playerSide}
            size={44}
            style={{marginRight: 10}}
          />
          <div style={{fontSize: 16, alignContent: "center"}}>
            Tribe Chief: {props.playerName}
          </div>
        </MwTribePlayerHeaderDiv>
          
        <MwTribeTablesDiv>
          {/* <MwTribeConversionRatesTableContainerDiv>
            <MwConversionRatesTable
              conversionRatios={props.conversionRatios}
            />
          </MwTribeConversionRatesTableContainerDiv> */}

          {/* <div className="mw-tribe-stockpile-table-container">
            <MwStockpileTable />
          </div> */}
          <MwTribeStockpileTableContainerDiv>
            <MwStockpileTable />
          </MwTribeStockpileTableContainerDiv>

        </MwTribeTablesDiv>
        
      </MwTribeCardBorderFrameDiv>
    </NewMwTribeCardDiv>
  );
};
