import { MarkerConjurationArea } from "../../game-symbols/marker-conjuration-area/marker-conjuration-area";
import { MwMarkerType } from "../../../../mw-v2-protobufs/protofiles-out/manawave-types";
import { MwLogoPlayerSideIcon } from "../../../mw-logo-player-side-icon";
import { MarkerFlowArea } from "../../game-symbols/marker-flow-area/marker-flow-area";
import { TribeManaConjurationCardBorderFrameDiv, TribeManaConjurationCardHeaderDiv, TribeManaConjurationGridDiv, TribeManaConjurationGridItemDiv, TribeManaConjurationStartingManaDiv } from "./tribe-mana-conjuration-card-styles";
import { TribeManaConjurationCardDiv } from "./tribe-mana-conjuration-card-styles";
import { MwMarkerIndicator } from "../../game-symbols/marker-indicator/marker-indicator";


export const TribeManaConjurationCard = () => {

  return (
    <TribeManaConjurationCardDiv>
      <TribeManaConjurationCardBorderFrameDiv>

        <TribeManaConjurationCardHeaderDiv>
          <MwLogoPlayerSideIcon 
            playerSide='OSB'
            size={30}
          />
          <div style={{width: 10}} />
          Tribe Stockpile & Conjuration
        </TribeManaConjurationCardHeaderDiv>
        
        <TribeManaConjurationGridDiv>
          
          <TribeManaConjurationGridItemDiv>
            {/* <MarkerFlowArea
              source='from-stockpile'
              sinkMarkerType={MwMarkerType.MwMarkerType_AttackCounter}
            /> */}
            <MwMarkerIndicator
              quantity={0}
              markerType='<::attack-counter::>'
              markerSize={30}
              // $backgroundColorHexCode='#0000ff'
              // $textColorHexCode='#ffffff'
              $onZeroAmountBehavior='show-stockpile-to-marker-icon'
            />
          </TribeManaConjurationGridItemDiv>
          <TribeManaConjurationGridItemDiv>
            <MarkerFlowArea
              source='from-stockpile'
              sinkMarkerType={MwMarkerType.MwMarkerType_ShieldCounter}
            />
          </TribeManaConjurationGridItemDiv>
          <TribeManaConjurationGridItemDiv>
            <MarkerFlowArea
              source='from-stockpile'
              sinkMarkerType={MwMarkerType.MwMarkerType_PopulationIncreaseCounter}
            />
          </TribeManaConjurationGridItemDiv>
          
          <TribeManaConjurationGridItemDiv>
            <MarkerFlowArea
              source='from-conjuration'
              sinkMarkerType={MwMarkerType.MwMarkerType_AttackCounter}
            />
          </TribeManaConjurationGridItemDiv>
          <TribeManaConjurationGridItemDiv>
            <MarkerFlowArea
              source='from-conjuration'
              sinkMarkerType={MwMarkerType.MwMarkerType_ShieldCounter}
            />
          </TribeManaConjurationGridItemDiv>
          <TribeManaConjurationGridItemDiv>
            <MarkerFlowArea
              source='from-conjuration'
              sinkMarkerType={MwMarkerType.MwMarkerType_PopulationIncreaseCounter}
            />
          </TribeManaConjurationGridItemDiv>
          
          <TribeManaConjurationGridItemDiv  onClick={() => {
            console.log('clicked - TribeManaConjurationStartingManaDiv attack');
          }}>
            <MarkerConjurationArea
              markerManaCost={2}
              markerToConjure={MwMarkerType.MwMarkerType_AttackCounter}
              numAvailableMana={2}
              numManaSpent={6}
            />
          </TribeManaConjurationGridItemDiv>
          <TribeManaConjurationGridItemDiv>
            <MarkerConjurationArea
              markerManaCost={2}
              markerToConjure={MwMarkerType.MwMarkerType_ShieldCounter}
              numAvailableMana={2}
              numManaSpent={6}
            />
          </TribeManaConjurationGridItemDiv>
          <TribeManaConjurationGridItemDiv>
            <MarkerConjurationArea
              markerManaCost={2}
              markerToConjure={MwMarkerType.MwMarkerType_PopulationIncreaseCounter}
              numAvailableMana={2}
              numManaSpent={6}
            />
          </TribeManaConjurationGridItemDiv>
          
        </TribeManaConjurationGridDiv>

        <TribeManaConjurationStartingManaDiv>

          <MwMarkerIndicator
            quantity={0}
            markerType='<::mana-counter::>'
            markerSize={30}
            // $backgroundColorHexCode='#0000ff'
            // $textColorHexCode='#ffffff'
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />

          {/* <MarkerFlowArea
            source='from-manawave'
            sinkMarkerType={MwMarkerType.MwMarkerType_ManaCounter}
          />
           */}
        </TribeManaConjurationStartingManaDiv>

      </TribeManaConjurationCardBorderFrameDiv>
    </TribeManaConjurationCardDiv>
  )
}
