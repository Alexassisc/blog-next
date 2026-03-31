import * as Styled from './styled';

export const PostCard = ({
  title,
  cover,
}: {
  title: string;
  cover?: string;
}) => {
  return (
    <Styled.Container>
      {cover && (
        <Styled.ImageContainer>
          <img src={cover} alt={title} />
        </Styled.ImageContainer>
      )}
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};
