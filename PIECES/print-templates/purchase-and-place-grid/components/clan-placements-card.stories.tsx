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
    clanName: 'My Best Clan',
    numStockpileAttackCounters: 1,
    numStockpileShieldCounters: 2,
    numStockpilePopulationIncreaseCounters: 3,
    numStockpileManaCounters: 4,
    numStockpileManalithTokens: 5,
  },
};