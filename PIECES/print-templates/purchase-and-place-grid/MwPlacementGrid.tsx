/* eslint-disable react/jsx-pascal-case */
import { PlayerSide } from '../../../../mw-v2-game-engine/gameboard/game-play-data';
import { MwLogoPlayerSideIcon } from '../../mw-logo-player-side-icon';
import { MwPlacementGridCardBorderFrameDiv, MwPlacementGridCardClanPlacementContainerDiv, MwPlacementGridCardPlacementItemDiv, MwPlacementGridCardPlacementRowDiv } from './MwPlacementGrid-styles';
import { MwPlacementGridCardDiv } from './MwPlacementGrid-styles';
import { ClanPlacementCard } from './components/clan-placements-card';
import { ITribeToClanMarkerPlacementsCardProps, TribeToClanMarkerPlacementsCard } from './components/tribe-to-clan-marker-placements-card';
import { ITribeManaConjurationCardProps, TribeManaConjurationCard } from './components/tribe-mana-conjuration-card';
// import './MwPlacementGrid.css';


// const PlacementIconSize = 20;

// const ManaCounterIcon_Placement = () => createImgComponentFromTag('<::mana-counter::>', PlacementIconSize);
// const AttackCounterIcon_Placement = () => createImgComponentFromTag('<::attack-counter::>', PlacementIconSize);
// const ShieldCounterIcon_Placement = () => createImgComponentFromTag('<::shield-counter::>', PlacementIconSize);
// const PopulationIncreaseCounterIcon_Placement = () => createImgComponentFromTag('<::population-increase-counter::>', PlacementIconSize);
// const ManaLevelTokenIcon_Placement = () => createImgComponentFromTag('<::manalith-token::>', PlacementIconSize);


export interface IMwPlacementGrid {
  readonly playerSide: PlayerSide
  clanName1: string
  clanName2: string
  clanName3: string
  
  onReset?: () => void

  tribeManaConjurationCardProps: ITribeManaConjurationCardProps
  tribeToClanMarkerPlacementsCardProps: ITribeToClanMarkerPlacementsCardProps
}


// const ClanPlacementColumn = (_props: {
//   // title: string
// }) => {
//   return (
//     <MwPlacementGridCardClanPlacementColumnsRowDiv>

//       <MwPlacementGridCardClanPlacementMarkersColumnDiv>        
//         <MwPlacementGridCardClanCounterItemDiv>
//           <AttackCounterIcon_Placement />
//         </MwPlacementGridCardClanCounterItemDiv>
//         <MwPlacementGridCardClanCounterItemDiv>
//           <ShieldCounterIcon_Placement />
//         </MwPlacementGridCardClanCounterItemDiv>
//         <MwPlacementGridCardClanCounterItemDiv>
//           <PopulationIncreaseCounterIcon_Placement />
//         </MwPlacementGridCardClanCounterItemDiv>
//         {/* <div className="mw-placement-grid-clan-counter-item">
//           <ManaCounterIcon_Placement />
//         </div> */}
//         <MwPlacementGridCardClanCounterItemDiv>
//           <ManaLevelTokenIcon_Placement />
//         </MwPlacementGridCardClanCounterItemDiv>
//         <div>MW</div>
//       </MwPlacementGridCardClanPlacementMarkersColumnDiv>

//       <MwPlacementGridCardClanPlacementMarkersColumnDiv>
//         <MwPlacementGridCardClanCounterItemDiv>
//           <AttackCounterIcon_Placement />
//         </MwPlacementGridCardClanCounterItemDiv>
//         <MwPlacementGridCardClanCounterItemDiv>
//           <ShieldCounterIcon_Placement />
//         </MwPlacementGridCardClanCounterItemDiv>
//         <MwPlacementGridCardClanCounterItemDiv>
//           <PopulationIncreaseCounterIcon_Placement />
//         </MwPlacementGridCardClanCounterItemDiv>
//         <MwPlacementGridCardClanCounterItemDiv>
//           <ManaLevelTokenIcon_Placement />
//         </MwPlacementGridCardClanCounterItemDiv>
//         <div>Tribe</div>
//       </MwPlacementGridCardClanPlacementMarkersColumnDiv>

//       <MwPlacementGridCardClanPlacementMarkersColumnDiv>
//         <MwPlacementGridCardClanCounterItemDiv>
//           <AttackCounterIcon_Placement />
//         </MwPlacementGridCardClanCounterItemDiv>
//         <MwPlacementGridCardClanCounterItemDiv>
//           <ShieldCounterIcon_Placement />
//         </MwPlacementGridCardClanCounterItemDiv>
//         <MwPlacementGridCardClanCounterItemDiv>
//           <PopulationIncreaseCounterIcon_Placement />
//         </MwPlacementGridCardClanCounterItemDiv>
//         <MwPlacementGridCardClanCounterItemDiv>
//           <ManaLevelTokenIcon_Placement />
//         </MwPlacementGridCardClanCounterItemDiv>
//         <div>Purch.</div>
//       </MwPlacementGridCardClanPlacementMarkersColumnDiv>

//     </MwPlacementGridCardClanPlacementColumnsRowDiv>
//   )
// }

export const MwPlacementGrid = (props: IMwPlacementGrid) => {

  const columnTitles = props.playerSide === 'OSB' ?
    ['Clan @ Leyline 1', 'Clan @ Leyline 2', 'Clan @ Leyline 3']
    :
    ['Clan @ Leyline 3', 'Clan @ Leyline 2', 'Clan @ Leyline 1']

  return (
    <div style={{ overflowX: 'auto', display: 'flex', 
    // minWidth: '16in',
    // height: '5in',
    }}>
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
            {props.onReset && (
              <div style={{marginLeft: 10}}>
                <button onClick={props.onReset}>
                  Reset
                </button>
              </div>
            )}
          </div>
          <MwPlacementGridCardPlacementRowDiv>

            <MwPlacementGridCardPlacementItemDiv>
              <TribeManaConjurationCard
                {...props.tribeManaConjurationCardProps}
              />
            </MwPlacementGridCardPlacementItemDiv>

            <MwPlacementGridCardPlacementItemDiv>
              <TribeToClanMarkerPlacementsCard
                {...props.tribeToClanMarkerPlacementsCardProps}
              />
            </MwPlacementGridCardPlacementItemDiv>

            <MwPlacementGridCardPlacementItemDiv>
              <ClanPlacementCard columnTitle={columnTitles[0]} clanName={props.clanName1} />
              <div style={{ marginTop: "0.2in" }}>
                {columnTitles[0]}
              </div>
            </MwPlacementGridCardPlacementItemDiv>
            <MwPlacementGridCardPlacementItemDiv>
              <ClanPlacementCard columnTitle={columnTitles[1]} clanName={props.clanName2} />
              <div style={{ marginTop: "0.2in" }}>
                {columnTitles[1]}
              </div>
            </MwPlacementGridCardPlacementItemDiv>
            <MwPlacementGridCardPlacementItemDiv>
              <ClanPlacementCard columnTitle={columnTitles[2]} clanName={props.clanName3} />
              <div style={{ marginTop: "0.2in" }}>
                {columnTitles[2]}
              </div>
            </MwPlacementGridCardPlacementItemDiv>

          </MwPlacementGridCardPlacementRowDiv>
        </MwPlacementGridCardClanPlacementContainerDiv>

        {/* <TribePlacementsCard /> */}

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
    </div>
  );
};
