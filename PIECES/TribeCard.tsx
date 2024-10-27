import React from "react";
import './TribeCard.css';
import { PlayerId } from "./constants";
import { createImgComponentFromTag, ManaCounterIcon_DefaultSize } from "./icons";


export interface IMwTribeCardData {
  title: string
  text: string
  playerId: PlayerId
}

const ManaCounterIcon = () => createImgComponentFromTag('<::mana-counter::>', 20);
const AttackCounterIcon = () => createImgComponentFromTag('<::attack-counter::>', 20);
const ShieldCounterIcon = () => createImgComponentFromTag('<::shield-counter::>', 20);
const PopulationIncreaseCounterIcon = () => createImgComponentFromTag('<::population-increase-counter::>', 20);
const ManaLevelTokenIcon = () => createImgComponentFromTag('<::manalith-token::>', 20);

const StockpileImageSize = 40;

const ManaCounterIcon_Stockpile = () => createImgComponentFromTag('<::mana-counter::>', StockpileImageSize);
const AttackCounterIcon_Stockpile = () => createImgComponentFromTag('<::attack-counter::>', StockpileImageSize);
const ShieldCounterIcon_Stockpile = () => createImgComponentFromTag('<::shield-counter::>', StockpileImageSize);
const PopulationIncreaseCounterIcon_Stockpile = () => createImgComponentFromTag('<::population-increase-counter::>', StockpileImageSize);
const SoulstainTokenIcon_Stockpile = () => createImgComponentFromTag('<::soulstain-token::>', StockpileImageSize);
const SacrificeCounterIcon_Stockpile = () => createImgComponentFromTag('<::population-sacrifice-counter::>', StockpileImageSize);


export const MwConversionRatesTable = () => {
  return (
    <div className="mw-tribe-conversion-rates-table">
      <div className="mw-tribe-conversion-rates-table-grid-header">Mana</div>
      <div className="mw-tribe-conversion-rates-table-grid-header">Conjuration</div>
        
      <div className="mw-tribe-conversion-rates-table-grid-item">
        <ManaCounterIcon key={1} />
        <ManaCounterIcon key={2} />
      </div>
      <div className="mw-tribe-conversion-rates-table-grid-item">
        Family <ManaLevelTokenIcon />
      </div>

      <div className="mw-tribe-conversion-rates-table-grid-item">
        <ManaCounterIcon key={1}  />
        <ManaCounterIcon key={2} />
      </div>
      <div className="mw-tribe-conversion-rates-table-grid-item">
        Clan <PopulationIncreaseCounterIcon />
      </div>

      <div className="mw-tribe-conversion-rates-table-grid-item">
        <ManaCounterIcon key={1} />
        <ManaCounterIcon key={2} />
      </div>
      <div className="mw-tribe-conversion-rates-table-grid-item">
        Clan <AttackCounterIcon />
      </div>
        
      <div className="mw-tribe-conversion-rates-table-grid-item">
        <ManaCounterIcon key={1} />
        <ManaCounterIcon key={2} />
      </div>
      <div className="mw-tribe-conversion-rates-table-grid-item">
        Clan <ShieldCounterIcon />
      </div>

    </div>
  )
}

export const MwStockpileTable = () => {
  return (
    <div>
      Stockpiles
      <div className="mw-tribe-stockpile-table">

        <div className="mw-tribe-stockpile-table-grid-item">
          <ManaCounterIcon_Stockpile />
        </div>

        <div className="mw-tribe-stockpile-table-grid-item">
          <AttackCounterIcon_Stockpile />
        </div>

        <div className="mw-tribe-stockpile-table-grid-item">
          <SoulstainTokenIcon_Stockpile />
        </div>

        <div className="mw-tribe-stockpile-table-grid-item">
          <PopulationIncreaseCounterIcon_Stockpile />
        </div>
          
        <div className="mw-tribe-stockpile-table-grid-item">
          <ShieldCounterIcon_Stockpile />
        </div>

        <div className="mw-tribe-stockpile-table-grid-item">
          <SacrificeCounterIcon_Stockpile />
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
            <MwConversionRatesTable />
          </div>

          <div className="mw-tribe-stockpile-table-container">
            <MwStockpileTable />
          </div>
        </div>
        
      </div>
    </div>
  );
};