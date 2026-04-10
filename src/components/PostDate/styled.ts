import styled, { css } from 'styled-components';

export const Container = styled.time`
  ${({ theme }) => css`
    /* Muda para inline para fluir junto com o texto */
    display: inline;

    /* Mantém a cor e tamanho definidos no tema */
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.small};

    /* Remove itálico da data para dar contraste com o texto ao redor */
    font-style: normal;
    font-weight: 500;

    /* Remove qualquer margem que possa estar empurrando os elementos */
    margin: 0;
    padding: 0;
  `}
`;
