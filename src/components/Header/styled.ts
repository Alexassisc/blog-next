import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: #000;
  color: #fff;
  padding: 1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: px;
  margin: 0;

  a {
    color: #fff;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    padding: 2rem 1rem;
  }
`;
