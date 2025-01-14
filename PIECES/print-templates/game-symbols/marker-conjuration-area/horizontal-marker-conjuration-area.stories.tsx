import type { Meta, StoryObj } from '@storybook/react';
import { MwMarkerType } from '@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types';
import { HorizontalMarkerConjurationArea } from './horizontal-marker-conjuration-area';


const meta: Meta<typeof HorizontalMarkerConjurationArea> = {
  title: 'Game Icons/Horizontal Marker Conjuration Area',
  component: HorizontalMarkerConjurationArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HorizontalMarkerConjurationArea>;

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
