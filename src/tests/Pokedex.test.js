import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWhithRouter';
import App from '../App';

describe('Teste o componente Pokedex', () => {
  test('Teste se a página contém um heading h2 com o texto', () => {
    renderWithRouter(<App />);
    const encountered = screen.getByRole('heading', { name: /Encountered/i, level: 2 });
    expect(encountered).toBeInTheDocument();
  });
  test('Se é exibido o próximo pokémon da lista quando o botão Próximo pokémon é clicado',
    () => {
      renderWithRouter(<App />);
      const btn = screen.getByText(/Próximo pokémon/i);
      expect(btn).toBeInTheDocument();

      userEvent.click(btn);
      expect(screen.getByText('Charmander')).toBeInTheDocument();
    });
  test(`O primeiro pokémon da lista deve ser mostrado ao
    clicar no botão, se estiver no último pokémon da lista`,
  () => {
    renderWithRouter(<App />);
    const status = screen.getByText('Psychic');
    expect(status).toBeInTheDocument();
    const btn = screen.getByRole('button', { name: 'Próximo pokémon' });
    userEvent.click(status);
    userEvent.click(btn);
    userEvent.click(btn);

    expect(screen.getByText('Alakazam')).toBeInTheDocument();
  });
  test('Verifica se é mostrado apenas um pokémon por vez',
    () => {
      renderWithRouter(<App />);
      const pokeImg = screen.getAllByRole('img');

      expect(pokeImg).toHaveLength(1);
    });

  test('Testa um botão de filtragem para cada tipo de pokémon, sem repetição',
    () => {
      renderWithRouter(<App />);
      const pokemonType = screen.getAllByTestId('pokemon-type-button');
      const idLength = 7;
      expect(pokemonType).toHaveLength(idLength);
    });
  test(`A partir da seleção de um botão de tipo, 
    a Pokédex deve circular somente pelos pokémons daquele tipo; 
    O botão All precisa estar sempre visível.`,
  () => {
    renderWithRouter(<App />);
    const btn = screen.getByRole('button', { name: 'Fire' });
    userEvent.click(btn);

    const charmander = screen.getByText('Charmander');
    expect(charmander).toBeInTheDocument();

    const buttonNext = screen.getByRole('button', { name: 'Próximo pokémon' });
    userEvent.click(buttonNext);
    const rapidash = screen.getByText('Rapidash');
    expect(rapidash).toBeInTheDocument();

    const buttonAll = screen.getByText('All');
    expect(buttonAll).toBeInTheDocument();

    userEvent.click(buttonAll);
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });
});
