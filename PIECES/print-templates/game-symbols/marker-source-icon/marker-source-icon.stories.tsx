import type { Meta, StoryObj } from '@storybook/react';
import { MarkerSourceIcon } from './marker-source-icon';


const meta: Meta<typeof MarkerSourceIcon> = {
  title: 'Game Icons/Marker Source Icon',
  component: MarkerSourceIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MarkerSourceIcon>;

export const FromStockpile: Story = {
  args: {
    source: 'from-stockpile',
    sourceIconCount: 1,
    // markerManaCost: 2,
    // markerToConjure: MwMarkerType.MwMarkerType_AttackCounter,
  },
};

export const FromExpendedMana: Story = {
  args: {
    source: 'from-expended-mana',
    sourceIconCount: 2,
    // markerManaCost: 2,
    // markerToConjure: MwMarkerType.MwMarkerType_ShieldCounter,
  },
};

export const FromConjuration: Story = {
  args: {
    source: 'from-conjuration',
    sourceIconCount: 2,
    // markerManaCost: 2,
    // markerToConjure: MwMarkerType.MwMarkerType_PopulationIncreaseCounter,
  },
};
