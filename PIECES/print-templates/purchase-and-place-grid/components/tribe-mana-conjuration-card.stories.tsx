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
    playerSide: 'OPT',
    numStockpileAttackCounters: 0,
    numStockpileShieldCounters: 0,
    numStockpilePopulationIncreaseCounters: 0,
    numStockpileManaCounters: 0,
    numExpendedManaForAttackCounters: 0,
    numExpendedManaForShieldCounters: 0,
    numExpendedManaForPopulationIncreaseCounters: 0,
    numConjuredAttackCounters: 0,
    numConjuredShieldCounters: 0,
    numConjuredPopulationIncreaseCounters: 0,
  },
};
