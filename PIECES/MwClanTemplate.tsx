/* eslint-disable react/jsx-pascal-case */
import _ from 'lodash';
import { MwClanTemplateModeBlock } from './MwClanTemplateModeBlock';
import { createImgComponentFromTag } from './icons';
import { CardDecoration } from './constants';
import { IMwCardModeData } from './mw-card-data';
import './MwClanTemplate.css';
import { IMwClanConversionRatio } from './type-defs/type-defs';


// export interface IMwClanConversionRatio {
//   input: TokenCounterTypeTags[];
//   output: TokenCounterTypeTags[];
// }

export interface IMwClanData {
  title: string
  text: string
  decoration?: CardDecoration
  modes: IMwCardModeData[]
  conversionRatios: IMwClanConversionRatio[]
}


// const ConversionRatesImageSize = 20;

// const ConversionRateIcon = (props: {
//   tag: TokenCounterTypeTags
// }) => createImgComponentFromTag(props.tag, ConversionRatesImageSize);


// const ConversionRateIcons = (props: {
//   tags: TokenCounterTypeTags[]
// }) => {
//   return props.tags.map((tag, i) => (
//     <ConversionRateIcon tag={tag} key={i} />
//   ));
// }

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
      <div className="mw-tribe-conversion-rates-table-grid-item">
        {
          props.conversionRatio.input.map((input) => 
            createImgComponentFromTag(input, ConversionImageSize)
          )
        }
      </div>
      <div className="mw-tribe-conversion-rates-table-grid-item">
        {
          props.conversionRatio.output.map((output) => 
            createImgComponentFromTag(output, ConversionImageSize)
          )
        }
      </div>
    </>
  )
}


export const MwConversionRatesTable = (props: { conversionRatios: IMwClanConversionRatio[] }) => {

  return (
    <div className="mw-clan-conversion-rates-table">
      <div className="mw-clan-conversion-rates-table-grid-header">Mana</div>
      <div className="mw-clan-conversion-rates-table-grid-header">Conjuration</div>

      {
        props.conversionRatios.map((conversionRatio) => (
          <MwClanConversionRatioRow conversionRatio={conversionRatio} />
        ))
      }
        
    </div>
  )
}

export const MwStockpileTable = () => {
  return (
    <div>
      Stockpiles
      <div className="mw-clan-stockpile-table">

        <div className="mw-clan-stockpile-table-grid-item">
          <ManaCounterIcon_Stockpile />
        </div>

        <div className="mw-clan-stockpile-table-grid-item">
          <AttackCounterIcon_Stockpile />
        </div>

        <div className="mw-clan-stockpile-table-grid-item">
          <PopulationIncreaseCounterIcon_Stockpile />
        </div>
          
        <div className="mw-clan-stockpile-table-grid-item">
          <ShieldCounterIcon_Stockpile />
        </div>

        <div className="mw-clan-stockpile-table-grid-item">
          <SacrificeCounterIcon_Stockpile />
        </div>
          
      </div>
    </div>
  )
}


export const MwClanTemplate = (props: IMwClanData) => {

  const playerIdImgSrc = props.decoration === 'mw-icon-white-side-up' ? 
    '/img/mw_logo_white_top.svg' :
    '/img/mw_logo_black_top.svg';
  
    
  return (
    <div className="mw-clan-card">
      <div className="mw-clan-card-border-frame">
        <div style={{display: "flex", fontSize: 24, }}>
          <img src={playerIdImgSrc} className="mw-tribe-player-header-id-icon"  />
          <div style={{marginLeft: "20px", }}>
            {props.title}
          </div>
        </div>

        <div className="mw-clan-card-body">
          <MwClanTemplateModeBlock
            modes={props.modes}
            />

          <div className="mw-clan-tables">
            <div className="mw-clan-conversion-rates-table-container">
              <MwConversionRatesTable
                conversionRatios={props.conversionRatios}
                />
            </div>

            <div className="mw-clan-stockpile-table-container">
              <MwStockpileTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
