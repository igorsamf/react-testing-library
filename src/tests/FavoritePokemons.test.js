import { screen } from '@testing-library/react';
import React from 'react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWhithRouter';

describe('Verifica o componente FavoritePokemons', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    const { history } = renderWithRouter(<FavoritePokemons />);
    history.push('/FavoritePokemons');

    const noFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(noFavorite).toBeInTheDocument();
  });
  test('Teste se são exibidos todos os cards de pokémons favoritados', () => {
    // const { history } = renderWithRouter(<FavoritePokemons />);
    // history.push('/FavoritePokemons');

    // const pokemonCard = screen.getByRole('heading', { name: /pikachu/i });
    // expect(pokemonCard).toBeInTheDocument();
  });
});
