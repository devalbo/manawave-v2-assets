import { createImgComponentFromTag } from "../../../../PIECES/icons";
import { MwPlacementGridCardConversionGridRowDiv, MwPlacementGridCardConversionGridRowItemDiv } from "../purchase-and-place-grid-styles"
import { MwTribePlacementsCardBorderFrameDiv, MwTribePlacementsCardDiv, TribePlacementsCardHeaderDiv, TribePlacementsGridDiv, TribeToClanAllocationsAreaDiv, TribeToClanAllocationSectionDiv, TribeToClanAllocationSectionHeaderDiv, TribeToClanAllocationSectionMarkerItemDiv, TribeToClanAllocationSectionMarkersDiv } from "./tribe-placements-card-styles";
import { MarkerConjurationArea } from "../../game-symbols/marker-conjuration-area/marker-conjuration-area";
import { LeylineDistanceFromSource, MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { AttackCounter_MarkerView, ManaCounter_MarkerView, ShieldCounter_MarkerView } from "../../../../PIECES/tally-marker-views/marker-view";
import { MwLogoPlayerSideIcon } from "../../../../PIECES/mw-logo-player-side-icon";


const PlacementIconSize = 20;

const ManaCounterIcon_Key = () => createImgComponentFromTag('<::mana-counter::>', 12);

const ManaCounterIcon_Placement = () => createImgComponentFromTag('<::mana-counter::>', PlacementIconSize);
const AttackCounterIcon_Placement = () => createImgComponentFromTag('<::attack-counter::>', PlacementIconSize);
const ShieldCounterIcon_Placement = () => createImgComponentFromTag('<::shield-counter::>', PlacementIconSize);
const PopulationIncreaseCounterIcon_Placement = () => createImgComponentFromTag('<::population-increase-counter::>', PlacementIconSize);
const ManaLevelTokenIcon_Placement = () => createImgComponentFromTag('<::manalith-token::>', PlacementIconSize);


const TribeToClanAllocationSection = ({ leyline }: { leyline: LeylineDistanceFromSource }) => {
  return (
    <TribeToClanAllocationSectionDiv>
      <TribeToClanAllocationSectionHeaderDiv>
        Clan @ Leyline {leyline}
      </TribeToClanAllocationSectionHeaderDiv>
      <TribeToClanAllocationSectionMarkersDiv>
        <TribeToClanAllocationSectionMarkerItemDiv>
          <AttackCounter_MarkerView
            mode='show-stack'
            quantity={6}
            $hideLabel={true}
            isVertical={true}
          />
        </TribeToClanAllocationSectionMarkerItemDiv>
        <TribeToClanAllocationSectionMarkerItemDiv>
          <ShieldCounter_MarkerView
            mode='show-stack'
            quantity={6}
            $hideLabel={true}
            isVertical={true}
          />
        </TribeToClanAllocationSectionMarkerItemDiv>
        <TribeToClanAllocationSectionMarkerItemDiv>
          <ManaCounter_MarkerView
            mode='show-stack'
            quantity={6}
            $hideLabel={true}
            isVertical={true}
          />
        </TribeToClanAllocationSectionMarkerItemDiv>
      </TribeToClanAllocationSectionMarkersDiv>
    </TribeToClanAllocationSectionDiv>
  )
}


export const TribePlacementsCard = () => {

  return (
    <MwTribePlacementsCardDiv>
      <MwTribePlacementsCardBorderFrameDiv>

        <TribePlacementsCardHeaderDiv>
          <MwLogoPlayerSideIcon 
            playerSide='OSB'
            size={30}
          />
          <div style={{width: 10}} />
          Tribe Marker Placements
        </TribePlacementsCardHeaderDiv>

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

        
        <TribePlacementsGridDiv>

          <MwPlacementGridCardConversionGridRowItemDiv>
            Stockpile
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
          
          <MwPlacementGridCardConversionGridRowItemDiv>
            Conjured
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
          
          <MwPlacementGridCardConversionGridRowItemDiv>
            Starting <ManaCounterIcon_Key />
            <ManaCounter_MarkerView
              mode='show-stack'
              quantity={6}
              $hideLabel={true}
            />
          </MwPlacementGridCardConversionGridRowItemDiv>
          <MwPlacementGridCardConversionGridRowItemDiv>
            <MarkerConjurationArea
              markerManaCost={2}
              markerToConjure={MwMarkerType.MwMarkerType_AttackCounter}
              numAvailableMana={2}
              numManaSpent={6}
            />
          </MwPlacementGridCardConversionGridRowItemDiv>
          <MwPlacementGridCardConversionGridRowItemDiv>
            <MarkerConjurationArea
              markerManaCost={2}
              markerToConjure={MwMarkerType.MwMarkerType_ShieldCounter}
              numAvailableMana={2}
              numManaSpent={6}
            />
          </MwPlacementGridCardConversionGridRowItemDiv>
          <MwPlacementGridCardConversionGridRowItemDiv>
            <MarkerConjurationArea
              markerManaCost={2}
              markerToConjure={MwMarkerType.MwMarkerType_PopulationIncreaseCounter}
              numAvailableMana={2}
              numManaSpent={6}
            />
          </MwPlacementGridCardConversionGridRowItemDiv>
          
        </TribePlacementsGridDiv>

      </MwTribePlacementsCardBorderFrameDiv>
    </MwTribePlacementsCardDiv>
  )

  return (
    <>
      <MwPlacementGridCardConversionGridRowDiv>
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
      </MwPlacementGridCardConversionGridRowDiv>
    </>
  )
}