'use client';

import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.medium};
    font-weight: 800;
    text-transform: uppercase;
  `}
`;
