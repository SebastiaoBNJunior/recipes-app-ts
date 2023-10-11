import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import App from '../../App';
import { renderWithRouter } from './renderWith';
import { RecipeProvider } from '../../context/search-results-context';

describe('Testes da página /DRINKS:', async () => {
  test(' testando drinks in progress', async () => {
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/drinks/15997/in-progress' });

    await waitFor(() => {
      screen.getByRole('img', {
        name: /gg/i,
      });
    }, { timeout: 3000 });
    const shareBtn = screen.getByRole('img', {
      name: /share/i,
    });
    const favBtn = screen.getByRole('button', {
      name: /favorite/i,
    });
    await userEvent.click(shareBtn);
    await userEvent.click(favBtn);
    // renderWithRouter(<App />, { initialEntries: ['/drinks'] });
  });
});
