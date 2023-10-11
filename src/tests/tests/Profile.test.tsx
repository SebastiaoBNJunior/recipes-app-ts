import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../../App';
import { renderWithRouter } from './renderWith';
import { RecipeProvider } from '../../context/search-results-context';

describe('Testes da página PROFILE:', async () => {
  test('Verificando a existencia de elementos ná pagina Profile', async () => {
    // renderWithRouter(<App />, { initialEntries: ['/profile'] });
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/profile' });

    expect(screen.getByRole('heading', { name: /Profile/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Done Recipes/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Favorite Recipes/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Logout/i })).toBeInTheDocument();
    const perfilIcon = screen.getByTestId('profile-top-btn');
    expect(perfilIcon).toBeInTheDocument();
  });

  test('Testando botões da página de Profile', async () => {
    // renderWithRouter(<App />, { initialEntries: ['/profile'] });
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/profile' });

    const buttonDoneRecipes = screen.getByTestId('profile-done-btn');
    const buttonFavoriteRecipes = screen.getByTestId('profile-favorite-btn');
    const buttonLogout = screen.getByTestId('profile-logout-btn');

    await userEvent.click(buttonDoneRecipes);
    const titleDoneRecipe = await screen.findByText(/Done Recipes/i);
    expect(titleDoneRecipe).toBeInTheDocument();
    const buttonVoltar = screen.getByTestId('profile-back-btn');
    await userEvent.click(buttonVoltar);
    await userEvent.click(buttonFavoriteRecipes);
    await userEvent.click(buttonVoltar);
    await userEvent.click(buttonLogout);
  });
});
