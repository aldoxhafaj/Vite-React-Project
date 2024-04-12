import type { Meta, StoryObj } from '@storybook/react';

import { ProfileTile } from './ProfileTile';

const meta: Meta<typeof ProfileTile> = {
  title: 'Profile tile',
  component: ProfileTile,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    username: {
      options: ['Hi James Conor', 'Hi Obu de Nyoah Washtaw'],
      control: { type: 'select' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileWidget: Story = {
  render: (args) => <ProfileTile {...args} />,
  args: {
    username: 'Hi James Conor',
  },
};
