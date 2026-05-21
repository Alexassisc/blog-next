import { PaginationData } from '@/domain/posts/types';
import * as Styled from './styled';

export type PaginationProps = Partial<PaginationData>;

export const Pagination = ({
  nextPage = 1,
  numberOfPosts = 0,
  category = '',
  previousPage = 0,
  postsPerPage = 6,
}: PaginationProps) => {
  const categoryName = category || '';

  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;

  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;

  return (
    <Styled.Container>
      {hasPreviousPage && (
        <Styled.PreviousLink href={previousLink}>
          &lt; Anterior
        </Styled.PreviousLink>
      )}

      {hasNextPage && (
        <Styled.NextLink href={nextLink}>
          Próximo &gt;
        </Styled.NextLink>
      )}
    </Styled.Container>
  );
};
