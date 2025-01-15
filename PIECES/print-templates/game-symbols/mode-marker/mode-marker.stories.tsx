import type { Meta, StoryObj } from '@storybook/react';
import { MwModeMarker } from './mode-marker';


const meta: Meta<typeof MwModeMarker> = {
  title: 'Game Icons/Mode Marker Indicator',
  component: MwModeMarker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MwModeMarker>;


export const Default: Story = {
  args: {
    modeIndex: 1,
  },
};
