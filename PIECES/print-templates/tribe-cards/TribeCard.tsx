/* eslint-disable react/jsx-pascal-case */
import { PlayerSide } from "@mw-game-engine/gameboard/game-play-data";
import { createImgComponentFromMwMarkerType, createImgComponentFromTag } from "../../icons";
import { IMwTribeConversionRatio } from "../../type-defs/type-defs";
import { MwTribeCardBorderFrameDiv, MwTribeCardDiv, MwTribeConversionRatesTableContainerDiv, MwTribeConversionRatesTableDiv, MwTribeConversionRatesTableGridHeaderDiv, MwTribeConversionRatesTableGridItemDiv, MwTribePlayerHeaderDiv, MwTribeStockpileTableContainerDiv, MwTribeStockpileTableDiv, MwTribeStockpileTableGridItemDiv, MwTribeTablesDiv } from './tribe-card-styles';
import { MwLogoPlayerSideIcon } from "@mw-assets/PIECES/mw-logo-player-side-icon";


export interface IMwTribeCardData {
  playerSide: PlayerSide
  playerName: string
  conversionRatios: IMwTribeConversionRatio[]
}

const ConversionImageSize = 20;

const StockpileImageSize = 40;

const ManaCounterIcon_Stockpile = () => createImgComponentFromTag('<::mana-counter::>', StockpileImageSize);
const AttackCounterIcon_Stockpile = () => createImgComponentFromTag('<::attack-counter::>', StockpileImageSize);
const ShieldCounterIcon_Stockpile = () => createImgComponentFromTag('<::shield-counter::>', StockpileImageSize);
const PopulationIncreaseCounterIcon_Stockpile = () => createImgComponentFromTag('<::population-increase-counter::>', StockpileImageSize);
const SoulstainTokenIcon_Stockpile = () => createImgComponentFromTag('<::soulstain-token::>', StockpileImageSize);
const ManalithIcon_Stockpile = () => createImgComponentFromTag('<::manalith-token::>', StockpileImageSize);


const MwTribeConversionRatioRow = (props: {conversionRatio: IMwTribeConversionRatio}) => {
  return (
    <>
      <MwTribeConversionRatesTableGridItemDiv>
        {
          props.conversionRatio.input.map((input) => 
            createImgComponentFromMwMarkerType(input, ConversionImageSize)
          )
        }
      </MwTribeConversionRatesTableGridItemDiv>
      <MwTribeConversionRatesTableGridItemDiv>
        {
          createImgComponentFromMwMarkerType(props.conversionRatio.output, ConversionImageSize)
        }
      </MwTribeConversionRatesTableGridItemDiv>
    </>
  )
}


export const MwConversionRatesTable = (props: {conversionRatios: IMwTribeConversionRatio[]}) => {
  return (
    <MwTribeConversionRatesTableDiv>
      <MwTribeConversionRatesTableGridHeaderDiv>Mana</MwTribeConversionRatesTableGridHeaderDiv>
      <MwTribeConversionRatesTableGridHeaderDiv>Conjuration</MwTribeConversionRatesTableGridHeaderDiv>

      {
        props.conversionRatios.map((conversionRatio) => (
          <MwTribeConversionRatioRow conversionRatio={conversionRatio} />
        ))
      }

    </MwTribeConversionRatesTableDiv>
  )
}

export const MwStockpileTable = () => {
  return (
    <div>
      Stockpiles
      <MwTribeStockpileTableDiv>

        <MwTribeStockpileTableGridItemDiv>
          <AttackCounterIcon_Stockpile />
        </MwTribeStockpileTableGridItemDiv>

        <MwTribeStockpileTableGridItemDiv>
          <ManaCounterIcon_Stockpile />
        </MwTribeStockpileTableGridItemDiv>

        <MwTribeStockpileTableGridItemDiv>
          <ManalithIcon_Stockpile />
        </MwTribeStockpileTableGridItemDiv>

        <MwTribeStockpileTableGridItemDiv>
          <ShieldCounterIcon_Stockpile />
        </MwTribeStockpileTableGridItemDiv>

        <MwTribeStockpileTableGridItemDiv>
          <PopulationIncreaseCounterIcon_Stockpile />
        </MwTribeStockpileTableGridItemDiv>
  
        <MwTribeStockpileTableGridItemDiv>
          <SoulstainTokenIcon_Stockpile />
        </MwTribeStockpileTableGridItemDiv>
          
      </MwTribeStockpileTableDiv>
    </div>
  )
}


export const MwTribeCard = (props: IMwTribeCardData) => {
  // const playerIdImgSrc = props.playerSide === 'OPT' ? 
  //   '/img/mw_logo_white_top.svg' :
  //   '/img/mw_logo_black_top.svg';

  return (
    <MwTribeCardDiv>
      <MwTribeCardBorderFrameDiv>

        <MwTribePlayerHeaderDiv>
          <MwLogoPlayerSideIcon
            playerSide={props.playerSide}
            size={44}
            style={{marginRight: 10}}
          />
          <div style={{fontSize: 24, alignContent: "center"}}>
            Tribe Chief:
          </div>
        </MwTribePlayerHeaderDiv>
          
        <MwTribeTablesDiv>
          <MwTribeConversionRatesTableContainerDiv>
            <MwConversionRatesTable
              conversionRatios={props.conversionRatios}
            />
          </MwTribeConversionRatesTableContainerDiv>

          {/* <div className="mw-tribe-stockpile-table-container">
            <MwStockpileTable />
          </div> */}
          <MwTribeStockpileTableContainerDiv>
            <MwStockpileTable />
          </MwTribeStockpileTableContainerDiv>

        </MwTribeTablesDiv>
        
      </MwTribeCardBorderFrameDiv>
    </MwTribeCardDiv>
  );
};