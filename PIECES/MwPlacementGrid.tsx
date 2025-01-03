/* eslint-disable react/jsx-pascal-case */
import { createImgComponentFromTag } from './icons';
import { PlayerSide } from '../../mw-v2-game-engine/gameboard/game-play-data';
import { MwLogoPlayerSideIcon } from './mw-logo-player-side-icon';
import './MwPlacementGrid.css';


const PlacementIconSize = 20;

const ManaCounterIcon_Placement = () => createImgComponentFromTag('<::mana-counter::>', PlacementIconSize);
const AttackCounterIcon_Placement = () => createImgComponentFromTag('<::attack-counter::>', PlacementIconSize);
const ShieldCounterIcon_Placement = () => createImgComponentFromTag('<::shield-counter::>', PlacementIconSize);
const PopulationIncreaseCounterIcon_Placement = () => createImgComponentFromTag('<::population-increase-counter::>', PlacementIconSize);
const ManaLevelTokenIcon_Placement = () => createImgComponentFromTag('<::manalith-token::>', PlacementIconSize);


export interface IMwPlacementGrid {
  playerSide: PlayerSide
}


const ClanPlacementColumn = (_props: {
  // title: string
}) => {
  return (
    <div className='mw-placement-grid-clan-placement-columns-row'>

      <div className="mw-placement-grid-clan-placement-markers-column">        
        <div className="mw-placement-grid-clan-counter-item">
          <AttackCounterIcon_Placement />
        </div>
        <div className="mw-placement-grid-clan-counter-item">
          <ShieldCounterIcon_Placement />
        </div>
        <div className="mw-placement-grid-clan-counter-item">
          <PopulationIncreaseCounterIcon_Placement />
        </div>
        {/* <div className="mw-placement-grid-clan-counter-item">
          <ManaCounterIcon_Placement />
        </div> */}
        <div className="mw-placement-grid-clan-counter-item">
          <ManaLevelTokenIcon_Placement />
        </div>
        <div>MW</div>
      </div>

      <div className="mw-placement-grid-clan-placement-markers-column">
        <div className="mw-placement-grid-clan-counter-item">
          <AttackCounterIcon_Placement />
        </div>
        <div className="mw-placement-grid-clan-counter-item">
          <ShieldCounterIcon_Placement />
        </div>
        <div className="mw-placement-grid-clan-counter-item">
          <PopulationIncreaseCounterIcon_Placement />
        </div>
        {/* <div className="mw-placement-grid-clan-counter-item">
          <ManaCounterIcon_Placement />
        </div> */}
        <div className="mw-placement-grid-clan-counter-item">
          <ManaLevelTokenIcon_Placement />
        </div>
        <div>Tribe</div>
      </div>

      <div className="mw-placement-grid-clan-placement-markers-column">
        <div className="mw-placement-grid-clan-counter-item">
          <AttackCounterIcon_Placement />
        </div>
        <div className="mw-placement-grid-clan-counter-item">
          <ShieldCounterIcon_Placement />
        </div>
        <div className="mw-placement-grid-clan-counter-item">
          <PopulationIncreaseCounterIcon_Placement />
        </div>
        {/* <div className="mw-placement-grid-clan-counter-item">
          <ManaCounterIcon_Placement />
        </div> */}
        <div className="mw-placement-grid-clan-counter-item">
          <ManaLevelTokenIcon_Placement />
        </div>
        <div>Purch.</div>
      </div>

    </div>
  )
}

export const MwPlacementGrid = (props: IMwPlacementGrid) => {

  const columnTitles = props.playerSide === 'OSB' ?
    ['Clan @ Leyline 1', 'Clan @ Leyline 2', 'Clan @ Leyline 3']
    :
    ['Clan @ Leyline 3', 'Clan @ Leyline 2', 'Clan @ Leyline 1']

  return (
    <div className="mw-placement-grid-card">
      <div className="mw-placement-grid-card-border-frame">

        <div className="mw-placement-grid-card-clan-placement-container">
          <div style={{fontSize: 24, display: 'flex', flexDirection: 'row', height: 40, }}>
            <MwLogoPlayerSideIcon 
              playerSide={props.playerSide}
              size={30}
              />
            <div style={{width: 10}} />
            Clan Counter Placements ({props.playerSide})
          </div>
          <div className='mw-placement-grid-card-clan-placement-row'>
            <div className="mw-placement-grid-clan-placement-column">
              {columnTitles[0]}
              <ClanPlacementColumn />
            </div>
            <div className="mw-placement-grid-clan-placement-column">
              {columnTitles[1]}
              <ClanPlacementColumn />
            </div>
            <div className="mw-placement-grid-clan-placement-column">
              {columnTitles[2]}
              <ClanPlacementColumn />
            </div>
          </div>
        </div>

        <div className='mw-placement-conversion-grid-row'>
          <div className='mw-placement-conversion-grid-row-item'>
            Tribe to Clan <ManaCounterIcon_Placement /> Allocations
          </div>
          {/* <div className='mw-placement-conversion-grid-row-item'>
            <ManaCounterIcon_Placement />
          </div> */}
          <div className='mw-placement-conversion-grid-row-item'>
            @ Leyline 1
          </div>
          <div className='mw-placement-conversion-grid-row-item'>
            @ Leyline 2
          </div>
          <div className='mw-placement-conversion-grid-row-item'>
            @ Leyline 3
          </div>
        </div>

        <div className='mw-placement-conversion-grid-row'>
          <div className='mw-placement-conversion-grid-row-item'>
            Tribe Mana Conversions
          </div>
          {/* <div className='mw-placement-conversion-grid-row-item'>
            <ManaCounterIcon_Placement />
          </div> */}
          <div className='mw-placement-conversion-grid-row-item'>
            <AttackCounterIcon_Placement />
          </div>
          <div className='mw-placement-conversion-grid-row-item'>
            <ShieldCounterIcon_Placement />
          </div>
          <div className='mw-placement-conversion-grid-row-item'>
            <PopulationIncreaseCounterIcon_Placement />          
          </div>
        </div>

      </div>
    </div>
  );
};
