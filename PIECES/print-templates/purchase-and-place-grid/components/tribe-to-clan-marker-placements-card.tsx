import { createImgComponentFromRawSvg } from "../../../icons";
import {
  FromTribeToClanIconDiv,
  TribeToClanAllocationsAreaDiv,
  TribeToClanAllocationSectionDiv,
  TribeToClanAllocationSectionHeaderDiv,
  TribeToClanAllocationSectionMarkerItemDiv,
  TribeToClanAllocationSectionMarkersDiv,
  TribeToClanMarkerPlacementsCardBorderFrameDiv,
  TribeToClanMarkerPlacementsCardDiv,
  TribeToClanMarkerPlacementsCardHeaderDiv,
} from "./tribe-to-clan-marker-placements-card-styles";
import { LeylineDistanceFromSource, MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { MwLogoPlayerSideIcon } from "../../../mw-logo-player-side-icon";
import { TribeIconSvg } from "@mw-assets/PIECES/assets/TokenSvgIcons";
import { UpArrowIcon } from "../../game-symbols/arrow-icons";
import { AttackCounter_MarkerIndicator, PopulationIncreaseCounter_MarkerIndicator, ShieldCounter_MarkerIndicator } from "../../game-symbols/marker-indicator/marker-indicator";
import { PlayerSide } from "@mw-game-engine/gameboard/game-play-data";


const TribeIcon = () => createImgComponentFromRawSvg(TribeIconSvg, 16);


export interface ITribeToClanMarkerPlacementsCardInteractions {
  onAttackCounterPlaced: (leyline: LeylineDistanceFromSource) => void
  onShieldCounterPlaced: (leyline: LeylineDistanceFromSource) => void
  onPopulationIncreaseCounterPlaced: (leyline: LeylineDistanceFromSource) => void
}


export interface ITribeToClanMarkerPlacementsCardProps {
  playerSide: PlayerSide

  tribeToClanAllocations: Map<LeylineDistanceFromSource, MwMarkerType[]>

  interactions: ITribeToClanMarkerPlacementsCardInteractions | null
}


const FromTribeToClanIcon = () => {
  return (
    <FromTribeToClanIconDiv>
      <TribeIcon /> <div style={{width: 5, }} /><UpArrowIcon size={10} />
    </FromTribeToClanIconDiv>
  )
}


export const TribeToClanMarkerPlacementsCard = (props: ITribeToClanMarkerPlacementsCardProps) => {

  const TribeToClanAllocationSection = ({ thisLeyline }: { thisLeyline: LeylineDistanceFromSource }) => {

    const thisLeyineAttackCounterCount = props.tribeToClanAllocations.get(thisLeyline)?.
      filter(marker => marker === MwMarkerType.MwMarkerType_AttackCounter).length ?? 0;
    const thisLeyineShieldCounterCount = props.tribeToClanAllocations.get(thisLeyline)?.
      filter(marker => marker === MwMarkerType.MwMarkerType_ShieldCounter).length ?? 0;
    const thisLeyinePopulationIncreaseCounterCount = props.tribeToClanAllocations.get(thisLeyline)?.
      filter(marker => marker === MwMarkerType.MwMarkerType_PopulationIncreaseCounter).length ?? 0;
  
    return (
      <TribeToClanAllocationSectionDiv>
        <TribeToClanAllocationSectionHeaderDiv>
          Leyline {thisLeyline}
          <FromTribeToClanIcon />
        </TribeToClanAllocationSectionHeaderDiv>
  
        <TribeToClanAllocationSectionMarkersDiv>
          <TribeToClanAllocationSectionMarkerItemDiv
            onClick={() => {
              props.interactions?.onAttackCounterPlaced(thisLeyline);
            }}
          >
            <AttackCounter_MarkerIndicator
              quantity={thisLeyineAttackCounterCount}
              $onZeroAmountBehavior='dim'
            />
          </TribeToClanAllocationSectionMarkerItemDiv>
          <TribeToClanAllocationSectionMarkerItemDiv
            onClick={() => {
              props.interactions?.onShieldCounterPlaced(thisLeyline);
            }}
          >
            <ShieldCounter_MarkerIndicator
              quantity={thisLeyineShieldCounterCount}
              $onZeroAmountBehavior='dim'
            />
  
          </TribeToClanAllocationSectionMarkerItemDiv>
          <TribeToClanAllocationSectionMarkerItemDiv
            onClick={() => {
              props.interactions?.onPopulationIncreaseCounterPlaced(thisLeyline);
            }}
          >
            <PopulationIncreaseCounter_MarkerIndicator
              quantity={thisLeyinePopulationIncreaseCounterCount}
              $onZeroAmountBehavior='dim'
            />
  
          </TribeToClanAllocationSectionMarkerItemDiv>
        </TribeToClanAllocationSectionMarkersDiv>
      </TribeToClanAllocationSectionDiv>
    )
  }

  const playerSideLeylinesForPlacementColumns = props.playerSide === "OSB" ? [
    LeylineDistanceFromSource.LeylineDistance_1,
    LeylineDistanceFromSource.LeylineDistance_2,
    LeylineDistanceFromSource.LeylineDistance_3,
  ] : [
    LeylineDistanceFromSource.LeylineDistance_3,
    LeylineDistanceFromSource.LeylineDistance_2,
    LeylineDistanceFromSource.LeylineDistance_1,
  ];
  
  return (
    <TribeToClanMarkerPlacementsCardDiv>
      <TribeToClanMarkerPlacementsCardBorderFrameDiv>

        <TribeToClanMarkerPlacementsCardHeaderDiv>
          <MwLogoPlayerSideIcon 
            playerSide={props.playerSide}
            size={30}
          />
          <div style={{width: 10}} />
          Tribe to Clan Marker Placements
        </TribeToClanMarkerPlacementsCardHeaderDiv>

        <TribeToClanAllocationsAreaDiv>

          <TribeToClanAllocationSection
            thisLeyline={playerSideLeylinesForPlacementColumns[0]}
          />

          <TribeToClanAllocationSection
            thisLeyline={playerSideLeylinesForPlacementColumns[1]}
          />

          <TribeToClanAllocationSection
            thisLeyline={playerSideLeylinesForPlacementColumns[2]}
          />

        </TribeToClanAllocationsAreaDiv>
        
      </TribeToClanMarkerPlacementsCardBorderFrameDiv>
    </TribeToClanMarkerPlacementsCardDiv>
  )
}
