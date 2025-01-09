import type { Meta, StoryObj } from '@storybook/react';
import { MwMarkerView } from '../../../tally-marker-views/marker-view';
import { SoulstainTokenIcon_MarkerIcon } from '@mw-assets/PIECES/tally-marker-views/marker-icon';


const meta: Meta<typeof MwMarkerView> = {
  title: 'Game Icons/Raw Marker Indicator',
  component: MwMarkerView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MwMarkerView>;


export const Default: Story = {
  args: {
    quantity: 1,
    mode: 'show-stack',
    icon: <SoulstainTokenIcon_MarkerIcon />,
  },
};
