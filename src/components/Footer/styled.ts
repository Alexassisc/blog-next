'use client';
import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.text};

    padding: ${theme.spacings.large};

    text-align: center;

    font-size: ${theme.font.sizes.small};

    width: 100%;

    border-top: 0.1rem solid ${theme.colors.lightGray};

    p {
      margin: 0;
      font-weight: 500;

      color: inherit;
    }
  `}
`;
