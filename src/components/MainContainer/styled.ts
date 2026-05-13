'use client';
import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.sizes.content};

    margin: 0 auto;

    padding: ${theme.spacings.medium};

    width: 100%;
    min-height: 80vh;
  `}
`;
