import type { Meta, StoryObj } from '@storybook/react';
import { MwMarkerType } from '@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types';
import { MarkerFlowArea } from './marker-flow-area';
import { ManaCounter_MarkerView } from '@mw-assets/PIECES/tally-marker-views/marker-view';
import { AttackCounter_MarkerView } from '@mw-assets/PIECES/tally-marker-views/marker-view';


const meta: Meta<typeof MarkerFlowArea> = {
  title: 'Game Icons/Marker Flow Area',
  component: MarkerFlowArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MarkerFlowArea>;

export const StockpileToAttack: Story = {
  args: {
    source: 'from-stockpile',
    sinkMarkerType: MwMarkerType.MwMarkerType_AttackCounter,
  },
};

export const ManaToShield: Story = {
  args: {
    source: 'from-conjuration',
    sinkMarkerType: MwMarkerType.MwMarkerType_ShieldCounter,
  },
};

export const TribeToPopulationIncrease: Story = {
  args: {
    source: 'from-tribe',
    sinkMarkerType: MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
  },
};
