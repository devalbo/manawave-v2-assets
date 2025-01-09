import type { Meta, StoryObj } from '@storybook/react';
import { MwMarkerType } from '@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types';
import { MarkerConjurationIcon } from './marker-conjuration-icon';


const meta: Meta<typeof MarkerConjurationIcon> = {
  title: 'Game Icons/Marker Conjuration Icon',
  component: MarkerConjurationIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MarkerConjurationIcon>;

export const Attack: Story = {
  args: {
    markerManaCost: 2,
    markerToConjure: MwMarkerType.MwMarkerType_AttackCounter,
  },
};

export const Shield: Story = {
  args: {
    markerManaCost: 2,
    markerToConjure: MwMarkerType.MwMarkerType_ShieldCounter,
  },
};

export const PopuluationIncrease: Story = {
  args: {
    markerManaCost: 2,
    markerToConjure: MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
  },
};
