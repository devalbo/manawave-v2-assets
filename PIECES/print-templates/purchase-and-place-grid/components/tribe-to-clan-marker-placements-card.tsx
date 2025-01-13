import { createImgComponentFromRawSvg } from "../../../icons";
import { FromTribeToClanIconDiv, TribeToClanAllocationsAreaDiv, TribeToClanAllocationSectionDiv, TribeToClanAllocationSectionHeaderDiv, TribeToClanAllocationSectionMarkerItemDiv, TribeToClanAllocationSectionMarkersDiv, TribeToClanMarkerPlacementsCardBorderFrameDiv, TribeToClanMarkerPlacementsCardDiv, TribeToClanMarkerPlacementsCardHeaderDiv } from "./tribe-to-clan-marker-placements-card-styles";
import { LeylineDistanceFromSource, MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { MwLogoPlayerSideIcon } from "../../../mw-logo-player-side-icon";
import { TribeIconSvg } from "@mw-assets/PIECES/assets/TokenSvgIcons";
import { UpArrowIcon } from "../../game-symbols/arrow-icons";
import { AttackCounter_MarkerIndicator, PopulationIncreaseCounter_MarkerIndicator, ShieldCounter_MarkerIndicator } from "../../game-symbols/marker-indicator/marker-indicator";
import { PlayerSide } from "@mw-game-engine/gameboard/game-play-data";


// const PlacementIconSize = 20;

// const StockpileIcon = () => createImgComponentFromRawSvg(StockpileIconSvg, PlacementIconSize);
// const ConjurationIcon = () => createImgComponentFromRawSvg(ExpendedManaCounterSvg, PlacementIconSize);
// const ManaCounterIcon_Key = () => createImgComponentFromTag('<::mana-counter::>', 12);

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

// const ManaCounterIcon_Placement = () => createImgComponentFromTag('<::mana-counter::>', PlacementIconSize);
// const AttackCounterIcon_Placement = () => createImgComponentFromTag('<::attack-counter::>', PlacementIconSize);
// const ShieldCounterIcon_Placement = () => createImgComponentFromTag('<::shield-counter::>', PlacementIconSize);
// const PopulationIncreaseCounterIcon_Placement = () => createImgComponentFromTag('<::population-increase-counter::>', PlacementIconSize);
// const ManaLevelTokenIcon_Placement = () => createImgComponentFromTag('<::manalith-token::>', PlacementIconSize);


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
            {/* <AttackCounter_MarkerView
              mode='show-stack'
              quantity={6}
              $hideLabel={true}
              // isVertical={true}
            /> */}
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
            {/* <ShieldCounter_MarkerView
              mode='show-stack'
              quantity={6}
              $hideLabel={true}
              // isVertical={true}
            /> */}
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
            {/* <PopulationIncreaseCounter_MarkerView
              mode='show-stack'
              quantity={6}
              $hideLabel={true}
              // isVertical={true}
            /> */}
            <PopulationIncreaseCounter_MarkerIndicator
              quantity={thisLeyinePopulationIncreaseCounterCount}
              $onZeroAmountBehavior='dim'
            />
  
          </TribeToClanAllocationSectionMarkerItemDiv>
        </TribeToClanAllocationSectionMarkersDiv>
      </TribeToClanAllocationSectionDiv>
    )
  }
  
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

        {/* <TribeToClanAllocationsAreaDiv>

          <TribeToClanAllocationSection
            leyline={LeylineDistanceFromSource.LeylineDistance_2}
          />

        </TribeToClanAllocationsAreaDiv> */}

        <TribeToClanAllocationsAreaDiv>

          <TribeToClanAllocationSection
            thisLeyline={LeylineDistanceFromSource.LeylineDistance_1}
          />

          <TribeToClanAllocationSection
            thisLeyline={LeylineDistanceFromSource.LeylineDistance_2}
          />

          <TribeToClanAllocationSection
            thisLeyline={LeylineDistanceFromSource.LeylineDistance_3}
          />

        </TribeToClanAllocationsAreaDiv>

        {/* Clan Allocations         */}

