'use client';

import Link from 'next/link';
import * as Styled from './styled';

export const NotFoundComponent = () => {
  return (
    <Styled.Container>
      <h1>404</h1>
      <h2>Página não encontrada</h2>

      <Link href="/">Voltar para a Home</Link>
    </Styled.Container>
  );
};
