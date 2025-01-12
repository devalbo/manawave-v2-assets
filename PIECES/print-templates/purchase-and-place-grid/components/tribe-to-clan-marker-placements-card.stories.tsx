import type { Meta, StoryObj } from '@storybook/react';
import { TribeToClanMarkerPlacementsCard } from './tribe-to-clan-marker-placements-card';


const meta: Meta<typeof TribeToClanMarkerPlacementsCard> = {
  title: 'Game Pieces/Tribe to Clan Marker Placements Card',
  component: TribeToClanMarkerPlacementsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TribeToClanMarkerPlacementsCard>;

export const ExampleTribeToClanMarkerPlacements: Story = {
  args: {
    
  },
};
