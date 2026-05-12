import { theme } from '@/styles/theme';
import { Heading } from '.';
import { screen } from '@testing-library/react';
import { customRender } from '@/utils/custom-render';

describe('<Heading />', () => {
  it('deve renderizar o componente com o texto correto', () => {
    customRender(<Heading>Olá Mundo!</Heading>);

    expect(
      screen.getByRole('heading', { name: /Olá Mundo!/i }),
    ).toBeInTheDocument();
  });

  it('deve ter os estilos corretos (exemplo)', () => {
    customRender(<Heading>Texto com Estilo</Heading>);

    const heading = screen.getByText(/texto com estilo/i);

    expect(heading).toHaveStyleRule('color', theme.colors.primary);
  });
});
