import type { Meta, StoryObj } from '@storybook/react';
import { TribePlacementsCard } from './tribe-placements-card';


const meta: Meta<typeof TribePlacementsCard> = {
  title: 'Game Pieces/Tribe Placements Card',
  component: TribePlacementsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TribePlacementsCard>;

export const ExamplePlacements: Story = {
  args: {
    
  },
};
