'use client';
import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme?.colors?.white || '#fafafa'};
    color: ${theme?.colors?.text || '#333'};

    padding: 1.5rem 0;
    text-align: center;
    font-size: 0%.85rem;
    width: 100%;
    border-top: 1px solid #eee;

    p {
      margin: 0;
      font-weight: 500;
    }
  `}
`;
