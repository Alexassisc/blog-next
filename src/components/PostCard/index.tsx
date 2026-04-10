import Link from 'next/link';
import * as Styled from './styled';

export type PostCardProps = {
  title: string;
  cover?: string;
  slug: string;
};

export const PostCard = ({ title, cover, slug }: PostCardProps) => {
  return (
    <Styled.Container>
      <Link
        href={`/post/${slug}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {cover && (
          <Styled.ImageContainer>
            <Styled.Cover src={cover} alt={title} />
          </Styled.ImageContainer>
        )}
        <Styled.Title>{title}</Styled.Title>
      </Link>
    </Styled.Container>
  );
};
