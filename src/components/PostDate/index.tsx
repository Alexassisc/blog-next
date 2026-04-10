import * as Styled from './styled';
import { formatDate } from '@/utils/format-date';

export type PostDateProps = {
  date: string;
};

export const PostDate = ({ date }: PostDateProps) => {
  return (
    <Styled.Container dateTime={date}>{formatDate(date)}</Styled.Container>
  );
};
