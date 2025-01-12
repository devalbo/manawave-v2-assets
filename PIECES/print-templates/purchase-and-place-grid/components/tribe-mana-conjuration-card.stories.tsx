import type { Meta, StoryObj } from '@storybook/react';
import { TribeManaConjurationCard } from './tribe-mana-conjuration-card';


const meta: Meta<typeof TribeManaConjurationCard> = {
  title: 'Game Pieces/Tribe Mana Conjuration Card',
  component: TribeManaConjurationCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TribeManaConjurationCard>;

export const ExampleTribeManaConjuration: Story = {
  args: {
    
  },
};
