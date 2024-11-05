import { PlayerSide } from "../../game-data/game-play-data";
import { FamilyRanksRange } from "../../game-play/phase-views/constants"
import { LeylineDistanceFromSource } from "../../protobufs/protofiles-out/manawave-types";
import { createMwBoardPlayerSideCoordinateKey } from "../type-defs/branded-string-types";
import { createImgComponentFromTag } from "./icons";
import { MwLogoPlayerSideIcon } from "./mw-logo-player-side-icon";
import "./mw-print-mode-selection-grid-component.css"


const ManalithTokenSummaryIcon = () => createImgComponentFromTag('<::manalith-token::>', 24);


const MwModeSelectionClanColumn = (props: {
  title: string,
  playerSide: PlayerSide,
  leylineColumn: LeylineDistanceFromSource,
}) => {
  return <div className="mw-print-mode-selection-column" 
    // style={{width: 30}}
    >
      <div className="mw-print-mode-selection-item">
        {props.title}
      </div>
      <div className="mw-print-mode-selection-item">
        <ManalithTokenSummaryIcon />
      </div>
      <div className="mw-print-mode-selection-item">
        Clan Mode
      </div>
      {
        FamilyRanksRange.map(fr => {
          const coordinate = createMwBoardPlayerSideCoordinateKey(props.playerSide, props.leylineColumn, fr);
          return (
            <div className="mw-print-mode-selection-item">
              {/* FR{fr} Mode */}
              {coordinate}
            </div>
          )
        })
      }
  </div>
}

export const MwPrintModeOsbSelectionGridComponent = () => {

  return (
    <div className="mw-markers-summary-sheet">
      <div className="mw-markers-summary-border-frame">
        <div style={{fontSize: 24, display: 'flex', flexDirection: 'row', height: 40, }}>
          <MwLogoPlayerSideIcon 
            playerSide="OSB"
            size={30}
            />
          <div style={{width: 10}} />
          <div style={{fontSize: 22}}>
            Mode Selections (OSB)
          </div>
        </div>

        <div className="mw-print-mode-selection-grid">
          <MwModeSelectionClanColumn
            title="Leyline 1"
            playerSide="OPT"
            leylineColumn={LeylineDistanceFromSource.LeylineDistance_1}
            />
          <MwModeSelectionClanColumn
            title="Leyline 2"
            playerSide="OPT"
            leylineColumn={LeylineDistanceFromSource.LeylineDistance_2}
            />
          <MwModeSelectionClanColumn
            title="Leyline 3"
            playerSide="OPT"
            leylineColumn={LeylineDistanceFromSource.LeylineDistance_3}
            />
        </div>
      </div>
    </div>
  );
}

export const MwPrintModeOptSelectionGridComponent = () => {

  return (
    <div className="mw-markers-summary-sheet">
      <div className="mw-markers-summary-border-frame">
        <div style={{fontSize: 24, display: 'flex', flexDirection: 'row', height: 40, }}>
          <MwLogoPlayerSideIcon 
            playerSide="OPT"
            size={30}
            />
          <div style={{width: 10}} />
          <div style={{fontSize: 22}}>
            Mode Selections (OPT)
          </div>
        </div>


        <div className="mw-print-mode-selection-grid">
          <MwModeSelectionClanColumn
            title="Leyline 3"
            playerSide="OSB"
            leylineColumn={LeylineDistanceFromSource.LeylineDistance_3}
            />
          <MwModeSelectionClanColumn
            title="Leyline 2"
            playerSide="OSB"
            leylineColumn={LeylineDistanceFromSource.LeylineDistance_2}
            />
          <MwModeSelectionClanColumn
            playerSide="OSB"
            leylineColumn={LeylineDistanceFromSource.LeylineDistance_1}
            title="Leyline 1"
            />
        </div>
      </div>
    </div>
  );
}
