import * as Styled from './styled';
import { PostDate } from '../PostDate';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Styled.Container>
      Publicado por <strong>{author}</strong>
      {' em '}
      <PostDate date={date} />
      <span className="separator"> | </span>
      Categoria: <strong>{category}</strong>
    </Styled.Container>
  );
};
