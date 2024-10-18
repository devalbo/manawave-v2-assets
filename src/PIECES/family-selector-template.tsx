import React from 'react';
import './MwCard.css';
import { OnCardPickData } from './mw-card-data';
import { OxTotemDataUrl, SpiritsTotemDataUrl, TurtleTotemDataUrl, TigerTotemDataUrl, Totems } from './totems';
import { PlayerId } from './constants';


export interface IMwFamilySelectorData {
  title: string;
  totems: Totems[];
  onCardPickData: OnCardPickData;
  playerId: PlayerId
}


export const MwFamilySelectorTemplate = (props: IMwFamilySelectorData) => {
  const playerIdImgSrc = props.playerId === 'Player1' ? 
    '/img/mw_logo_white_top.svg' :
    '/img/mw_logo_black_top.svg';

  return (
    <div className="mw-family-selector-card" style={{
      width: "2.5in",
      height: "3.4in",    
    }}>
      <div>
        <div className="mw-family-selector-name">
          {props.title}
        </div>
        <div className="mw-family-selector-details-row">
          <div className="mw-family-selector-totems">
            { props.totems.includes("ox") ? 
              <img src={OxTotemDataUrl} alt="Flying Icon" height="100%" width="auto" /> :
              null }
            { props.totems.includes("spirits") ? 
              <img src={SpiritsTotemDataUrl} alt="Flying Icon" height="100%" width="auto" /> :
              null }
            { props.totems.includes("turtle") ? 
              <img src={TurtleTotemDataUrl} alt="Flying Icon" height="100%" width="auto" /> :
              null }
            { props.totems.includes("tiger") ? 
              <img src={TigerTotemDataUrl} alt="Flying Icon" height="100%" width="auto" /> :
              null }
          </div>
          <div className="mw-family-selector-init">
            <span className="mw-card-mana">{props.onCardPickData.singlePickInitialPopulation} [{props.onCardPickData.multiplePickInitialPopulation}]</span>
          </div>
        </div>
      </div>
      <div className="mw-family-selector-label">
        <img src={playerIdImgSrc} height={100} width={100} />
      </div>
    </div>
  );
};
