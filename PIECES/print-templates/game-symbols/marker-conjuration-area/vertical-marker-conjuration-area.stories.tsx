import type { Meta, StoryObj } from '@storybook/react';
import { MwMarkerType } from '@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types';
import { VerticalMarkerConjurationArea } from './vertical-marker-conjuration-area';


const meta: Meta<typeof VerticalMarkerConjurationArea> = {
  title: 'Game Icons/Vertical Marker Conjuration Area',
  component: VerticalMarkerConjurationArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VerticalMarkerConjurationArea>;

export const Attack: Story = {
  args: {
    markerManaCost: 2,
    markerToConjure: MwMarkerType.MwMarkerType_AttackCounter,
    numConjuredMarkers: 3,
    numManaSpent: 6,
  },
};

export const Shield: Story = {
  args: {
    markerManaCost: 2,
    markerToConjure: MwMarkerType.MwMarkerType_ShieldCounter,
    numConjuredMarkers: 2,
    numManaSpent: 4,
  },
};

export const PopuluationIncrease: Story = {
  args: {
    markerManaCost: 2,
    markerToConjure: MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
    numConjuredMarkers: 2,
    numManaSpent: 2,
  },
};
