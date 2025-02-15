/* eslint-disable react/jsx-pascal-case */
import { PlayerSide } from '../../../../mw-v2-game-engine/gameboard/game-play-data';
import { MwLogoPlayerSideIcon } from '../../mw-logo-player-side-icon';
import { MwPlacementGridCardBorderFrameDiv, MwPlacementGridCardClanPlacementContainerDiv, MwPlacementGridCardPlacementItemDiv, MwPlacementGridCardPlacementRowDiv } from './MwPlacementGrid-styles';
import { MwPlacementGridCardDiv } from './MwPlacementGrid-styles';
import { ClanPlacementCard, IClanPlacementCardProps } from './components/clan-placement-card';
import { ITribeToClanMarkerPlacementsCardProps, TribeToClanMarkerPlacementsCard } from './components/tribe-to-clan-marker-placements-card';
import { ITribeManaConjurationCardProps, TribeManaConjurationCard } from './components/tribe-mana-conjuration-card';
import { LeylineDistanceFromSource } from '@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types';


export interface IMwPlacementGrid {
  readonly playerSide: PlayerSide
  
  onReset?: () => void

  tribeManaConjurationCardProps: ITribeManaConjurationCardProps
  tribeToClanMarkerPlacementsCardProps: ITribeToClanMarkerPlacementsCardProps

  clanPlacementCardsProps: Map<LeylineDistanceFromSource, IClanPlacementCardProps>
}


export const MwPlacementGrid = (props: IMwPlacementGrid) => {

  const columnTitles = props.playerSide === 'OSB' ?
    ['Clan @ Leyline 1', 'Clan @ Leyline 2', 'Clan @ Leyline 3']
    :
    ['Clan @ Leyline 3', 'Clan @ Leyline 2', 'Clan @ Leyline 1']

  const clanCardProps = props.playerSide === 'OSB' ?
    [
      props.clanPlacementCardsProps.get(LeylineDistanceFromSource.LeylineDistance_1)!,
      props.clanPlacementCardsProps.get(LeylineDistanceFromSource.LeylineDistance_2)!,
      props.clanPlacementCardsProps.get(LeylineDistanceFromSource.LeylineDistance_3)!,
    ] : [
      props.clanPlacementCardsProps.get(LeylineDistanceFromSource.LeylineDistance_3)!,
      props.clanPlacementCardsProps.get(LeylineDistanceFromSource.LeylineDistance_2)!,
      props.clanPlacementCardsProps.get(LeylineDistanceFromSource.LeylineDistance_1)!,
    ]

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
              <ClanPlacementCard
                {...clanCardProps[0]}
              />
              <div style={{ marginTop: "0.2in" }}>
                {columnTitles[0]}
              </div>
            </MwPlacementGridCardPlacementItemDiv>
            <MwPlacementGridCardPlacementItemDiv>
              <ClanPlacementCard
                {...clanCardProps[1]}
              />
              <div style={{ marginTop: "0.2in" }}>
                {columnTitles[1]}
              </div>
            </MwPlacementGridCardPlacementItemDiv>
            <MwPlacementGridCardPlacementItemDiv>
              <ClanPlacementCard
                {...clanCardProps[2]}
              />
              <div style={{ marginTop: "0.2in" }}>
                {columnTitles[2]}
              </div>
            </MwPlacementGridCardPlacementItemDiv>

          </MwPlacementGridCardPlacementRowDiv>
        </MwPlacementGridCardClanPlacementContainerDiv>

      </MwPlacementGridCardBorderFrameDiv>
    </MwPlacementGridCardDiv>
    </div>
  );
};
