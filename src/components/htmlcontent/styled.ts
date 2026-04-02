import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;

  h1 {
    font-size: 2.5rem;
    margin: 2rem 0;
  }

  p {
    margin-bottom: 1.5rem;
  }

  pre {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    font-family: 'Courier New', Courier, monospace;
    margin: 2rem 0;
  }

  code {
    background: #eee;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
  }

  ul,
  ol {
    margin: 1.5rem 2rem;
  }
`;
