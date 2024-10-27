import { ReactNode } from 'react';
import { HEX_COLOR_CODE_ATTACK_COUNTER, HEX_COLOR_CODE_MANA_COUNTER, HEX_COLOR_CODE_MANALITH_CLAIM_COUNTER, HEX_COLOR_CODE_MANALITH_TOKEN, HEX_COLOR_CODE_MANAWAVE_ROUND_TOKEN, HEX_COLOR_CODE_POPULATION_INCREASE_COUNTER, HEX_COLOR_CODE_POPULATION_SACRIFICE_COUNTER, HEX_COLOR_CODE_POPULATION_TOKEN, HEX_COLOR_CODE_SHIELD_COUNTER, HEX_COLOR_CODE_SOULSTAIN_TOKEN } from './constants';
import { createImgComponentFromTag, getMwIconAscii } from './icons';
import './mw-markers-summary-styles.css';



const MARKER_SUMMARY_VIEW_ICON_SIZE = 24;
const MARKER_SUMMARY_COLOR_BLOCK_SIZE = 24;

const ManaCounterSummaryIcon = () => createImgComponentFromTag('<::mana-counter::>', MARKER_SUMMARY_VIEW_ICON_SIZE);
const ManalithClaimSummaryIcon = () => createImgComponentFromTag('<::manalith-claim-counter::>', MARKER_SUMMARY_VIEW_ICON_SIZE);
const AttackCounterSummaryIcon = () => createImgComponentFromTag('<::attack-counter::>', MARKER_SUMMARY_VIEW_ICON_SIZE);
const ShieldCounterSummaryIcon = () => createImgComponentFromTag('<::shield-counter::>', MARKER_SUMMARY_VIEW_ICON_SIZE);
const PopulationIncreaseCounterSummaryIcon = () => createImgComponentFromTag('<::population-increase-counter::>', MARKER_SUMMARY_VIEW_ICON_SIZE);
const PopulationSacrificeCounterSummaryIcon = () => createImgComponentFromTag('<::population-sacrifice-counter::>', MARKER_SUMMARY_VIEW_ICON_SIZE);

const ManalithTokenSummaryIcon = () => createImgComponentFromTag('<::manalith-token::>', MARKER_SUMMARY_VIEW_ICON_SIZE);
const SoulstainTokenSummaryIcon = () => createImgComponentFromTag('<::soulstain-token::>', MARKER_SUMMARY_VIEW_ICON_SIZE);
const PopulationTokenSummaryIcon = () => createImgComponentFromTag('<::population-token::>', MARKER_SUMMARY_VIEW_ICON_SIZE);

const ManawaveRoundTokenSummaryIcon = () => createImgComponentFromTag('<::manawave-round-token::>', MARKER_SUMMARY_VIEW_ICON_SIZE);


const ColorIcon = (props: {colorHex: string}) => {
  return (
    <div style={{
        height: MARKER_SUMMARY_COLOR_BLOCK_SIZE,
        width: MARKER_SUMMARY_COLOR_BLOCK_SIZE,
        backgroundColor: props.colorHex,
        borderRadius: 8,
      }}
      />
  )
}

const GridItemLabel = (props: {children: ReactNode}) => {
  return (
    <div className="mw-markers-summary-grid-item-label">
      {props.children}
    </div>
  )
}

const GridItem = (props: {children: ReactNode}) => {
  return (
    <div className="mw-markers-summary-grid-item">
      {props.children}
    </div>
  )
}


export const MwMarkersSummarySheet = () => {

  return (
    <div className="mw-markers-summary-sheet">
      <div className="mw-markers-summary-border-frame">
        <div style={{fontSize: 24}}>
          Manawave Markers
        </div>

        <div className="mw-markers-summary-grid">
          <GridItem><ManawaveRoundTokenSummaryIcon /></GridItem><GridItem><ColorIcon colorHex={HEX_COLOR_CODE_MANAWAVE_ROUND_TOKEN} /></GridItem><GridItemLabel>{getMwIconAscii('<::manawave-round-token::>')}</GridItemLabel>
          <GridItem><ManaCounterSummaryIcon /></GridItem><GridItem><ColorIcon colorHex={HEX_COLOR_CODE_MANA_COUNTER} /></GridItem><GridItemLabel>{getMwIconAscii('<::mana-counter::>')}</GridItemLabel>
          <GridItem><ManalithTokenSummaryIcon /></GridItem><GridItem><ColorIcon colorHex={HEX_COLOR_CODE_MANALITH_TOKEN} /></GridItem><GridItemLabel>{getMwIconAscii('<::manalith-token::>')}</GridItemLabel>
          <GridItem><ManalithClaimSummaryIcon /></GridItem><GridItem><ColorIcon colorHex={HEX_COLOR_CODE_MANALITH_CLAIM_COUNTER} /></GridItem><GridItemLabel>{getMwIconAscii('<::manalith-claim-counter::>')}</GridItemLabel>

          <GridItem><SoulstainTokenSummaryIcon /></GridItem><GridItem><ColorIcon colorHex={HEX_COLOR_CODE_SOULSTAIN_TOKEN} /></GridItem><GridItemLabel>{getMwIconAscii('<::soulstain-token::>')}</GridItemLabel>

          <GridItem><AttackCounterSummaryIcon /></GridItem><GridItem><ColorIcon colorHex={HEX_COLOR_CODE_ATTACK_COUNTER} /></GridItem><GridItemLabel>{getMwIconAscii('<::attack-counter::>')}</GridItemLabel>
          <GridItem><ShieldCounterSummaryIcon /></GridItem><GridItem><ColorIcon colorHex={HEX_COLOR_CODE_SHIELD_COUNTER} /></GridItem><GridItemLabel>{getMwIconAscii('<::shield-counter::>')}</GridItemLabel>

          <GridItem><PopulationTokenSummaryIcon /></GridItem><GridItem><ColorIcon colorHex={HEX_COLOR_CODE_POPULATION_TOKEN} /></GridItem><GridItemLabel>{getMwIconAscii('<::population-token::>')}</GridItemLabel>
          <GridItem><PopulationIncreaseCounterSummaryIcon /></GridItem><GridItem><ColorIcon colorHex={HEX_COLOR_CODE_POPULATION_INCREASE_COUNTER} /></GridItem><GridItemLabel>{getMwIconAscii('<::population-increase-counter::>')}</GridItemLabel>
          <GridItem><PopulationSacrificeCounterSummaryIcon /></GridItem><GridItem><ColorIcon colorHex={HEX_COLOR_CODE_POPULATION_SACRIFICE_COUNTER} /></GridItem><GridItemLabel>{getMwIconAscii('<::population-sacrifice-counter::>')}</GridItemLabel>
        </div>
      </div>
    </div>
  );
};
