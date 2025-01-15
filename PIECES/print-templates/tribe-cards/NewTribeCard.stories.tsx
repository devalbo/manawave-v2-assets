import type { Meta, StoryObj } from '@storybook/react';
import { NewMwTribeCard } from './NewTribeCard';
import { DefaultTribeConversionRatios } from '@mw-assets/PIECES/type-defs/type-defs';


const meta: Meta<typeof NewMwTribeCard> = {
  title: 'Game Pieces/New Tribe Card',
  component: NewMwTribeCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewMwTribeCard>;

export const OptPlayerCard: Story = {
  args: {
    playerSide: 'OPT',
    conversionRatios: DefaultTribeConversionRatios,
  },
};

export const OsbPlayerCard: Story = {
  args: {
    playerSide: 'OSB',
    conversionRatios: DefaultTribeConversionRatios,
  },
};
