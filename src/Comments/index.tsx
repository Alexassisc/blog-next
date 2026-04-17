'use client';

import { DiscussionEmbed } from 'disqus-react';
import * as Styled from './styled';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
};

export const Comments = ({ id, slug, title }: CommentsProps) => {
  const disqusConfig = {
    url: `http://vcap.me:3000/post/${slug}`,
    identifier: id,
    title: title,
    language: 'pt_BR',
  };

  return (
    <Styled.CommentsContainer>
      <DiscussionEmbed shortname="blog-strapi-5" config={disqusConfig} />
    </Styled.CommentsContainer>
  );
};
