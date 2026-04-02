'use client';

import { Post } from '@/domain/posts/types';
import { HtmlContent } from '@/components/HtmlContent';
import * as Styled from './styled';
import { Heading } from '@/components/Heading';

export type PostContainerProps = {
  post: Post;
};

export const PostContainer = ({ post }: PostContainerProps) => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Heading>{post.title}</Heading>
      </Styled.Header>

      {post.cover?.url && (
        <Styled.CoverContainer>
          <Styled.CoverImage src={post.cover.url} alt={post.title} />
        </Styled.CoverContainer>
      )}

      <HtmlContent content={post.content} />
    </Styled.Container>
  );
};
