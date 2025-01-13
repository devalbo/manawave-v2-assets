import type { Meta, StoryObj } from '@storybook/react';
import { TribeToClanMarkerPlacementsCard } from './tribe-to-clan-marker-placements-card';
import { MwMarkerType } from '@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types';
import { LeylineDistanceFromSource } from '@mw-assets/mw-v2-protobufs/protofiles-out/manawave-types';


const meta: Meta<typeof TribeToClanMarkerPlacementsCard> = {
  title: 'Game Pieces/Tribe to Clan Marker Placements Card',
  component: TribeToClanMarkerPlacementsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TribeToClanMarkerPlacementsCard>;

export const ExampleTribeToClanMarkerPlacements: Story = {
  args: {
    playerSide: 'OPT',
    tribeToClanAllocations: new Map([
      [LeylineDistanceFromSource.LeylineDistance_1, [MwMarkerType.MwMarkerType_AttackCounter]],
      [LeylineDistanceFromSource.LeylineDistance_2, [MwMarkerType.MwMarkerType_ShieldCounter]],
      [LeylineDistanceFromSource.LeylineDistance_3, [MwMarkerType.MwMarkerType_PopulationIncreaseCounter]],
    ]),
  },
};
