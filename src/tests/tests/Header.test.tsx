import { screen } from '@testing-library/dom';
import { renderWithRouter } from './renderWith';
import Header from '../../components/Header';

test('Verificando se os elementos estão na tela', async () => {
  renderWithRouter(<Header title="fsd" search />);
  const heading = screen.getByRole('heading');

  expect(heading).toBeVisible();
});
