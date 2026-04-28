import styled, { css } from 'styled-components';

export const Container = styled.time`
  ${({ theme }) => css`
    display: inline;

    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.small};

    font-style: normal;
    font-weight: 500;

    margin: 0;
    padding: 0;
  `}
`;
