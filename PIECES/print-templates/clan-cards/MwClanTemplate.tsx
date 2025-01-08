/* eslint-disable react/jsx-pascal-case */
import { MwClanTemplateModeBlock } from './MwClanTemplateModeBlock';
import { createImgComponentFromMwMarkerType, createImgComponentFromTag } from '../../icons';
import { CardDecoration } from '../../constants';
import { IMwCardModeData } from '../../mw-card-data';
// import './MwClanTemplate.css';
import { IMwClanConversionRatio } from '../../type-defs/type-defs';
import { MwClanCardBodyDiv, MwClanCardBorderFrameDiv, MwClanCardDiv, MwClanConversionRatesTableContainerDiv, MwClanConversionRatesTableDiv, MwClanConversionRatesTableGridHeaderDiv, MwClanConversionRatesTableGridItemDiv, MwClanStockpileTableContainerDiv, MwClanStockpileTableDiv, MwClanStockpileTableGridItemDiv, MwClanTablesDiv } from './clan-card-styles';


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
      {/* <div className="mw-tribe-conversion-rates-table-grid-item"> */}
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

  const playerIdImgSrc = props.decoration === 'mw-icon-white-side-up' ? 
    '/img/mw_logo_white_top.svg' :
    '/img/mw_logo_black_top.svg';
  
    
  return (
    <MwClanCardDiv>
      <MwClanCardBorderFrameDiv>
        <div
          style={{display: "flex", fontSize: 24, }}
        >
          <div
            style={{
              height: 50,
              width: 50,
              overflow: "hidden",
            }}
          >
            <img src={playerIdImgSrc} style={{maxHeight: "100%", maxWidth: "100%", objectFit: "cover", }} />
          </div>
          <div style={{marginLeft: "20px", }}>
            {props.title}
          </div>
        </div>

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
