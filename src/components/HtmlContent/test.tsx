import { screen } from '@testing-library/react';
import { HtmlContent } from '.';
import { customRender } from '@/utils/custom-render';
import { theme } from '@/styles/theme';

jest.mock('remark-gfm', () => ({}));

jest.mock('react-markdown', () => {
  return function MockReactMarkdown({ children }: { children: string }) {
    if (children.startsWith('# ')) {
      return <h1>{children.replace('# ', '')}</h1>;
    }
    if (children.startsWith('```')) {
      return <pre>{children.replace(/```/g, '')}</pre>;
    }
    return <p>{children}</p>;
  };
});

describe('<HtmlContent />', () => {
  it('deve renderizar o conteúdo em formato de parágrafo', () => {
    customRender(<HtmlContent content="Este é um texto comum" />);

    const paragraph = screen.getByText('Este é um texto comum');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe('P');
  });

  it('deve renderizar títulos corretamente e aplicar styles do tema', () => {
    customRender(<HtmlContent content="# Meu Título 1" />);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'Meu Título 1',
    });
    expect(heading).toBeInTheDocument();

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
  });

  it('deve renderizar blocos de código com estilos corretos', () => {
    const markdownWithCode = '```\nconst azul = "primary";\n```';
    const { container } = customRender(
      <HtmlContent content={markdownWithCode} />,
    );

    const preElement = container.querySelector('pre');
    expect(preElement).toBeInTheDocument();

    expect(preElement).toHaveStyle({
      background: theme.colors.darkGray,
      color: theme.colors.white,
    });
  });
});
