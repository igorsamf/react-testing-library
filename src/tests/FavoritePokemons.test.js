import { screen } from '@testing-library/react';
import React from 'react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWhithRouter';

describe('Verifica o componente FavoritePokemons', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);
    const getMessage = screen.getByText(/No favorite pokemon found/i);
    expect(getMessage).toBeInTheDocument();
  });
});
