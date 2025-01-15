/* eslint-disable react/jsx-pascal-case */
import { MwClanTemplateModeBlock } from './MwClanTemplateModeBlock';
import { createImgComponentFromMwMarkerType, createImgComponentFromTag } from '../../icons';
import { CardDecoration } from '../../constants';
import { IMwCardModeData } from '../../mw-card-data';
import { IMwClanConversionRatio } from '../../type-defs/type-defs';
import { MwClanCardBodyDiv, MwClanCardBorderFrameDiv, MwClanCardDiv, MwClanCardHeaderDiv, MwClanConversionRatesTableContainerDiv, MwClanConversionRatesTableDiv, MwClanConversionRatesTableGridHeaderDiv, MwClanConversionRatesTableGridItemDiv, MwClanStockpileTableContainerDiv, MwClanStockpileTableDiv, MwClanStockpileTableGridItemDiv, MwClanTablesDiv } from './clan-card-styles';
import { MwLogoPlayerSideIcon } from '@mw-assets/PIECES/mw-logo-player-side-icon';
import { PlayerSide } from '@mw-assets/type-defs/game-play-data';


export interface IMwClanData {
  title: string
  text: string
  decoration?: CardDecoration
  modes: IMwCardModeData[]
  conversionRatios: IMwClanConversionRatio[]
}


const ConversionImageSize = 20;
const StockpileImageSize = 20;

const ManaCounterIcon_Stockpile = () => createImgComponentFromTag('<::mana-counter::>', StockpileImageSize);
const AttackCounterIcon_Stockpile = () => createImgComponentFromTag('<::attack-counter::>', StockpileImageSize);
const ShieldCounterIcon_Stockpile = () => createImgComponentFromTag('<::shield-counter::>', StockpileImageSize);
const PopulationIncreaseCounterIcon_Stockpile = () => createImgComponentFromTag('<::population-increase-counter::>', StockpileImageSize);
const SacrificeCounterIcon_Stockpile = () => createImgComponentFromTag('<::population-sacrifice-counter::>', StockpileImageSize);



const MwClanConversionRatioRow = (props: {conversionRatio: IMwClanConversionRatio}) => {
  return (
    <>
      <MwClanConversionRatesTableGridItemDiv>
        {
          props.conversionRatio.input.map((input) => 
            createImgComponentFromMwMarkerType(input, ConversionImageSize)
          )
        }
      </MwClanConversionRatesTableGridItemDiv>
      <MwClanConversionRatesTableGridItemDiv>
        {
          createImgComponentFromMwMarkerType(props.conversionRatio.output, ConversionImageSize)
        }
      </MwClanConversionRatesTableGridItemDiv>
    </>
  )
}


export const MwConversionRatesTable = (props: { conversionRatios: IMwClanConversionRatio[] }) => {

  return (
    <MwClanConversionRatesTableDiv>
      <MwClanConversionRatesTableGridHeaderDiv>Mana</MwClanConversionRatesTableGridHeaderDiv>
      <MwClanConversionRatesTableGridHeaderDiv>Conjuration</MwClanConversionRatesTableGridHeaderDiv>

      {
        props.conversionRatios.map((conversionRatio) => (
          <MwClanConversionRatioRow conversionRatio={conversionRatio} />
        ))
      }
        
    </MwClanConversionRatesTableDiv>
  )
}

export const MwStockpileTable = () => {
  return (
    <div>
      Stockpiles
      <MwClanStockpileTableDiv>

        <MwClanStockpileTableGridItemDiv>
          <ManaCounterIcon_Stockpile />
        </MwClanStockpileTableGridItemDiv>

        <MwClanStockpileTableGridItemDiv>
          <AttackCounterIcon_Stockpile />
        </MwClanStockpileTableGridItemDiv>

        <MwClanStockpileTableGridItemDiv>
          <PopulationIncreaseCounterIcon_Stockpile />
        </MwClanStockpileTableGridItemDiv>
          
        <MwClanStockpileTableGridItemDiv>
          <ShieldCounterIcon_Stockpile />
        </MwClanStockpileTableGridItemDiv>

        <MwClanStockpileTableGridItemDiv>
          <SacrificeCounterIcon_Stockpile />
        </MwClanStockpileTableGridItemDiv>
          
      </MwClanStockpileTableDiv>
    </div>
  )
}


export const MwClanTemplate = (props: IMwClanData) => {

  const playerSide: PlayerSide = props.decoration === 'mw-icon-black-side-up' ? 
    'OPT' :
    'OSB';
    
  return (
    <MwClanCardDiv>
      <MwClanCardBorderFrameDiv>
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

        <MwClanCardBodyDiv>
          <MwClanTemplateModeBlock
            modes={props.modes}
            />

          <MwClanTablesDiv>
            <MwClanConversionRatesTableContainerDiv>
              <MwConversionRatesTable
                conversionRatios={props.conversionRatios}
                />
            </MwClanConversionRatesTableContainerDiv>

            <MwClanStockpileTableContainerDiv>
              <MwStockpileTable />
            </MwClanStockpileTableContainerDiv>
          </MwClanTablesDiv>
        </MwClanCardBodyDiv>
      </MwClanCardBorderFrameDiv>
    </MwClanCardDiv>
  );
};
