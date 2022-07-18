import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWhithRouter';

describe('Verifica se existe na aplicação o conjunto de links', () => {
  test('', () => {
    renderWithRouter(<App />);
    const getLinkOne = screen.getByText(/Home/i);
    expect(getLinkOne).toBeInTheDocument();

    const getLinkTwo = screen.getByText(/About/i);
    expect(getLinkTwo).toBeInTheDocument();

    const getLinkThree = screen.getByText(/Favorite Pokémons/i);
    expect(getLinkThree).toBeInTheDocument();
  });
});
