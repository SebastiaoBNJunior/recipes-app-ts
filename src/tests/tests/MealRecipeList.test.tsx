import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouter } from './renderWith';

describe('Testes da página MEALS:', async () => {
  test('Capiturando elementos da página meals', async () => {
    renderWithRouter(<App />, { initialEntries: ['/meals'] });

    await new Promise((resolve) => { setTimeout(resolve, 3000); });

    const rodapeMealsIconFood = screen.getByTestId('meals-bottom-btn');
    expect(rodapeMealsIconFood).toBeInTheDocument();
    await userEvent.click(rodapeMealsIconFood);

    const titleMeals = await screen.findByText(/meals/i);
    expect(titleMeals).toBeInTheDocument();
    // const firstCard = screen.getByTestId('0-card-name');
    // expect(firstCard).toBeInTheDocument();

    // Verificando os options e lupa da página Meaals:
    const ingredientOption = screen.getByTestId('ingredient-search-radio');
    const nameOption = screen.getByTestId('name-search-radio');
    const firstLetterOption = screen.getByTestId('first-letter-search-radio');
    const buttonSearchLupa = screen.getByTestId('search-top-btn');

    expect(ingredientOption).toBeInTheDocument();
    expect(nameOption).toBeInTheDocument();
    expect(firstLetterOption).toBeInTheDocument();
    expect(buttonSearchLupa).toBeInTheDocument();

    const searchMenu = await screen.findByTestId('exec-search-btn');
    const beefMenu = await screen.findByTestId('Beef-category-filter');
    const breakfastMenu = await screen.findByTestId('Breakfast-category-filter');
    const chickenMenu = await screen.findByTestId('Chicken-category-filter');
    const dessertMenu = await screen.findByTestId('Dessert-category-filter');
    const goatMenu = await screen.findByTestId('Goat-category-filter');
    const allMenu = await screen.findByTestId('All-category-filter');

    expect(searchMenu).toBeInTheDocument();
    expect(beefMenu).toBeInTheDocument();
    expect(breakfastMenu).toBeInTheDocument();
    expect(chickenMenu).toBeInTheDocument();
    expect(dessertMenu).toBeInTheDocument();
    expect(goatMenu).toBeInTheDocument();
    expect(allMenu).toBeInTheDocument();
  });
  test('Clicando nas options e buscando', async () => {
    renderWithRouter(<App />, { initialEntries: ['/meals'] });

    const buttonSearchLupaa = screen.getByTestId('search-top-btn');
    await userEvent.click(buttonSearchLupaa);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByTestId('exec-search-btn');
    expect(searchButton).toBeInTheDocument();

    await userEvent.type(searchInput, 'Salt');
    await userEvent.click(searchButton);

    const nameOption = screen.getByTestId('name-search-radio');
    await userEvent.click(nameOption);
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'Sushi');
    await userEvent.click(searchButton);

    const firstLetterOption = screen.getByTestId('first-letter-search-radio');
    await userEvent.click(firstLetterOption);
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'S');
    await userEvent.click(searchButton);

    // await new Promise((resolve) => { setTimeout(resolve, 2000); });
    // expect(screen.getByText('Apam balik')).toBeInTheDocument();
  });
  test('Simulando erro de pesquisa em um campo option', async () => {
    renderWithRouter(<App />, { initialEntries: ['/meals'] });

    const buttonSearchLupaa = screen.getByTestId('search-top-btn');
    await userEvent.click(buttonSearchLupaa);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByTestId('exec-search-btn');
    expect(searchButton).toBeInTheDocument();

    const firstLetterOption = screen.getByTestId('first-letter-search-radio');
    await userEvent.click(firstLetterOption);
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, '5');
    await userEvent.click(searchButton);
  });
});

//   // Simulando erro na pesquisa:

//   await userEvent.click(firstLetterOption);
//   await userEvent.clear(searchInput);
//   await userEvent.type(searchInput, '5');
//   await userEvent.click(searchButton);

//   // Simulando pesquisa com o rodape de drink

//   const rodapeMealsIconDrink = await screen.getByTestId('drinks-bottom-btn');
//   expect(rodapeMealsIconDrink).toBeInTheDocument();
//   await userEvent.click(rodapeMealsIconDrink);

//   // const titleDrink = await screen.findByText(/drinks/i);
//   // expect(titleDrink).toBeInTheDocument();

//   await userEvent.click(buttonSearchLupa);
//   await userEvent.click(searchInput);
//   await userEvent.type(searchInput, 'sugar');
//   await userEvent.click(searchButton);

//   // await userEvent.click(searchInput);
//   // await userEvent.clear(searchInput);
//   // await userEvent.type(searchInput, 'abs');
//   // await userEvent.click(searchButton);

//   // await expect(screen.getByRole('heading', { name: /sushi/i })).toBeInTheDocument();
//   // const { getByText } = render(<RecipeDetails />);
//   //   const sushiHeading = getByText('Seafood');
//   //   expect(sushiHeading).toBeInTheDocument();
// });

// // test('Testando todo o caminho para login com falha e posteriormente o envio para a proxima página', async () => {
// //   renderWithRouter(<App />);

// //   const searchLupa = screen.getByTestId('search-top-btn');
// // });

// test('Testando pagina de login e tela de perfil', async () => {
//   renderWithRouter(<App />);

//   const inputEmail = screen.getByTestId('email-input');
//   const inputPassword = screen.getByTestId('password-input');
//   const buttonEntrar = screen.getByRole('button', { name: /entrar/i });

//   expect(inputEmail).toBeInTheDocument();
//   expect(inputPassword).toBeInTheDocument();
//   expect(buttonEntrar).toBeInTheDocument();

//   await userEvent.type(inputEmail, 'testegrupo23@gmail.com');
//   await userEvent.type(inputPassword, 'pirulito123');
//   await userEvent.click(buttonEntrar);

//   // processos pós login

//   const iconPerfil = screen.getByTestId('profile-top-btn');
//   expect(iconPerfil).toBeInTheDocument();
//   await userEvent.click(iconPerfil);

//   // expect(screen.getByRole('heading', { name: /Profile/i })).toBeInTheDocument();
//   // expect(screen.getByText('Profile')).toBeInTheDocument();
//   // expect(screen.getByRole('heading', { name: /testegrupo23@gmail.com/i })).toBeInTheDocument();
