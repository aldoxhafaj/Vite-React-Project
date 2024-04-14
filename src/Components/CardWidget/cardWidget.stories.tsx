import { Text } from '@layouts/typography/Text';
import type { Meta, StoryObj } from '@storybook/react';
import { Color } from '@themes/color';
import { FontSize } from '@themes/fontSize';

import { CardWidget } from './CardWidget';

const meta: Meta<typeof CardWidget> = {
  title: 'Card Widget',
  component: CardWidget,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    title: {
      options: ['Active Clients', 'Financial Statistics'],
      control: { type: 'select' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    shadow: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    leftIcon: {
      options: ['money', 'filledClients', 'filledBriefcase'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  render: (args) => (
    <CardWidget
      {...args}
      cardBodyComponent={
        <Text
          fontSize={FontSize.CAPTION_1}
          className="font-cabin"
          color={Color.WHITE}
        >
          $7,456,231,324.81
        </Text>
      }
    />
  ),
  args: {
    title: 'Active Clients',
    backgroundColor: Color.VIVID_BLUE,
    shadow: 'sm',
    leftIcon: 'filledClients',
  },
};
