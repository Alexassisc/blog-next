'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import * as Styled from './styled';

export type HtmlContentProps = {
  content: string;
};

export const HtmlContent = ({ content }: HtmlContentProps) => {
  return (
    <Styled.Container>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </Styled.Container>
  );
};
