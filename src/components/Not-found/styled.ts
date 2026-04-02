import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: clamp(4rem, 10vw, 8rem);
    margin: 0;
    background: linear-gradient(45-deg, #333, #888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-clip: text;
    color: transparent;
  }

  h2 {
    font-size: 1.8rem;
    color: #444;
    margin: 1rem 0;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
    max-width: 400px;
  }

  a {
    background: #000;
    color: #fff;
    padding: 0.8rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition:
      transform 0.2s,
      background 0.2s;

    &:hover {
      background: #333;
      transform: translateY(-3px);
    }
  }
`;
