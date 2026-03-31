'use client';

import { Post } from '@/domain/posts/types';
import * as Styled from './styles';
import { PostCard } from '@/components/PostCard';

export interface HomePageProps {
  posts: Post[];
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <Styled.Container>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} cover={post.cover?.url} />
      ))}
    </Styled.Container>
  );
}
