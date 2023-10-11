import { vi } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './renderWith';
import Header from '../../components/Header';
import { RecipeProvider } from '../../context/search-results-context';
import App from '../../App';

const testIdSearchInput = 'search-input';

describe('Testes do HEADER:', async () => {
  test('Verificando se os elementos estão na tela', async () => {
    renderWithRouter(<Header title="fsd" search />);
    const headH1 = screen.getByRole('heading');
    const aElement = screen.getByRole('link');
    const imgSearch = screen.getByTestId('search-top-btn');

    await fireEvent.click(imgSearch);
    const inputSearch = screen.getByTestId(testIdSearchInput);

    expect(inputSearch).toBeInTheDocument();

    await fireEvent.click(imgSearch);
    expect(inputSearch).not.toBeInTheDocument();

    expect(headH1).toBeVisible();
    expect(aElement).toHaveAttribute('href', '/profile');
    expect(imgSearch).toBeVisible();
  });
  test('erro ao digitar duas letras para o radio de 1° letra', async () => {
    const spy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: 'drinks/' });
    const buttonLup = screen.getByRole('img', { name: /ícone de pesquisa/i });
    const radioFirstLetter = screen.getByRole('radio', { name: /primeira letra/i });
    const btnSearch = screen.getByRole('button', { name: /buscar/i });

    await userEvent.click(buttonLup);
    const inputSearch = screen.getByTestId(testIdSearchInput);
    await userEvent.type(inputSearch, 'df');
    await userEvent.click(radioFirstLetter);
    await userEvent.click(btnSearch);

    // expect(screen.getByText('Your search must have only 1 (one) character')).toBeVisible();
    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith('Your search must have only 1 (one) character');
    });
    spy.mockRestore();
  });
  test('Verificando erro de receita ausente', async () => {
    const spy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/meals' });
    const buttonLup = screen.getByRole('img', { name: /ícone de pesquisa/i });
    const radioName = screen.getByRole('radio', { name: /nome/i });
    const btnSearch = screen.getByRole('button', { name: /buscar/i });

    await userEvent.click(buttonLup);
    const inputSearch = screen.getByTestId(testIdSearchInput);
    await userEvent.type(inputSearch, 'ovo');
    await userEvent.click(radioName);
    await userEvent.click(btnSearch);

    // expect(screen.getByText('Your search must have only 1 (one) character')).toBeVisible();
    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith("Sorry, we haven't found any recipes for these filters.");
    });
    spy.mockRestore();
  });
});
