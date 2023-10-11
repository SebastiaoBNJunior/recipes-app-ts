import { screen, waitFor } from '@testing-library/react';
import { renderWithRouter } from './renderWith';
import App from '../../App';
import { RecipeProvider } from '../../context/search-results-context';

describe('Testes na tela de RecipeDetails:', () => {
  test('Verificando se os ingredientes estão na tela.', async () => {
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/meals/52977' });
    await waitFor(() => {
      const ingredientLentils = screen.getByTestId('0-ingredient-name-and-measure');
      expect(ingredientLentils).toBeInTheDocument();
    }, { timeout: 5000 });
  });
  test('Verificando se a imagem não tem o atributo SRC.', async () => {
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/meals/52977gjh' });
    const imgNoScreen = await screen.findByRole('img', { name: /foto da receita/i });
    expect(imgNoScreen).not.toHaveAttribute('src');
  });
});
