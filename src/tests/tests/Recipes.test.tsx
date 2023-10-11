import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import App from '../../App';
import { renderWithRouter } from './renderWith';
import { RecipeProvider } from '../../context/search-results-context';

test(' testando filtro de categoria beef', async () => {
  renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/meals' });
  await waitFor(() => {
    const btnCategoryBeef = screen.getByRole('button', { name: /beef/i });
    expect(btnCategoryBeef).toBeInTheDocument();

    userEvent.click(btnCategoryBeef);
  }, { timeout: 2000 });

  const imgBeefMustardPie = await screen.findByRole('img', { name: /Beef and Mustard Pie/i });
  expect(imgBeefMustardPie).toBeVisible();

  const btnAll = screen.getByRole('button', { name: /all/i });
  expect(btnAll).toBeInTheDocument();

  await userEvent.click(btnAll);

  const imgRecipeCorba = await screen.findByRole('img', { name: /corba/i });
  expect(imgRecipeCorba).toBeInTheDocument();
});

test(' testando filtro de categoria beef', async () => {
  renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/drinks' });
  await waitFor(() => {
    const btnCategoryOrdinaryDrink = screen.getByRole('button', { name: /ordinary drink/i });
    expect(btnCategoryOrdinaryDrink).toBeInTheDocument();

    userEvent.click(btnCategoryOrdinaryDrink);
  }, { timeout: 2000 });

  const imgDayBeach = await screen.findByRole('img', { name: /a day at the beach/i });
  expect(imgDayBeach).toBeVisible();

  const btnAll = screen.getByRole('button', { name: /all/i });
  expect(btnAll).toBeInTheDocument();

  await userEvent.click(btnAll);

  const imgRecipeGG = await screen.findByRole('img', { name: /gg/i });
  expect(imgRecipeGG).toBeInTheDocument();
});
