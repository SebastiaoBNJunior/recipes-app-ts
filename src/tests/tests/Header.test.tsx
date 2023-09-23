import { screen, fireEvent } from '@testing-library/dom';
import { renderWithRouter } from './renderWith';
import Header from '../../components/Header';

test('Verificando se os elementos estão na tela', async () => {
  renderWithRouter(<Header title="fsd" search />);
  const headH1 = screen.getByRole('heading');
  const aElement = screen.getByRole('link');
  const imgSearch = screen.getByTestId('search-top-btn');

  await fireEvent.click(imgSearch);
  const inputSearch = screen.getByTestId('search-input');

  expect(inputSearch).toBeInTheDocument();

  await fireEvent.click(imgSearch);
  expect(inputSearch).not.toBeInTheDocument();

  expect(headH1).toBeVisible();
  expect(aElement).toHaveAttribute('href', '/profile');
  expect(imgSearch).toBeVisible();
});
