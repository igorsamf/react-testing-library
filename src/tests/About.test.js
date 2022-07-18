import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import rendertWithRouter from '../renderWhithRouter';

describe('Testa o componente About.js', () => {
  test('Verifica se a página contém as informações sobre a Pokédex', () => {
    rendertWithRouter(<About />);
    const aboutContent = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(aboutContent).toBeInTheDocument();
  });
});
test('Verifica se a aplicação tem um parágrafo com as devidas informações', () => {
  rendertWithRouter(<About />);
  const getParagraph = screen.getByText(/This application simulates a Pokédex/i, {
    exact: false,
  });
  expect(getParagraph).toBeInTheDocument();
});
test('Verifica se a aplicação tem um parágrafo com as devidas informações', () => {
  rendertWithRouter(<About />);
  const getParagraphTwo = screen.getByText(/One can filter Pokémons by type/i, {
    exact: false,
  });
  expect(getParagraphTwo).toBeInTheDocument();
});
test('Teste se a página contém a imagem de uma Pokédex', () => {
  rendertWithRouter(<About />);
  const getImg = screen.getByRole('img', { name: /pokédex/i });
  expect(getImg).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
