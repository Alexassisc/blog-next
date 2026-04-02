import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 8px;
  background-color: #eee;
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition:
    opacity 0.8s,
    transform 0.8s;

  ${Container}:hover & {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
`;
