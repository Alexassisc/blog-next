import * as Styled from './styled';
import { PostDate } from '../PostDate';
import Link from 'next/link';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
  categorySlug: string;
};

export const PostDetails = ({
  author,
  category,
  date,
  categorySlug,
}: PostDetailsProps) => {
  return (
    <Styled.Container>
      Publicado por <strong>{author}</strong>
      em
      <PostDate date={date} />
      <span className="separator"> | </span>
      Categoria:{' '}
      {categorySlug ? (
        <Link href={`/post/page/1/${categorySlug}`}>
          <strong>{category}</strong>
        </Link>
      ) : (
        <strong>{category}</strong>
      )}
    </Styled.Container>
  );
};
