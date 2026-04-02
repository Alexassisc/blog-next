'use client';

import { Post } from '@/domain/posts/types';
import * as Styled from './styles';
import { PostCard } from '@/components/PostCard';

export interface HomePageProps {
  posts: Post[];
  total: number;
}

export default function HomePage({ posts, total }: HomePageProps) {
  return (
    <Styled.Container>
      {/* O span agora ficará no topo graças ao ajuste que fizemos no Grid */}
      <span>
        Mostrando {posts.length} de {total} posts
      </span>

      {posts.map((post) => {
        const imageUrl = post.cover?.url ? post.cover.url : '';

        return (
          <PostCard
            key={post.id}
            title={post.title}
            cover={imageUrl}
            slug={post.slug}
          />
        );
      })}
    </Styled.Container>
  );
}
