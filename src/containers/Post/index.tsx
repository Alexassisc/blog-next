'use client';

import { Post } from '@/domain/posts/types';
import { HtmlContent } from '@/components/HtmlContent';
import * as Styled from './styled';
import { Heading } from '@/components/Heading';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { Comments } from '@/Comments';

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
        <PostCover coverUrl={post.cover.url} alt={post.title} />
      )}

      <PostDetails
        author={post.author?.name || 'Autor desconhecido'}
        category={post.category?.name || 'Sem categoria'}
        categorySlug={post.category?.slug || ''}
        date={post.publishedAt}
      />

      <HtmlContent content={post.content} />
      <Comments id={post.id.toString()} slug={post.slug} title={post.title} />
    </Styled.Container>
  );
};
