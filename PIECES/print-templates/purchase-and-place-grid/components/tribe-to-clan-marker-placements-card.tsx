import { createImgComponentFromRawSvg } from "../../../icons";
import { FromTribeToClanIconDiv, TribeToClanAllocationsAreaDiv, TribeToClanAllocationSectionDiv, TribeToClanAllocationSectionHeaderDiv, TribeToClanAllocationSectionMarkerItemDiv, TribeToClanAllocationSectionMarkersDiv, TribeToClanMarkerPlacementsCardBorderFrameDiv, TribeToClanMarkerPlacementsCardDiv, TribeToClanMarkerPlacementsCardHeaderDiv } from "./tribe-to-clan-marker-placements-card-styles";
import { LeylineDistanceFromSource } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { AttackCounter_MarkerView, PopulationIncreaseCounter_MarkerView, ShieldCounter_MarkerView } from "../../../tally-marker-views/marker-view";
import { MwLogoPlayerSideIcon } from "../../../mw-logo-player-side-icon";
import { TribeIconSvg } from "@mw-assets/PIECES/assets/TokenSvgIcons";
import { UpArrowIcon } from "../../game-symbols/arrow-icons";


// const PlacementIconSize = 20;

// const StockpileIcon = () => createImgComponentFromRawSvg(StockpileIconSvg, PlacementIconSize);
// const ConjurationIcon = () => createImgComponentFromRawSvg(ExpendedManaCounterSvg, PlacementIconSize);
// const ManaCounterIcon_Key = () => createImgComponentFromTag('<::mana-counter::>', 12);

const TribeIcon = () => createImgComponentFromRawSvg(TribeIconSvg, 16);

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


const TribeToClanAllocationSection = ({ leyline }: { leyline: LeylineDistanceFromSource }) => {
  return (
    <TribeToClanAllocationSectionDiv>
      <TribeToClanAllocationSectionHeaderDiv>
        Leyline {leyline}
        <FromTribeToClanIcon />
      </TribeToClanAllocationSectionHeaderDiv>

      <TribeToClanAllocationSectionMarkersDiv>
        <TribeToClanAllocationSectionMarkerItemDiv>
          <AttackCounter_MarkerView
            mode='show-stack'
            quantity={6}
            $hideLabel={true}
            // isVertical={true}
          />
        </TribeToClanAllocationSectionMarkerItemDiv>
        <TribeToClanAllocationSectionMarkerItemDiv>
          <ShieldCounter_MarkerView
            mode='show-stack'
            quantity={6}
            $hideLabel={true}
            // isVertical={true}
          />
        </TribeToClanAllocationSectionMarkerItemDiv>
        <TribeToClanAllocationSectionMarkerItemDiv>
          <PopulationIncreaseCounter_MarkerView
            mode='show-stack'
            quantity={6}
            $hideLabel={true}
            // isVertical={true}
          />
        </TribeToClanAllocationSectionMarkerItemDiv>
      </TribeToClanAllocationSectionMarkersDiv>
    </TribeToClanAllocationSectionDiv>
  )
}


export const TribeToClanMarkerPlacementsCard = () => {

  return (
    <TribeToClanMarkerPlacementsCardDiv>
      <TribeToClanMarkerPlacementsCardBorderFrameDiv>

        <TribeToClanMarkerPlacementsCardHeaderDiv>
          <MwLogoPlayerSideIcon 
            playerSide='OSB'
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
            leyline={LeylineDistanceFromSource.LeylineDistance_1}
          />

          <TribeToClanAllocationSection
            leyline={LeylineDistanceFromSource.LeylineDistance_2}
          />

          <TribeToClanAllocationSection
            leyline={LeylineDistanceFromSource.LeylineDistance_3}
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