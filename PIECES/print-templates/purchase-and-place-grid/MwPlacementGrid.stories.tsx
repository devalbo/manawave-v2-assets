import type { Meta, StoryObj } from '@storybook/react';
import { MwPlacementGrid } from './MwPlacementGrid';


const meta: Meta<typeof MwPlacementGrid> = {
  title: 'Game Pieces/Player Marker Placements Card',
  component: MwPlacementGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MwPlacementGrid>;

export const OptPlayer: Story = {
  args: {
    playerSide: 'OPT',
    // playerSide: PlayerSide.A,
  },
};


export const OsbPlayer: Story = {
  args: {
    playerSide: 'OSB',
    // playerSide: PlayerSide.A,
  },
};