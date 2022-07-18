import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWhithRouter';

describe('Verifica se existe na aplicação o conjunto de links', () => {
  test('', () => {
    renderWithRouter(<App />);
    const getLinkOne = screen.getByRole('link', { name: /Home/ });
    expect(getLinkOne).toBeInTheDocument();

    const getLinkTwo = screen.getByRole('link', { name: /About/ });
    expect(getLinkTwo).toBeInTheDocument();

    const getLinkThree = screen.getByRole('link', { name: /Favorite Pokémons/ });
    expect(getLinkThree).toBeInTheDocument();
  });

  test('Verifica se a aplicação é redirecionada para a página Home', () => {
    const { history } = renderWithRouter(<App />);
    const getLinkOne = screen.getByRole('link', { name: /Home/ });
    userEvent.click(getLinkOne);
    expect(history.location.pathname).toBe('/');
  });
});
