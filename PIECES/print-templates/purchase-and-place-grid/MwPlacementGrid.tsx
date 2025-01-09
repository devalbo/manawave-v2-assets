/* eslint-disable react/jsx-pascal-case */
import { createImgComponentFromTag } from '../../icons';
import { PlayerSide } from '../../../../mw-v2-game-engine/gameboard/game-play-data';
import { MwLogoPlayerSideIcon } from '../../mw-logo-player-side-icon';
import { MwPlacementGridCardBorderFrameDiv, MwPlacementGridCardClanCounterItemDiv, MwPlacementGridCardClanPlacementColumnsRowDiv, MwPlacementGridCardClanPlacementContainerDiv, MwPlacementGridCardClanPlacementMarkersColumnDiv, MwPlacementGridCardClanPlacementRowDiv } from './purchase-and-place-grid-styles';
import { MwPlacementGridCardDiv } from './purchase-and-place-grid-styles';
import { ClanPlacementCard } from './components/clan-placements-card';
import { TribePlacementsCard } from './components/tribe-placements-card';
// import './MwPlacementGrid.css';


const PlacementIconSize = 20;

const ManaCounterIcon_Placement = () => createImgComponentFromTag('<::mana-counter::>', PlacementIconSize);
const AttackCounterIcon_Placement = () => createImgComponentFromTag('<::attack-counter::>', PlacementIconSize);
const ShieldCounterIcon_Placement = () => createImgComponentFromTag('<::shield-counter::>', PlacementIconSize);
const PopulationIncreaseCounterIcon_Placement = () => createImgComponentFromTag('<::population-increase-counter::>', PlacementIconSize);
const ManaLevelTokenIcon_Placement = () => createImgComponentFromTag('<::manalith-token::>', PlacementIconSize);


export interface IMwPlacementGrid {
  readonly playerSide: PlayerSide
}


const ClanPlacementColumn = (_props: {
  // title: string
}) => {
  return (
    <MwPlacementGridCardClanPlacementColumnsRowDiv>

      <MwPlacementGridCardClanPlacementMarkersColumnDiv>        
        <MwPlacementGridCardClanCounterItemDiv>
          <AttackCounterIcon_Placement />
        </MwPlacementGridCardClanCounterItemDiv>
        <MwPlacementGridCardClanCounterItemDiv>
          <ShieldCounterIcon_Placement />
        </MwPlacementGridCardClanCounterItemDiv>
        <MwPlacementGridCardClanCounterItemDiv>
          <PopulationIncreaseCounterIcon_Placement />
        </MwPlacementGridCardClanCounterItemDiv>
        {/* <div className="mw-placement-grid-clan-counter-item">
          <ManaCounterIcon_Placement />
        </div> */}
        <MwPlacementGridCardClanCounterItemDiv>
          <ManaLevelTokenIcon_Placement />
        </MwPlacementGridCardClanCounterItemDiv>
        <div>MW</div>
      </MwPlacementGridCardClanPlacementMarkersColumnDiv>

      <MwPlacementGridCardClanPlacementMarkersColumnDiv>
        <MwPlacementGridCardClanCounterItemDiv>
          <AttackCounterIcon_Placement />
        </MwPlacementGridCardClanCounterItemDiv>
        <MwPlacementGridCardClanCounterItemDiv>
          <ShieldCounterIcon_Placement />
        </MwPlacementGridCardClanCounterItemDiv>
        <MwPlacementGridCardClanCounterItemDiv>
          <PopulationIncreaseCounterIcon_Placement />
        </MwPlacementGridCardClanCounterItemDiv>
        <MwPlacementGridCardClanCounterItemDiv>
          <ManaLevelTokenIcon_Placement />
        </MwPlacementGridCardClanCounterItemDiv>
        <div>Tribe</div>
      </MwPlacementGridCardClanPlacementMarkersColumnDiv>

      <MwPlacementGridCardClanPlacementMarkersColumnDiv>
        <MwPlacementGridCardClanCounterItemDiv>
          <AttackCounterIcon_Placement />
        </MwPlacementGridCardClanCounterItemDiv>
        <MwPlacementGridCardClanCounterItemDiv>
          <ShieldCounterIcon_Placement />
        </MwPlacementGridCardClanCounterItemDiv>
        <MwPlacementGridCardClanCounterItemDiv>
          <PopulationIncreaseCounterIcon_Placement />
        </MwPlacementGridCardClanCounterItemDiv>
        <MwPlacementGridCardClanCounterItemDiv>
          <ManaLevelTokenIcon_Placement />
        </MwPlacementGridCardClanCounterItemDiv>
        <div>Purch.</div>
      </MwPlacementGridCardClanPlacementMarkersColumnDiv>

    </MwPlacementGridCardClanPlacementColumnsRowDiv>
  )
}

