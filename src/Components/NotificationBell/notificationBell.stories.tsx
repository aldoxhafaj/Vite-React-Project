import type { Meta, StoryObj } from '@storybook/react';

import { NotificationBell } from './NotificationBell';

const meta: Meta<typeof NotificationBell> = {
  title: 'Notification Bell',
  component: NotificationBell,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationAlert: Story = {
  render: (args) => <NotificationBell {...args} />,
  args: {
    notifications: false,
  },
};
