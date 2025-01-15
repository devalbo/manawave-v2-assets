/* eslint-disable react/jsx-pascal-case */
import { CardDecoration } from '../../constants';
import { IMwCardModeData } from '../../mw-card-data';
import { IMwClanConversionRatio } from '../../type-defs/type-defs';
import { MwClanCardBorderFrameDiv, MwClanCardDiv, MwClanCardHeaderDiv, NewMwClanTemplateBodyMarkersDiv, NewMwClanTemplateBodyBottomGridItemDiv, NewMwClanTemplateBodyBottomGridMarkerItemDiv, NewMwClanTemplateBodyDiv, NewMwClanTemplateStockpileDoubleGridItemDiv, NewMwClanTemplateStockpileGridDiv, NewMwClanTemplateStockpileGridItemDiv } from './clan-card-styles';
import { MwLogoPlayerSideIcon } from '@mw-assets/PIECES/mw-logo-player-side-icon';
import { PlayerSide } from '@mw-assets/type-defs/game-play-data';
import { AttackCounter_MarkerIndicator, ExpendedManaCounter_MarkerIndicator, ManaCounter_MarkerIndicator, ManalithToken_MarkerIndicator, PopulationIncreaseCounter_MarkerIndicator, PopulationSacrificeCounter_MarkerIndicator, PopulationToken_MarkerIndicator, ShieldCounter_MarkerIndicator } from '../game-symbols/marker-indicator/marker-indicator';
import { MwClanTemplateModeBlock } from './MwClanTemplateModeBlock';


export interface IMwClanData {
  title: string
  text: string
  decoration?: CardDecoration
  modes: IMwCardModeData[]
  conversionRatios: IMwClanConversionRatio[]
}


// const ConversionImageSize = 20;
// const StockpileImageSize = 20;

// const ManaCounterIcon_Stockpile = () => createImgComponentFromTag('<::mana-counter::>', StockpileImageSize);
// const AttackCounterIcon_Stockpile = () => createImgComponentFromTag('<::attack-counter::>', StockpileImageSize);
// const ShieldCounterIcon_Stockpile = () => createImgComponentFromTag('<::shield-counter::>', StockpileImageSize);
// const PopulationIncreaseCounterIcon_Stockpile = () => createImgComponentFromTag('<::population-increase-counter::>', StockpileImageSize);
// const SacrificeCounterIcon_Stockpile = () => createImgComponentFromTag('<::population-sacrifice-counter::>', StockpileImageSize);



// const MwClanConversionRatioRow = (props: {conversionRatio: IMwClanConversionRatio}) => {
//   return (
//     <>
//       {/* <div className="mw-tribe-conversion-rates-table-grid-item"> */}
//       <MwClanConversionRatesTableGridItemDiv>
//         {
//           props.conversionRatio.input.map((input) => 
//             createImgComponentFromMwMarkerType(input, ConversionImageSize)
//           )
//         }
//       </MwClanConversionRatesTableGridItemDiv>
//       <MwClanConversionRatesTableGridItemDiv>
//         {
//           createImgComponentFromMwMarkerType(props.conversionRatio.output, ConversionImageSize)
//         }
//       </MwClanConversionRatesTableGridItemDiv>
//     </>
//   )
// }


// export const MwConversionRatesTable = (props: { conversionRatios: IMwClanConversionRatio[] }) => {

//   return (
//     <MwClanConversionRatesTableDiv>
//       <MwClanConversionRatesTableGridHeaderDiv>Mana</MwClanConversionRatesTableGridHeaderDiv>
//       <MwClanConversionRatesTableGridHeaderDiv>Conjuration</MwClanConversionRatesTableGridHeaderDiv>

//       {
//         props.conversionRatios.map((conversionRatio) => (
//           <MwClanConversionRatioRow conversionRatio={conversionRatio} />
//         ))
//       }
        
//     </MwClanConversionRatesTableDiv>
//   )
// }

// export const MwStockpileTable = () => {
//   return (
//     <div>
//       Stockpiles
//       <MwClanStockpileTableDiv>

//         <MwClanStockpileTableGridItemDiv>
//           <ManaCounterIcon_Stockpile />
//         </MwClanStockpileTableGridItemDiv>

