import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWhithRouter';

describe('Testar o componente NotFound', () => {
  test('Teste se a página contém um heading h2 com o texto', () => {
    renderWithRouter(<NotFound />);
    const pageNotFound = screen.getByRole('heading', { name: /not found/i });

    expect(pageNotFound).toBeDefined();
  });
  test('Teste se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);
    const imgNotFound = screen.getByRole('img', { name: /crying because/i });
    expect(imgNotFound).toHaveProperty('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
