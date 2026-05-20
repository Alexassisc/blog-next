'use client';

import { PaginationData, Post } from '@/domain/posts/types';
import * as Styled from './styles';
import { PostCard } from '@/components/PostCard';

export interface HomePageProps {
  posts: Post[];
  total?: number;
  category?: string;
  pagination?: PaginationData;
}

export default function HomePage({
  posts,
  total,
  category,
  pagination,
}: HomePageProps) {
  const totalPosts = total ?? pagination?.numberOfPosts ?? 0;

  return (
    <Styled.Container>
      <span>
        {category ? `Categoria: ${category} | ` : ''}
        Mostrando {posts.length} de {totalPosts} posts
      </span>

      {posts.map((post) => {
        const imageUrl = post.cover?.url ? post.cover.url : '';

        return (
          <PostCard
            key={post.id}
            title={post.title}
            cover={imageUrl}
            id={post.id}
          />
        );
      })}
    </Styled.Container>
  );
}
