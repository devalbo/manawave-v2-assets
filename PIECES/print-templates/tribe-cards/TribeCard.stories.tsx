import type { Meta, StoryObj } from '@storybook/react';
import { MwTribeCard } from './TribeCard';
import { DefaultTribeConversionRatios } from '@mw-assets/PIECES/type-defs/type-defs';


const meta: Meta<typeof MwTribeCard> = {
  title: 'Game Pieces/Tribe Card',
  component: MwTribeCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MwTribeCard>;

export const PlayerA: Story = {
  args: {
    title: 'Tribe Name',
    text: 'Tribe Description',
    playerId: "PlayerA",
    conversionRatios: DefaultTribeConversionRatios,
  },
};

export const Player1: Story = {
  args: {
    title: 'Tribe Name',
    text: 'Tribe Description',
    playerId: "Player1",
    conversionRatios: DefaultTribeConversionRatios,
  },
};
