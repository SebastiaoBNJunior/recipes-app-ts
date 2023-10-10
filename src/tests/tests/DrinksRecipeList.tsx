import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../../App';
import { renderWithRouter } from './renderWith';

describe('Testes da página /DRINKS:', async () => {
  test('Capiturando elementos da página drinks', async () => {
    renderWithRouter(<App />, { initialEntries: ['/drinks'] });

    await new Promise((resolve) => { setTimeout(resolve, 3000); });

    const titleDrink = await screen.findByText(/drinks/i);
    expect(titleDrink).toBeInTheDocument();

    const ingredientOption = screen.getByTestId('ingredient-search-radio');
    const nameOption = screen.getByTestId('name-search-radio');
    const firstLetterOption = screen.getByTestId('first-letter-search-radio');
    const buttonSearchLupa = screen.getByTestId('search-top-btn');

    expect(ingredientOption).toBeInTheDocument();
    expect(nameOption).toBeInTheDocument();
    expect(firstLetterOption).toBeInTheDocument();
    expect(buttonSearchLupa).toBeInTheDocument();

    const searchMenu = await screen.findByTestId('exec-search-btn');
    const ordinaryDrikMenu = await screen.findByTestId('Ordinary Drink-category-filter');
    const cocktailMenu = await screen.findByTestId('Cocktail-category-filter');
    const shakeMenu = await screen.findByTestId('Shake-category-filter');
    const otherMenu = await screen.findByTestId('Other / Unknown-category-filter');
    const cocoaMenu = await screen.findByTestId('Cocoa-category-filter');
    const allMenu = await screen.findByTestId('All-category-filter');

    expect(searchMenu).toBeInTheDocument();
    expect(ordinaryDrikMenu).toBeInTheDocument();
    expect(cocktailMenu).toBeInTheDocument();
    expect(shakeMenu).toBeInTheDocument();
    expect(otherMenu).toBeInTheDocument();
    expect(cocoaMenu).toBeInTheDocument();
    expect(allMenu).toBeInTheDocument();
  });
  test('Capiturando elementos da página drinks', async () => {
    renderWithRouter(<App />, { initialEntries: ['/drinks'] });

    const buttonSearchLupaa = screen.getByTestId('search-top-btn');
    await userEvent.click(buttonSearchLupaa);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByTestId('exec-search-btn');
    expect(searchButton).toBeInTheDocument();

    await userEvent.type(searchInput, 'Sugar');
    await userEvent.click(searchButton);

    const nameOption = screen.getByTestId('name-search-radio');
    await userEvent.click(nameOption);
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'Absolut');
    await userEvent.click(searchButton);

    const firstLetterOption = screen.getByTestId('first-letter-search-radio');
    await userEvent.click(firstLetterOption);
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'S');
    await userEvent.click(searchButton);
  });
  test('Simulando erro de pesquisa em um campo option', async () => {
    renderWithRouter(<App />, { initialEntries: ['/drinks'] });

    const buttonSearchLupaa = screen.getByTestId('search-top-btn');
    await userEvent.click(buttonSearchLupaa);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByTestId('exec-search-btn');
    expect(searchButton).toBeInTheDocument();

    const firstLetterOption = screen.getByTestId('first-letter-search-radio');
    await userEvent.click(firstLetterOption);
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'S535235');
    await userEvent.click(searchButton);
  });
});
