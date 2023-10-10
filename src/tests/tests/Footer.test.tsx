import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../../components/Footer';

test('O menu inferior existe e contém os ícones corretos', () => {
  render(<Footer />);

  const footer = screen.getByTestId('footer');
  expect(footer).toBeInTheDocument();

  const drinksIcon = screen.getByTestId('drinks-bottom-btn');
  expect(drinksIcon).toBeInTheDocument();
  expect(drinksIcon).toHaveAttribute('src', '/src/images/drinkIcon.svg');

  const mealsIcon = screen.getByTestId('meals-bottom-btn');
  expect(mealsIcon).toBeInTheDocument();
  expect(mealsIcon).toHaveAttribute('src', '/src/images/mealIcon.svg');
});

test('O menu inferior está fixado sempre ao final da página', () => {
  render(<Footer />);

  const footer = screen.getByTestId('footer');
  expect(footer).toHaveStyle('position: fixed;');
  expect(footer).toHaveStyle('bottom: 0;');
});

test('Testando o click nos elementos do footer Drink e Meals', async () => {
  render(<Footer />);

  const rodapeMealsIconDrink = screen.getByTestId('drinks-bottom-btn');
  expect(rodapeMealsIconDrink).toBeInTheDocument();
  await userEvent.click(rodapeMealsIconDrink);

  const rodapeMealsIconFood = screen.getByTestId('meals-bottom-btn');
  expect(rodapeMealsIconFood).toBeInTheDocument();
  await userEvent.click(rodapeMealsIconFood);
});
