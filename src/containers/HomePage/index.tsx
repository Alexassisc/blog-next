'use client';

import { Post } from '@/domain/posts/types';
import * as Styled from './styles';

export interface HomePageProps {
  posts: Post[];
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <Styled.Container>
      {posts.map((post) => (
        <Styled.PostCard key={post.id}>
          {post.cover && (
            <Styled.ImageContainer>
              <img src={post.cover.url} alt={post.title}></img>
            </Styled.ImageContainer>
          )}

          <Styled.Title>{post.title}</Styled.Title>
        </Styled.PostCard>
      ))}
    </Styled.Container>
  );
}
