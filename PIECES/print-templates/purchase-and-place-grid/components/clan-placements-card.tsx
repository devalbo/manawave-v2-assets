import { MwMarkerType } from "@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types";
import {
  MwClanPlacementsCardDiv,
  MwClanPlacementsCardBorderFrameDiv,
  MwClanPlacementsCardGridDiv,
  MwClanPlacementsCardGridItemDiv,
  StartingManaCounterDiv
} from "./clan-placements-card-styles";
import { MarkerConjurationArea } from "../../game-symbols/marker-conjuration-area/marker-conjuration-area";

import { MarkerFlowArea } from "../../game-symbols/marker-flow-area/marker-flow-area";
import { AttackCounter_MarkerIndicator, ManaCounter_MarkerIndicator, ManalithToken_MarkerIndicator, PopulationIncreaseCounter_MarkerIndicator, ShieldCounter_MarkerIndicator } from "../../game-symbols/marker-indicator/marker-indicator";
import { MarkerSourceIcon } from "../../game-symbols/marker-source-icon/marker-source-icon";


// const PlacementIconSize = 20;

// const ManaCounterIcon_Key = () => createImgComponentFromTag('<::mana-counter::>', 12);

// const ManaCounterIcon_Placement = () => createImgComponentFromTag('<::mana-counter::>', PlacementIconSize);
// const AttackCounterIcon_Placement = () => createImgComponentFromTag('<::attack-counter::>', PlacementIconSize);
// const ShieldCounterIcon_Placement = () => createImgComponentFromTag('<::shield-counter::>', PlacementIconSize);
// const PopulationIncreaseCounterIcon_Placement = () => createImgComponentFromTag('<::population-increase-counter::>', PlacementIconSize);
// const ManaLevelTokenIcon_Placement = () => createImgComponentFromTag('<::manalith-token::>', PlacementIconSize);


// const ClanManaManagementArea = () => {
//   return (
//     // <div style={{
//     //   display: 'flex',
//     //   flexDirection: 'row',
//     //   alignItems: 'space-between',
//     //   justifyContent: 'space-around',
//     //   width: '100%',
//     // }}>
//     <ClanManaManagementAreaDiv>
//       <ClanManaManagementAreaItemDiv>
//         {/* <ManaCounter_MarkerView
//           mode='show-stack'
//           quantity={6}
//           $hideLabel={true}
//         /> */}
//         <StartingManaCounterDiv>
//         {/* Stockpile <ManaCounterIcon_Key /> */}
//         <MarkerFlowArea
//           source='from-manawave'
//           sinkMarkerType={MwMarkerType.MwMarkerType_ManaCounter}
//         />
//         </StartingManaCounterDiv>
//       </ClanManaManagementAreaItemDiv>
//       <ClanManaManagementAreaItemDiv>
//         <MarkerConjurationArea
//           markerManaCost={2}
//           markerToConjure={MwMarkerType.MwMarkerType_ManalithToken}
//           numAvailableMana={2}
//           numManaSpent={6}
//         />
//       </ClanManaManagementAreaItemDiv>
//       <ClanManaManagementAreaItemDiv>
//         <MarkerFlowArea
//           source='from-conjuration'
//           sinkMarkerType={MwMarkerType.MwMarkerType_ManalithToken}
//         />
//       </ClanManaManagementAreaItemDiv>

//     {/* </div> */}
//     </ClanManaManagementAreaDiv>
//   )
// }


