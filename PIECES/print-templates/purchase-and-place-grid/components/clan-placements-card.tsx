import { createImgComponentFromTag } from "../../../../PIECES/icons";
import { MwPlacementGridCardClanCounterItemDiv, MwPlacementGridCardClanPlacementColumnDiv, MwPlacementGridCardClanPlacementColumnsRowDiv, MwPlacementGridCardClanPlacementMarkersColumnDiv } from "../purchase-and-place-grid-styles";
import { MwClanPlacementsCardDiv, MwClanPlacementsCardBorderFrameDiv } from "./clan-placements-card-styles";


const PlacementIconSize = 20;

const ManaCounterIcon_Placement = () => createImgComponentFromTag('<::mana-counter::>', PlacementIconSize);
const AttackCounterIcon_Placement = () => createImgComponentFromTag('<::attack-counter::>', PlacementIconSize);
const ShieldCounterIcon_Placement = () => createImgComponentFromTag('<::shield-counter::>', PlacementIconSize);
const PopulationIncreaseCounterIcon_Placement = () => createImgComponentFromTag('<::population-increase-counter::>', PlacementIconSize);
const ManaLevelTokenIcon_Placement = () => createImgComponentFromTag('<::manalith-token::>', PlacementIconSize);


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

export const ClanPlacementCard = (props: {
  columnTitle: string;
}) => {
  return (
    <MwClanPlacementsCardDiv>
      <MwClanPlacementsCardBorderFrameDiv>
      <MwPlacementGridCardClanPlacementColumnDiv>
        {props.columnTitle}
        <ClanPlacementColumn />
      </MwPlacementGridCardClanPlacementColumnDiv>
      </MwClanPlacementsCardBorderFrameDiv>
    </MwClanPlacementsCardDiv>
  )
}
