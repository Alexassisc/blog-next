import { Meta, StoryObj } from '@storybook/nextjs';
import { Heading, HeadingProps } from '.';

const meta: Meta<HeadingProps> = {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Texto do meu Heading',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export default meta;

type Story = StoryObj<HeadingProps>;
export const Default: Story = {};
