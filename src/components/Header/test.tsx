import { SITE_NAME } from '@/config/app-config';
import { customRender } from '@/utils/custom-render';
import { screen } from '@testing-library/react';
import { Header } from '.';

describe('<Header/>', () => {
  it('deve renderizar o nome do site como um link para o home', () => {
    customRender(<Header />);

    const link = screen.getByRole('link', { name: new RegExp(SITE_NAME, 'i') });

    expect(link).toBeInTheDocument();

    expect(link).toHaveAttribute('href', '/');
  });

  it('deve ter a tag semantica header (banner)', () => {
    customRender(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
