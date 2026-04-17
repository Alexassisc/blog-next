import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small}; 
    line-height: 1.6;
    color: ${theme.colors.darkGray};

    h1 {
      font-size: ${theme.font.sizes.large};
      margin: ${theme.spacings.medium} 0;
    }

    p {
      margin-bottom: ${theme.spacings.small};
    }

    pre {
      background: ${theme.colors.darkGray};
      color: ${theme.colors.white};
      padding: ${theme.spacings.small};
      border-radius: 8px;
      overflow-x: auto;
      font-family: 'Courier New', Courier, monospace;
      margin: ${theme.spacings.medium} 0;
    }

    code {
      background: ${theme.colors.lightGray};
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family: monospace;
    }

    ul,
    ol {
      margin: ${theme.spacings.small} ${theme.spacings.medium};
    }
  `}
`;