export const MwPlacementGrid = (props: IMwPlacementGrid) => {

  const columnTitles = props.playerSide === 'OSB' ?
    ['Clan @ Leyline 1', 'Clan @ Leyline 2', 'Clan @ Leyline 3']
    :
    ['Clan @ Leyline 3', 'Clan @ Leyline 2', 'Clan @ Leyline 1']

  return (
    <MwPlacementGridCardDiv>
      <MwPlacementGridCardBorderFrameDiv>

        <MwPlacementGridCardClanPlacementContainerDiv>
          <div style={{fontSize: 24, display: 'flex', flexDirection: 'row', height: 40, }}>
            <MwLogoPlayerSideIcon 
              playerSide={props.playerSide}
              size={30}
              />
            <div style={{width: 10}} />
            Player Marker Placements ({props.playerSide})
          </div>
          <MwPlacementGridCardClanPlacementRowDiv>
            {/* <MwPlacementGridCardClanPlacementColumnDiv>
              {columnTitles[0]}
              <ClanPlacementColumn />
            </MwPlacementGridCardClanPlacementColumnDiv> */}
            {/* <MwPlacementGridCardClanPlacementColumnDiv>
              {columnTitles[1]}
              <ClanPlacementColumn />
            </MwPlacementGridCardClanPlacementColumnDiv>
            <MwPlacementGridCardClanPlacementColumnDiv>
              {columnTitles[2]}
              <ClanPlacementColumn />
            </MwPlacementGridCardClanPlacementColumnDiv> */}

            <ClanPlacementCard columnTitle={columnTitles[0]} />
            <ClanPlacementCard columnTitle={columnTitles[1]} />
            <ClanPlacementCard columnTitle={columnTitles[2]} />

          </MwPlacementGridCardClanPlacementRowDiv>
        </MwPlacementGridCardClanPlacementContainerDiv>

        <TribePlacementsCard />

        {/* <MwPlacementGridCardConversionGridRowDiv>
          <MwPlacementGridCardConversionGridRowItemDiv>
            Tribe to Clan <ManaCounterIcon_Placement /> Allocations
          </MwPlacementGridCardConversionGridRowItemDiv>
          <MwPlacementGridCardConversionGridRowItemDiv>
            @ Leyline 1
          </MwPlacementGridCardConversionGridRowItemDiv>
          <MwPlacementGridCardConversionGridRowItemDiv>
            @ Leyline 2
          </MwPlacementGridCardConversionGridRowItemDiv>
          <MwPlacementGridCardConversionGridRowItemDiv>
            @ Leyline 3
          </MwPlacementGridCardConversionGridRowItemDiv>
        </MwPlacementGridCardConversionGridRowDiv>

        <MwPlacementGridCardConversionGridRowDiv>
          <MwPlacementGridCardConversionGridRowItemDiv>
            Tribe Mana Conversions
          </MwPlacementGridCardConversionGridRowItemDiv>
          <MwPlacementGridCardConversionGridRowItemDiv>
            <AttackCounterIcon_Placement />
          </MwPlacementGridCardConversionGridRowItemDiv>
          <MwPlacementGridCardConversionGridRowItemDiv>
            <ShieldCounterIcon_Placement />
          </MwPlacementGridCardConversionGridRowItemDiv>
          <MwPlacementGridCardConversionGridRowItemDiv>
            <PopulationIncreaseCounterIcon_Placement />          
          </MwPlacementGridCardConversionGridRowItemDiv>
        </MwPlacementGridCardConversionGridRowDiv> */}

      </MwPlacementGridCardBorderFrameDiv>
    </MwPlacementGridCardDiv>
  );
};
