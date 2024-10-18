import React from 'react';
import './mw-rules-summary.css';


export const MwRulesSummarySheet = () => {
  return (
    <div className="mw-rules-summary">
      <div className="mw-rules-summary-border-frame">
        <div style={{fontSize: 24}}>
          Manawave Execution
        </div>
        <div style={{fontSize: 16}}>

          <ul>
            <li>Increase Round Counter</li>
            <li>Select Family/Bloodline</li>
            <li>Place Family and Change Modalities</li>
            <li>Add Family Populations</li>
            <li>Channel Clan Manaflows</li>
            <li>Purchase and Place Counters/Tokens</li>
            <li>Wage Clan Conflicts</li>
            <li>Power Monuments</li>
            <li>Consolidate Clan Counters</li>
            <li>Restart Manawave Execution</li>
          </ul>

        </div>
      </div>
    </div>
  );
};