const MainClanPlacementGrid = () => {
  return (
    <MwClanPlacementsCardGridDiv>      

      {/* Row 1 */}
      <MwClanPlacementsCardGridItemDiv>
        {/* <MarkerFlowArea
          source='from-tribe'
          sinkMarkerType={MwMarkerType.MwMarkerType_AttackCounter}
        /> */}
        <MarkerSourceIcon
          source='from-tribe'
          sourceIconCount={1}
        />
        <AttackCounter_MarkerIndicator
          quantity={0}
          $onZeroAmountBehavior='show-stockpile-to-marker-icon'
        />

      </MwClanPlacementsCardGridItemDiv>
      <MwClanPlacementsCardGridItemDiv>
        {/* <MarkerFlowArea
          source='from-tribe'
          sinkMarkerType={MwMarkerType.MwMarkerType_ShieldCounter}
        /> */}
        <MarkerSourceIcon
          source='from-tribe'
          sourceIconCount={1}
        />
        <ShieldCounter_MarkerIndicator
          quantity={0}
          $onZeroAmountBehavior='show-stockpile-to-marker-icon'
        />

      </MwClanPlacementsCardGridItemDiv>
      <MwClanPlacementsCardGridItemDiv>
        {/* <MarkerFlowArea
          source='from-tribe'
          sinkMarkerType={MwMarkerType.MwMarkerType_PopulationIncreaseCounter}
        /> */}
        <MarkerSourceIcon
          source='from-tribe'
          sourceIconCount={1}
        />
        <PopulationIncreaseCounter_MarkerIndicator
          quantity={0}
          $onZeroAmountBehavior='show-stockpile-to-marker-icon'
        />

      </MwClanPlacementsCardGridItemDiv>
      
      {/* Row 2 */}
      <MwClanPlacementsCardGridItemDiv>
        {/* <MarkerFlowArea
          source='from-conjuration'
          sinkMarkerType={MwMarkerType.MwMarkerType_AttackCounter}
        /> */}
        <MarkerSourceIcon
          source='from-expended-mana'
          sourceIconCount={1}
        />
        <AttackCounter_MarkerIndicator
          quantity={0}
          $onZeroAmountBehavior='show-stockpile-to-marker-icon'
        />

      </MwClanPlacementsCardGridItemDiv>
      <MwClanPlacementsCardGridItemDiv>
        {/* <MarkerFlowArea
          source='from-conjuration'
          sinkMarkerType={MwMarkerType.MwMarkerType_ShieldCounter}
        /> */}
        <MarkerSourceIcon
          source='from-expended-mana'
          sourceIconCount={1}
        />
        <ShieldCounter_MarkerIndicator
          quantity={0}
          $onZeroAmountBehavior='show-stockpile-to-marker-icon'
        />

      </MwClanPlacementsCardGridItemDiv>
      <MwClanPlacementsCardGridItemDiv>
        {/* <MarkerFlowArea
          source='from-conjuration'
          sinkMarkerType={MwMarkerType.MwMarkerType_PopulationIncreaseCounter}
        /> */}
        <MarkerSourceIcon
          source='from-expended-mana'
          sourceIconCount={1}
        />
        <PopulationIncreaseCounter_MarkerIndicator
          quantity={0}
          $onZeroAmountBehavior='show-stockpile-to-marker-icon'
        />
      </MwClanPlacementsCardGridItemDiv>
      
      {/* Row 3 */}
      <MwClanPlacementsCardGridItemDiv>
        {/* <MarkerConjurationArea
          markerManaCost={2}
          markerToConjure={MwMarkerType.MwMarkerType_AttackCounter}
          numAvailableMana={2}
          numManaSpent={6}
        />         */}
        <MarkerSourceIcon
          source='from-conjuration'
          sourceIconCount={2}
        />
        <AttackCounter_MarkerIndicator
          quantity={0}
          $onZeroAmountBehavior='show-stockpile-to-marker-icon'
        />
      </MwClanPlacementsCardGridItemDiv>
      <MwClanPlacementsCardGridItemDiv>
        {/* <MarkerConjurationArea
          markerManaCost={2}
          markerToConjure={MwMarkerType.MwMarkerType_ShieldCounter}
          numAvailableMana={2}
          numManaSpent={6}
        /> */}
        <MarkerSourceIcon
          source='from-conjuration'
          sourceIconCount={2}
        />
        <ShieldCounter_MarkerIndicator
          quantity={0}
          $onZeroAmountBehavior='show-stockpile-to-marker-icon'
        />
      </MwClanPlacementsCardGridItemDiv>
      <MwClanPlacementsCardGridItemDiv>
        {/* <MarkerConjurationArea
          markerManaCost={2}
          markerToConjure={MwMarkerType.MwMarkerType_PopulationIncreaseCounter}
          numAvailableMana={2}
          numManaSpent={6}
        /> */}
        <MarkerSourceIcon
          source='from-conjuration'
          sourceIconCount={2}
        />
        <PopulationIncreaseCounter_MarkerIndicator
          quantity={0}
          $onZeroAmountBehavior='show-stockpile-to-marker-icon'
        />
      </MwClanPlacementsCardGridItemDiv>

      {/* Row 4 */}
      <MwClanPlacementsCardGridItemDiv>
        <StartingManaCounterDiv>
        {/* <MarkerFlowArea
          source='from-manawave'
          sinkMarkerType={MwMarkerType.MwMarkerType_ManaCounter}
        /> */}
          <MarkerSourceIcon
            source='from-stockpile'
            sourceIconCount={1}
          />
          <ManaCounter_MarkerIndicator
            quantity={0}
            $onZeroAmountBehavior='show-stockpile-to-marker-icon'
          />
        </StartingManaCounterDiv>
      </MwClanPlacementsCardGridItemDiv>
      <MwClanPlacementsCardGridItemDiv>
        {/* <MarkerConjurationArea
          markerManaCost={2}
          markerToConjure={MwMarkerType.MwMarkerType_ManalithToken}
          numAvailableMana={2}
          numManaSpent={6}
        /> */}
        <MarkerSourceIcon
          source='from-conjuration'
          sourceIconCount={1}
        />
        <ManalithToken_MarkerIndicator
          quantity={0}
          $onZeroAmountBehavior='show-stockpile-to-marker-icon'
        />
      </MwClanPlacementsCardGridItemDiv>
      <MwClanPlacementsCardGridItemDiv>
        {/* <MarkerFlowArea
          source='from-conjuration'
          sinkMarkerType={MwMarkerType.MwMarkerType_ManalithToken}
        /> */}
        <MarkerSourceIcon
          source='from-expended-mana'
          sourceIconCount={1}
        />
        <ManalithToken_MarkerIndicator
          quantity={0}
          $onZeroAmountBehavior='show-stockpile-to-marker-icon'
        />
      </MwClanPlacementsCardGridItemDiv>

    </MwClanPlacementsCardGridDiv>
  )
}

export const ClanPlacementCard = (props: {
  columnTitle: string;
  clanName: string
}) => {
  return (
    <MwClanPlacementsCardDiv>
      <MwClanPlacementsCardBorderFrameDiv>
        {/* <MwPlacementGridCardClanPlacementColumnDiv> */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          {props.clanName} Allocations
        </div>

          <MainClanPlacementGrid />

          {/* <ClanManaManagementArea /> */}

        {/* </MwPlacementGridCardClanPlacementColumnDiv> */}
      </MwClanPlacementsCardBorderFrameDiv>
    </MwClanPlacementsCardDiv>
  )
}
