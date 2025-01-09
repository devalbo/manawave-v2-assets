import type { Meta, StoryObj } from '@storybook/react';
import { MwMarkerType } from '@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types';
import { MarkerConjurationArea } from './marker-conjuration-area';


const meta: Meta<typeof MarkerConjurationArea> = {
  title: 'Game Icons/Marker Conjuration Area',
  component: MarkerConjurationArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MarkerConjurationArea>;

export const Attack: Story = {
  args: {
    markerManaCost: 2,
    markerToConjure: MwMarkerType.MwMarkerType_AttackCounter,
    numAvailableMana: 2,
    numManaSpent: 6,
  },
};

export const Shield: Story = {
  args: {
    markerManaCost: 2,
    markerToConjure: MwMarkerType.MwMarkerType_ShieldCounter,
    numAvailableMana: 2,
    numManaSpent: 4,
  },
};

export const PopuluationIncrease: Story = {
  args: {
    markerManaCost: 2,
    markerToConjure: MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
    numAvailableMana: 2,
    numManaSpent: 2,
  },
};
