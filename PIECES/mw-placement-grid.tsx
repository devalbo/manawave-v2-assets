import React from 'react';
import './mw-placement-grid.css';
import _ from 'lodash';
import { createImgComponentFromTag } from './icons';


const PlacementIconSize = 40;

const ManaCounterIcon_Placement = () => createImgComponentFromTag('<::mana-counter::>', PlacementIconSize);
const AttackCounterIcon_Placement = () => createImgComponentFromTag('<::attack-counter::>', PlacementIconSize);
const ShieldCounterIcon_Placement = () => createImgComponentFromTag('<::shield-counter::>', PlacementIconSize);
const PopulationIncreaseCounterIcon_Placement = () => createImgComponentFromTag('<::population-increase-counter::>', PlacementIconSize);
const ManaLevelTokenIcon_Placement = () => createImgComponentFromTag('<::mana-level-token::>', PlacementIconSize);


const MwPlacementGridHeader = () => {
  return (
    <div className="mw-placement-grid-header">
      <img src="/img/mw_title_and_strip.png" />
    </div>
  )
}

const MwPlacementFamilyItem = (props: {clanLabel: string, familyLabel: string}) => {
  return (
    <div className="mw-placement-grid-family-item">
      <div className='mw-placement-grid-family-item-title'>
        {props.clanLabel}
        <br />
        {props.familyLabel}
      </div>

      <div className="mw-placement-grid-family-counters-container">
        <div className="mw-placement-grid-family-counter-item" style={{fontSize: 12, padding: 5}}>
          New Mode
        </div>
        <div className="mw-placement-grid-family-counter-item">
          <ManaLevelTokenIcon_Placement />
        </div>
      </div>
    </div>
  )
}

const MwPlacementClanItem = (props: {label: string}) => {
  return (
    <div className="mw-placement-grid-clan-item">
      <div className='mw-placement-grid-clan-item-title'>
        {props.label}
      </div>
      <div className="mw-placement-grid-clan-counters-container">
        <div className="mw-placement-grid-clan-counter-item">
          <AttackCounterIcon_Placement />
        </div>
        <div className="mw-placement-grid-clan-counter-item">
          <ShieldCounterIcon_Placement />
        </div>
        <div className="mw-placement-grid-clan-counter-item">
          <ManaCounterIcon_Placement />
        </div>
        <div className="mw-placement-grid-clan-counter-item">
          <PopulationIncreaseCounterIcon_Placement />
        </div>
      </div>
    </div>
  )
}

const MwAlignmentClanItem = () => {
  return (
    <div className="mw-placement-grid-alignment-clan-item">
      
    </div>
  )
}

const MwPlacementAlignmentItem = (props: {index: number}) => {
  return (
    <div className="mw-placement-grid-alignment-item">
      Rank {props.index}
    </div>
  )
}

const MwPlacementAlignmentColumn = () => {
  return (
    <div className="mw-placement-grid-alignment-column">
      <MwAlignmentClanItem />
      {
        _.range(1, 9).map(i => (
          <MwPlacementAlignmentItem
            index={i}
            key={i}
            />
        ))
      }
    </div>
  )
}

const MwPlacementColumn = (props: {label: string}) => {
  return (
    <div className="mw-placement-grid-clan-column">
      <MwPlacementClanItem
        {...props}
        />
      {
        _.range(1, 9).map(i => (
          <MwPlacementFamilyItem
            clanLabel={props.label}
            familyLabel={"Family " + i}
            key={i}
            />
        ))
      }
    </div>
  )
}

export const MwPlacementGrid = () => {

  return (
    <div className="mw-placement-grid-sheet">
      <div className="mw-placement-grid-border-frame">
        <MwPlacementGridHeader />
        <div className="mw-placement-grid-column-container">
          <MwPlacementAlignmentColumn />
          <div className="mw-placement-grid-clan-columns-container">
            <MwPlacementColumn label="Clan A" />
            <MwPlacementColumn label="Clan B" />
            <MwPlacementColumn label="Clan C" />
          </div>
        </div>
      </div>
    </div>
  );
};
