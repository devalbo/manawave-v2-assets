import type { Meta, StoryObj } from '@storybook/react';
import { MwClanTemplate } from './MwClanTemplate';
import { ClanOfAttackData } from '@mw-assets/seasons/season-flavor-1/clans/clan-of-attack';
import { ClanOfDefenseData } from '@mw-assets/seasons/season-flavor-1/clans/clan-of-defense';
import { ClanOfMagicData } from '@mw-assets/seasons/season-flavor-1/clans/clan-of-magic';


const meta: Meta<typeof MwClanTemplate> = {
  title: 'Game Pieces/Clan Cards',
  component: MwClanTemplate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MwClanTemplate>;

export const Default: Story = {
  args: {
    title: "Clan Name",
    text: "Clan Description",
    decoration: 'mw-icon-black-side-up',
    modes: [],
    conversionRatios: [],
  },
};

export const ClanOfAttack: Story = {
  args: {
    title: ClanOfAttackData.title,
    text: ClanOfAttackData.text,
    decoration: 'mw-icon-black-side-up',
    modes: ClanOfAttackData.modes,
    conversionRatios: ClanOfAttackData.conversionRatios,
  },
};

export const ClanOfDefense: Story = {
  args: {
    title: ClanOfDefenseData.title,
    text: ClanOfDefenseData.text,
    decoration: 'mw-icon-black-side-up',
    modes: ClanOfDefenseData.modes,
    conversionRatios: ClanOfDefenseData.conversionRatios,
  },
};

export const ClanOfMagic: Story = {
  args: {
    title: ClanOfMagicData.title,
    text: ClanOfMagicData.text,
    decoration: 'mw-icon-black-side-up',
    modes: ClanOfMagicData.modes,
    conversionRatios: ClanOfMagicData.conversionRatios,
  },
};
