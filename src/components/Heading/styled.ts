import styled, { css } from 'styled-components';

export const Container = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin: 1.5rem 0;
    line-height: 1.2;
    font-weight: 800;
    text-align: left;
  `}
`;
