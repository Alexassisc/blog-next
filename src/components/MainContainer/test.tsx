import { screen } from '@testing-library/react';
import { MainContainer } from '.';
import { customRender } from '@/utils/custom-render';

describe('<MainContainer />', () => {
  it('deve renderizar os elementos filhos (children)', () => {
    customRender(
      <MainContainer>
        <p>Conteúdo de Teste</p>
      </MainContainer>,
    );

    expect(screen.getByText(/conteúdo de teste/i)).toBeInTheDocument();
  });

  it('deve ter as propriedades de estilo para centralizar o conteúdo', () => {
    const { container } = customRender(<MainContainer>Conteúdo</MainContainer>);

    const mainElement = container.firstChild;

    expect(mainElement).toHaveStyle({
      'max-width': '120rem',
      margin: '0 auto',
      width: '100%',
    });
  });

  it('deve renderizar como uma tag <main> para semântica', () => {
    customRender(<MainContainer>Conteúdo</MainContainer>);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
