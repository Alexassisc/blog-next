import { customRender } from '@/utils/custom-render';
import { PostCard } from '.';
import { screen } from '@testing-library/react';

const props = {
  title: 'Meu Post de Teste',
  slug: 'meu-post-de-teste',
  cover: 'image.jpg',
};

describe('<PostCard />', () => {
  it('deve renderizar o título e o link corretamente', () => {
    customRender(<PostCard {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();

    const link = screen.getByRole('link', {
      name: new RegExp(props.title, 'i'),
    });

    expect(link).toHaveAttribute('href', `/post/${props.slug}`);
  });

  it('deve renderizar a imagem de capa com o alt correto', () => {
    customRender(<PostCard {...props} />);

    const image = screen.getByRole('img', { name: props.title });
    expect(image).toHaveAttribute('src', props.cover);
  });

  it('não deve renderizar a imagem se o cover não for enviado', () => {
    customRender(<PostCard title={props.title} slug={props.slug} />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});

describe('<PostCard />', () => {
  it('deve renderizar o título corretamente como um h2', () => {
    customRender(<PostCard {...props} />);

    const title = screen.getByRole('heading', { name: props.title, level: 2 });

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle({ color: '#333' });
  });

  it('deve renderizar o container como um "article"', () => {
    customRender(<PostCard {...props} />);

    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });

  it('deve verificar se o efeito de zoom existe no estilo da imagem', () => {
    customRender(<PostCard {...props} />);

    const coverImage = screen.getByAltText(props.title);

    expect(coverImage).toHaveStyle('transition: opacity 0.8s,transform 0.8s');
  });
});
