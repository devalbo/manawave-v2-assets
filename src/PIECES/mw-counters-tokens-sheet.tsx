import React from 'react';
import './mw-counters-tokens-sheet.css';
import {
  AttackCounterDataUrl,
  ManaCounterDataUrl,
  ManawaveRoundTokenDataUrl,
  PopulationIncreaseCounterDataUrl,
  PopulationTokenDataUrl,
  SacrificeCounterDataUrl,
  ShieldCounterDataUrl,
  SoulstainTokenDataUrl,
  ManaLevelTokenDataUrl,
 } from "./token-counter-icons";


export const MwCountersTokensSheet = () => {

  var iconUrls = [
    ManaCounterDataUrl,
    ManaLevelTokenDataUrl,
    AttackCounterDataUrl,
    PopulationIncreaseCounterDataUrl,
    PopulationTokenDataUrl,
    SacrificeCounterDataUrl,
    ShieldCounterDataUrl,
    SoulstainTokenDataUrl,
    ManawaveRoundTokenDataUrl,
  ];

  return (
    <div className="mw-counters-tokens-sheet-summary">
      <div className="mw-counters-tokens-sheet-border-frame">

        <div className="mw-counters-tokens-sheet-table">
          {
            iconUrls.map((iconUrl, i) => (
              <div className="mw-counters-tokens-sheet-table-grid-item" key={i}>
                <img src={iconUrl} />
              </div>
            ))
          }            
        </div>
      </div>
    </div>
  );
};
