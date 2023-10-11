// import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './renderWith';
import App from '../../App';
import { RecipeProvider } from '../../context/search-results-context';

describe('Testes da página /DRINKS:', async () => {
  test('Capiturando elementos da página drinks', async () => {
    // renderWithRouter(<App />, { route: ['drinks/15997'] });

    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: 'drinks/15997' });

    const shareButton = screen.getByTestId('share-btn');
    expect(shareButton).toBeInTheDocument();
    const favoriteButton = screen.getByTestId('favorite-btn');
    expect(favoriteButton).toBeInTheDocument();
  });
});
