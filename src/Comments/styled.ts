import styled, { css } from 'styled-components';

export const CommentsContainer = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    width: 100%;
    border-top: 1px solid ${theme.colors.lightGray};
    padding-top: ${theme.spacings.medium};
  `}
`;