//         <MwClanStockpileTableGridItemDiv>
//           <AttackCounterIcon_Stockpile />
//         </MwClanStockpileTableGridItemDiv>

//         <MwClanStockpileTableGridItemDiv>
//           <PopulationIncreaseCounterIcon_Stockpile />
//         </MwClanStockpileTableGridItemDiv>
          
//         <MwClanStockpileTableGridItemDiv>
//           <ShieldCounterIcon_Stockpile />
//         </MwClanStockpileTableGridItemDiv>

//         <MwClanStockpileTableGridItemDiv>
//           <SacrificeCounterIcon_Stockpile />
//         </MwClanStockpileTableGridItemDiv>
          
//       </MwClanStockpileTableDiv>
//     </div>
//   )
// }


export const NewMwClanTemplate = (props: IMwClanData) => {

  const playerSide: PlayerSide = props.decoration === 'mw-icon-black-side-up' ? 
    'OPT' :
    'OSB';
    
  return (
    <MwClanCardDiv>
      <MwClanCardBorderFrameDiv>

        <NewMwClanTemplateBodyDiv>
          <MwClanCardHeaderDiv
            style={{display: "flex", fontSize: 24, }}
          >
            <MwLogoPlayerSideIcon
              playerSide={playerSide}
              size={30}
              style={{marginRight: 6}}
            />

            <div >
              {props.title}
            </div>
          </MwClanCardHeaderDiv>

          <NewMwClanTemplateBodyMarkersDiv>
            <NewMwClanTemplateBodyBottomGridItemDiv>
              <PopulationToken_MarkerIndicator
                quantity={1}
                $onZeroAmountBehavior='dim'
              />
            </NewMwClanTemplateBodyBottomGridItemDiv>
            <NewMwClanTemplateBodyBottomGridItemDiv>
              <ManalithToken_MarkerIndicator
                quantity={1}
                $onZeroAmountBehavior='dim'
              />
            </NewMwClanTemplateBodyBottomGridItemDiv>
            <NewMwClanTemplateBodyBottomGridMarkerItemDiv>
              Mode marker goes here
            </NewMwClanTemplateBodyBottomGridMarkerItemDiv>
          </NewMwClanTemplateBodyMarkersDiv>

          <MwClanTemplateModeBlock
            modes={props.modes}
          />

        </NewMwClanTemplateBodyDiv>

        <NewMwClanTemplateStockpileGridDiv>
          <NewMwClanTemplateStockpileDoubleGridItemDiv>
            Extra stuff can go here
          </NewMwClanTemplateStockpileDoubleGridItemDiv>

          <NewMwClanTemplateStockpileGridItemDiv>
            <AttackCounter_MarkerIndicator
              quantity={1}
              $onZeroAmountBehavior='dim'
            />
          </NewMwClanTemplateStockpileGridItemDiv>
          <NewMwClanTemplateStockpileGridItemDiv>
            <ShieldCounter_MarkerIndicator
              quantity={1}
              $onZeroAmountBehavior='dim'
            />
          </NewMwClanTemplateStockpileGridItemDiv>
          <NewMwClanTemplateStockpileGridItemDiv>
            <ManaCounter_MarkerIndicator
              quantity={1}
              $onZeroAmountBehavior='dim'
            />
          </NewMwClanTemplateStockpileGridItemDiv>
          <NewMwClanTemplateStockpileGridItemDiv>
            <ExpendedManaCounter_MarkerIndicator
              quantity={1}
              $onZeroAmountBehavior='dim'
            />
          </NewMwClanTemplateStockpileGridItemDiv>
          <NewMwClanTemplateStockpileGridItemDiv>
            <PopulationIncreaseCounter_MarkerIndicator
              quantity={1}
              $onZeroAmountBehavior='dim'
            />
          </NewMwClanTemplateStockpileGridItemDiv>
          <NewMwClanTemplateStockpileGridItemDiv>
            <PopulationSacrificeCounter_MarkerIndicator
              quantity={1}
              $onZeroAmountBehavior='dim'
            />
          </NewMwClanTemplateStockpileGridItemDiv>
        </NewMwClanTemplateStockpileGridDiv>

      </MwClanCardBorderFrameDiv>
    </MwClanCardDiv>
  );
};
