/* eslint-disable react/jsx-pascal-case */
import { CardDecoration } from '../../constants';
import { IMwCardModeData } from '../../mw-card-data';
import { IMwClanConversionRatio } from '../../type-defs/type-defs';
import { MwClanCardBorderFrameDiv, MwClanCardDiv, MwClanCardHeaderDiv, NewMwClanTemplateBodyMarkersDiv, NewMwClanTemplateBodyBottomGridItemDiv, NewMwClanTemplateBodyBottomGridMarkerItemDiv, NewMwClanTemplateBodyDiv, NewMwClanTemplateStockpileDoubleGridItemDiv, NewMwClanTemplateStockpileGridDiv, NewMwClanTemplateStockpileGridItemDiv } from './clan-card-styles';
import { MwLogoPlayerSideIcon } from '@mw-assets/PIECES/mw-logo-player-side-icon';
import { PlayerSide } from '@mw-assets/type-defs/game-play-data';
import { AttackCounter_MarkerIndicator, ExpendedManaCounter_MarkerIndicator, ManaCounter_MarkerIndicator, ManalithToken_MarkerIndicator, PopulationIncreaseCounter_MarkerIndicator, PopulationSacrificeCounter_MarkerIndicator, PopulationToken_MarkerIndicator, ShieldCounter_MarkerIndicator } from '../game-symbols/marker-indicator/marker-indicator';
import { MwClanTemplateModeBlock } from './MwClanTemplateModeBlock';
import { MwModeMarker } from '../game-symbols/mode-marker/mode-marker';


export interface IMwClanData {
  title: string
  text: string
  decoration?: CardDecoration
  backgroundImageUrl?: string
  modes: IMwCardModeData[]
  conversionRatios: IMwClanConversionRatio[]
}


export const NewMwClanTemplate = (props: IMwClanData) => {

  const playerSide: PlayerSide = props.decoration === 'mw-icon-black-side-up' ? 
    'OPT' :
    'OSB';

  const backgroundImageUrl = props.backgroundImageUrl;
    
  return (
    <MwClanCardDiv>
      <MwClanCardBorderFrameDiv
        backgroundImageUrl={backgroundImageUrl}
      >

        <NewMwClanTemplateBodyDiv>
          <MwClanCardHeaderDiv
            style={{display: "flex", fontSize: 24, }}
          >
            <MwLogoPlayerSideIcon
              playerSide={playerSide}
              size={30}
              style={{marginRight: 6}}
            />

            <div >
              {props.title}
            </div>
          </MwClanCardHeaderDiv>

          <NewMwClanTemplateBodyMarkersDiv>
            <NewMwClanTemplateBodyBottomGridItemDiv>
              <PopulationToken_MarkerIndicator
                quantity={1}
                $onZeroAmountBehavior='dim'
              />
            </NewMwClanTemplateBodyBottomGridItemDiv>
            <NewMwClanTemplateBodyBottomGridItemDiv>
              <ManalithToken_MarkerIndicator
                quantity={1}
                $onZeroAmountBehavior='dim'
              />
            </NewMwClanTemplateBodyBottomGridItemDiv>
            <NewMwClanTemplateBodyBottomGridMarkerItemDiv>
              <MwModeMarker
                modeIndex='blank'
                renderMode='print'
              />
            </NewMwClanTemplateBodyBottomGridMarkerItemDiv>
          </NewMwClanTemplateBodyMarkersDiv>

          <MwClanTemplateModeBlock
            modes={props.modes}
          />

        </NewMwClanTemplateBodyDiv>

        <NewMwClanTemplateStockpileGridDiv>
          <NewMwClanTemplateStockpileDoubleGridItemDiv>
            Extra stuff can go here
          </NewMwClanTemplateStockpileDoubleGridItemDiv>

          <NewMwClanTemplateStockpileGridItemDiv>
            <AttackCounter_MarkerIndicator
              quantity={1}
              $onZeroAmountBehavior='dim'
            />
          </NewMwClanTemplateStockpileGridItemDiv>
          <NewMwClanTemplateStockpileGridItemDiv>
            <ShieldCounter_MarkerIndicator
              quantity={1}
              $onZeroAmountBehavior='dim'
            />
          </NewMwClanTemplateStockpileGridItemDiv>
          <NewMwClanTemplateStockpileGridItemDiv>
            <ManaCounter_MarkerIndicator
              quantity={1}
              $onZeroAmountBehavior='dim'
            />
          </NewMwClanTemplateStockpileGridItemDiv>
          <NewMwClanTemplateStockpileGridItemDiv>
            <ExpendedManaCounter_MarkerIndicator
              quantity={1}
              $onZeroAmountBehavior='dim'
            />
          </NewMwClanTemplateStockpileGridItemDiv>
          <NewMwClanTemplateStockpileGridItemDiv>
            <PopulationIncreaseCounter_MarkerIndicator
              quantity={1}
              $onZeroAmountBehavior='dim'
            />
          </NewMwClanTemplateStockpileGridItemDiv>
          <NewMwClanTemplateStockpileGridItemDiv>
            <PopulationSacrificeCounter_MarkerIndicator
              quantity={1}
              $onZeroAmountBehavior='dim'
            />
          </NewMwClanTemplateStockpileGridItemDiv>
        </NewMwClanTemplateStockpileGridDiv>

      </MwClanCardBorderFrameDiv>
    </MwClanCardDiv>
  );
};
