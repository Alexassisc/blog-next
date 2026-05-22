import { PostCard, PostCardProps } from '.';
import { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<PostCardProps> = {
  title: 'Components/PostCard',
  component: PostCard,
  args: {
    id: '1',
    title: 'Componentes e Containers no React',
    cover:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
  },
};

export default meta;

type Story = StoryObj<PostCardProps>;

export const Default: Story = {};
