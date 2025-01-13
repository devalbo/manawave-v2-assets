import type { Meta, StoryObj } from '@storybook/react';
import { MwMarkerIndicator } from './marker-indicator';


const meta: Meta<typeof MwMarkerIndicator> = {
  title: 'Game Icons/Raw Marker Indicator',
  component: MwMarkerIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MwMarkerIndicator>;


export const Default: Story = {
  args: {
    quantity: 1,
    markerType: '<::soulstain-token::>',
    // markerSize: 44,
    // $backgroundColorHexCode: '#0000ff',
    // $textColorHexCode: '#ffffff',
  },
};
