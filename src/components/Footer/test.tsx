import { customRender } from '@/utils/custom-render';
import { Footer } from '.';
import { screen } from '@testing-library/react';
import { theme } from '@/styles/theme';

describe('<Footer/>', () => {
  it('deve renderizar o rodapé com o texto correto', () => {
    customRender(<Footer />);

    const footerText = screen.getByText(/Feito por Alex Assis - 2026/i);

    expect(footerText).toBeInTheDocument();
  });

  it('deve ter a cor de fundo correta vinda do tema', () => {
    customRender(<Footer />);

    const footerElement = screen.getByRole('contentinfo');

    expect(footerElement).toHaveStyleRule(
      'background-color',
      theme.colors.white,
    );
  });
});
