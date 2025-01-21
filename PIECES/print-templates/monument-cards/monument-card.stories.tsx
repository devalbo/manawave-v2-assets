import type { Meta, StoryObj } from '@storybook/react';
import { MwMonumentTemplate } from './MwMonumentTemplate';


const meta: Meta<typeof MwMonumentTemplate> = {
  title: 'Game Pieces/Monument Card',
  component: MwMonumentTemplate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MwMonumentTemplate>;

export const ExampleMonumentCard: Story = {
  args: {
    title: 'Monument Title',
    text: 'Monument Text',
    text2: 'Monument Text 2',
    isDefault: false,
    monumentPrintSettings: {
      fontSize: 16,
      imageSize: 14,
    },
  },
};
