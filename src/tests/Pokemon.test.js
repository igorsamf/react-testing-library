import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWhithRouter';

describe('Testa o componente Pokemon', () => {
  test('Testa se o card com todas informações do pokemon é renderizado', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByText('Pikachu');
    const pokemonType = screen.getByTestId('pokemon-type');
    const pokemonWeight = screen.getByText('Average weight: 6.0 kg');
    const altText = screen.getByAltText('Pikachu sprite');
    const img = screen.getByRole('img');
    const pokemonDetails = screen.getByRole('link', { name: 'More details' });

    expect(pokemonName).toBeDefined();
    expect(pokemonType).toBeDefined();
    expect(pokemonType).toHaveTextContent('Electric');
    expect(pokemonWeight).toBeDefined();
    expect(altText).toBeDefined();
    expect(img.src).toContain('025');
    expect(pokemonDetails.href).toContain('pokemons/25');
  });
  test('Se o card contém a estrela caso o pokemon seja favoritado', () => {
    const { history } = renderWithRouter(<App />);
    const testPokemon = screen.getByText('Pikachu');
    expect(testPokemon).toBeDefined();
    const linkDetails = screen.getByRole('link', { name: 'More details' });
    userEvent.click(linkDetails);

    const { location: { pathname } } = history;
    expect(pathname).toContain('pokemons/25');
    const pikachuDetails = screen.getByRole('heading', { name: 'Pikachu Details' });
    expect(pikachuDetails).toBeDefined();
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);

    const img = screen.getByAltText('Pikachu is marked as favorite');
    expect(img).toBeDefined();
    expect(img.src).toContain('star');
  });
});
