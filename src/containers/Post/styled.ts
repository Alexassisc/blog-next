import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    max-width: 80rem; /* 800px */
    margin: 0 auto;
    padding: ${theme.spacings.medium};

    img {
      margin-bottom: ${theme.spacings.large};
      border-radius: 0.4rem;
    }

    @media (max-width: 768px) {
      padding: ${theme.spacings.small};
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    text-align: center;

    h1 {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;
