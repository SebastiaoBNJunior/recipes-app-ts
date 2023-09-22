import { screen } from '@testing-library/dom';
import { renderWithRouter } from './renderWith';
import Header from '../../components/Header';

test('Verificando se os elementos estão na tela', async () => {
  renderWithRouter(<Header title="fsd" search />);
  const headH1 = screen.getByRole('heading');
  const aElement = screen.getByRole('link');

  expect(headH1).toBeVisible();
  expect(aElement).toHaveAttribute('href', '/profile');
});
