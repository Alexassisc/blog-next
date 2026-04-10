import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: ${theme.spacings.small} 0 ${theme.spacings.medium} 0;
    font-style: italic;
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.small};

    span,
    strong,
    time {
      margin: 0 0.25rem;
    }

    strong {
      color: ${theme.colors.primary};
      font-weight: 700;
      font-style: normal;
    }

    .separator {
      margin: 0 ${theme.spacings.small};
      color: ${theme.colors.lightGray};
      font-style: normal;
    }
  `}
`;
