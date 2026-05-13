'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 1.6rem;
    background: #ffffff;
    color: #333;

  }
`;