{/*         
        <TribePlacementsGridDiv>

          <MwTribePlacementCardConversionGridRowItemDiv>
            <StockpileIcon />
          </MwTribePlacementCardConversionGridRowItemDiv>
          <MwTribePlacementCardConversionGridRowItemDiv>
            <MarkerFlowArea
              source='from-stockpile'
              sinkMarkerType={MwMarkerType.MwMarkerType_AttackCounter}
            />
          </MwTribePlacementCardConversionGridRowItemDiv>
          <MwTribePlacementCardConversionGridRowItemDiv>
            <MarkerFlowArea
              source='from-stockpile'
              sinkMarkerType={MwMarkerType.MwMarkerType_ShieldCounter}
            />
          </MwTribePlacementCardConversionGridRowItemDiv>
          <MwTribePlacementCardConversionGridRowItemDiv>
            <MarkerFlowArea
              source='from-stockpile'
              sinkMarkerType={MwMarkerType.MwMarkerType_PopulationIncreaseCounter}
            />
          </MwTribePlacementCardConversionGridRowItemDiv>
          
          <MwTribePlacementCardConversionGridRowItemDiv>
            <ConjurationIcon />
          </MwTribePlacementCardConversionGridRowItemDiv>
          <MwTribePlacementCardConversionGridRowItemDiv>
            <MarkerFlowArea
              source='from-conjuration'
              sinkMarkerType={MwMarkerType.MwMarkerType_AttackCounter}
            />
          </MwTribePlacementCardConversionGridRowItemDiv>
          <MwTribePlacementCardConversionGridRowItemDiv>
            <MarkerFlowArea
              source='from-conjuration'
              sinkMarkerType={MwMarkerType.MwMarkerType_ShieldCounter}
            />
          </MwTribePlacementCardConversionGridRowItemDiv>
          <MwTribePlacementCardConversionGridRowItemDiv>
            <MarkerFlowArea
              source='from-conjuration'
              sinkMarkerType={MwMarkerType.MwMarkerType_PopulationIncreaseCounter}
            />
          </MwTribePlacementCardConversionGridRowItemDiv>
          
          <MwTribePlacementCardConversionGridRowItemDiv>
            Starting <ManaCounterIcon_Key />
            <ManaCounter_MarkerView
              mode='show-stack'
              quantity={6}
              $hideLabel={true}
            />
          </MwTribePlacementCardConversionGridRowItemDiv>
          <MwTribePlacementCardConversionGridRowItemDiv>
            <MarkerConjurationArea
              markerManaCost={2}
              markerToConjure={MwMarkerType.MwMarkerType_AttackCounter}
              numAvailableMana={2}
              numManaSpent={6}
            />
          </MwTribePlacementCardConversionGridRowItemDiv>
          <MwTribePlacementCardConversionGridRowItemDiv>
            <MarkerConjurationArea
              markerManaCost={2}
              markerToConjure={MwMarkerType.MwMarkerType_ShieldCounter}
              numAvailableMana={2}
              numManaSpent={6}
            />
          </MwTribePlacementCardConversionGridRowItemDiv>
          <MwTribePlacementCardConversionGridRowItemDiv>
            <MarkerConjurationArea
              markerManaCost={2}
              markerToConjure={MwMarkerType.MwMarkerType_PopulationIncreaseCounter}
              numAvailableMana={2}
              numManaSpent={6}
            />
          </MwTribePlacementCardConversionGridRowItemDiv>
          
        </TribePlacementsGridDiv> */}

      </TribeToClanMarkerPlacementsCardBorderFrameDiv>
    </TribeToClanMarkerPlacementsCardDiv>
  )

  // return (
  //   <>
  //     <MwPlacementGridCardConversionGridRowDiv>
  //       <MwPlacementGridCardConversionGridRowItemDiv>
  //         Tribe to Clan <ManaCounterIcon_Placement /> Allocations
  //       </MwPlacementGridCardConversionGridRowItemDiv>
  //       <MwPlacementGridCardConversionGridRowItemDiv>
  //         @ Leyline 1
  //       </MwPlacementGridCardConversionGridRowItemDiv>
  //       <MwPlacementGridCardConversionGridRowItemDiv>
  //         @ Leyline 2
  //       </MwPlacementGridCardConversionGridRowItemDiv>
  //       <MwPlacementGridCardConversionGridRowItemDiv>
  //         @ Leyline 3
  //       </MwPlacementGridCardConversionGridRowItemDiv>
  //     </MwPlacementGridCardConversionGridRowDiv>

  //     <MwPlacementGridCardConversionGridRowDiv>
  //       <MwPlacementGridCardConversionGridRowItemDiv>
  //         Tribe Mana Conversions
  //       </MwPlacementGridCardConversionGridRowItemDiv>
  //       <MwPlacementGridCardConversionGridRowItemDiv>
  //         <AttackCounterIcon_Placement />
  //       </MwPlacementGridCardConversionGridRowItemDiv>
  //       <MwPlacementGridCardConversionGridRowItemDiv>
  //         <ShieldCounterIcon_Placement />
  //       </MwPlacementGridCardConversionGridRowItemDiv>
  //       <MwPlacementGridCardConversionGridRowItemDiv>
  //         <PopulationIncreaseCounterIcon_Placement />          
  //       </MwPlacementGridCardConversionGridRowItemDiv>
  //     </MwPlacementGridCardConversionGridRowDiv>
  //   </>
  // )
}