import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  gap: 3rem;
`;

export const PostCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    object-position: center;
  }
`;

export const Title = styled.h2`
  margin-top: 0rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.4;
  color: #333;

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
`;
