import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  img {
    max-width: 100%;
    border-radius: 8px;
  }
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

    transition: opacity 0.8s;
  }

  ${Container}:hover & img {
    opacity: 0.8;
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
