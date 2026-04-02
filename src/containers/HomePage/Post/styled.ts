import styled from 'styled-components';

export const Container = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;
`;

export const CoverContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const CoverImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;

  aspect-ratio: 16 / 9;
`;
