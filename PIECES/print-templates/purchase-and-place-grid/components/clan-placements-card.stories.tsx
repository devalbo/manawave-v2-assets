import type { Meta, StoryObj } from '@storybook/react';
import { ClanPlacementCard } from './clan-placements-card';


const meta: Meta<typeof ClanPlacementCard> = {
  title: 'Game Pieces/Clan Marker Placements Card',
  component: ClanPlacementCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ClanPlacementCard>;

export const DefaultClan: Story = {
  args: {
    playerSide: "OPT",
    clanName: 'The Best Clan',

    attackCounterManaCost: 3,
    shieldCounterManaCost: 2,
    populationIncreaseCounterManaCost: 1,
    manalithTokenManaCost: 4,

    numAttackCountersFromTribe: 1,
    numShieldCountersFromTribe: 2,
    numPopulationIncreaseCountersFromTribe: 3,

    numPurchasedAttackCounters: 1,
    numPurchasedShieldCounters: 2,
    numPurchasedPopulationIncreaseCounters: 3,
    numPurchasedManalithTokens: 4,

    numExpendedManaForAttackCounters: 4,
    numExpendedManaForShieldCounters: 6,
    numExpendedManaForPopulationIncreaseCounters: 9,
    numExpendedManaForManalithTokens: 12,

    numStockpileManaCounters: 5,
  },
};