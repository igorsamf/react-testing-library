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
  test('Verifica se a aplicação é redirecionada para a página About', () => {
    const { history } = renderWithRouter(<App />);
    const getLinkTwo = screen.getByRole('link', { name: /About/ });
    userEvent.click(getLinkTwo);
    expect(history.location.pathname).toBe('/about');
  });
  test('Verifica se a aplicação é redirecionada para a página Favorites', () => {
    const { history } = renderWithRouter(<App />);
    const linkThree = screen.getByRole('link', { name: /Favorite Pokémons/ });
    userEvent.click(linkThree);
    expect(history.location.pathname).toBe('/favorites');
  });
  test('Verifica se a aplicação é redirecionada para a página NotFound', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/notFound');
    expect(history.location.pathname).toBe('/notFound');
    const getNotFound = screen.getByRole('heading', { name: /Page requested not found/ });
    expect(getNotFound).toBeInTheDocument();
  });
});
