/* eslint-disable react/jsx-pascal-case */
import React from "react";
import './TribeCard.css';
import { PlayerId } from "./constants";
import { createImgComponentFromTag } from "./icons";
import { IMwTribeConversionRatio } from "./type-defs/type-defs";


export interface IMwTribeCardData {
  title: string
  text: string
  playerId: PlayerId
  conversionRatios: IMwTribeConversionRatio[]
}

const ConversionImageSize = 20;

// const ManaCounterIcon = () => createImgComponentFromTag('<::mana-counter::>', ConversionImageSize);
// const AttackCounterIcon = () => createImgComponentFromTag('<::attack-counter::>', ConversionImageSize);
// const ShieldCounterIcon = () => createImgComponentFromTag('<::shield-counter::>', ConversionImageSize);
// const PopulationIncreaseCounterIcon = () => createImgComponentFromTag('<::population-increase-counter::>', ConversionImageSize);
// const ManaLevelTokenIcon = () => createImgComponentFromTag('<::manalith-token::>', ConversionImageSize);

const StockpileImageSize = 40;

const ManaCounterIcon_Stockpile = () => createImgComponentFromTag('<::mana-counter::>', StockpileImageSize);
const AttackCounterIcon_Stockpile = () => createImgComponentFromTag('<::attack-counter::>', StockpileImageSize);
const ShieldCounterIcon_Stockpile = () => createImgComponentFromTag('<::shield-counter::>', StockpileImageSize);
const PopulationIncreaseCounterIcon_Stockpile = () => createImgComponentFromTag('<::population-increase-counter::>', StockpileImageSize);
const SoulstainTokenIcon_Stockpile = () => createImgComponentFromTag('<::soulstain-token::>', StockpileImageSize);
const ManalithIcon_Stockpile = () => createImgComponentFromTag('<::manalith-token::>', StockpileImageSize);


const MwTribeConversionRatioRow = (props: {conversionRatio: IMwTribeConversionRatio}) => {
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


export const MwConversionRatesTable = (props: {conversionRatios: IMwTribeConversionRatio[]}) => {
  return (
    <div className="mw-tribe-conversion-rates-table">
      <div className="mw-tribe-conversion-rates-table-grid-header">Mana</div>
      <div className="mw-tribe-conversion-rates-table-grid-header">Conjuration</div>

      {
        props.conversionRatios.map((conversionRatio) => (
          <MwTribeConversionRatioRow conversionRatio={conversionRatio} />
        ))
      }

    </div>
  )
}

export const MwStockpileTable = () => {
  return (
    <div>
      Stockpiles
      <div className="mw-tribe-stockpile-table">

        <div className="mw-tribe-stockpile-table-grid-item">
          <AttackCounterIcon_Stockpile />
        </div>

        <div className="mw-tribe-stockpile-table-grid-item">
          <ManaCounterIcon_Stockpile />
        </div>

        <div className="mw-tribe-stockpile-table-grid-item">
          <ManalithIcon_Stockpile />
        </div>

        <div className="mw-tribe-stockpile-table-grid-item">
          <ShieldCounterIcon_Stockpile />
        </div>

        <div className="mw-tribe-stockpile-table-grid-item">
          <PopulationIncreaseCounterIcon_Stockpile />
        </div>
  
        <div className="mw-tribe-stockpile-table-grid-item">
          <SoulstainTokenIcon_Stockpile />
        </div>
          
      </div>
    </div>
  )
}


export const MwTribeCard = (props: IMwTribeCardData) => {
  const playerIdImgSrc = props.playerId === 'Player1' ? 
    '/img/mw_logo_white_top.svg' :
    '/img/mw_logo_black_top.svg';

  return (
    <div className="mw-tribe-card">
      <div className="mw-tribe-card-border-frame">

        <div className="mw-tribe-player-header">
          <div style={{fontSize: 24, alignContent: "center"}}>
            Tribe Chief:
          </div>
          <img src={playerIdImgSrc} className="mw-tribe-player-header-id-icon" />
        </div>
          
        <div className="mw-tribe-tables">
          <div className="mw-tribe-conversion-rates-table-container">
            <MwConversionRatesTable
              conversionRatios={props.conversionRatios}
              />
          </div>

          <div className="mw-tribe-stockpile-table-container">
            <MwStockpileTable />
          </div>
        </div>
        
      </div>
    </div>
  );
};