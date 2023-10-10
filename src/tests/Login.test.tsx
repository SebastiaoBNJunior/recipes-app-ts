import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from './tests/renderWith';
import Login from '../components/Login';
import App from '../App';

// Definindo constantes para strings duplicadas
const EMAIL_INPUT_TESTID = 'email-input';
const PASSWORD_INPUT_TESTID = 'password-input';
const LOGIN_SUBMIT_BTN_TESTID = 'login-submit-btn';
const VALID_EMAIL = 'email@valido.com';
const VALID_PASSWORD = 'senhaValida123';

// export const fetchByIngredient = [
//   {
//     idMeal: '53049',
//     strMeal: 'Apam balik',
//     strMealThumb: 'https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg',
//   }, {
//     idMeal: '52928',
//     strMeal: 'BeaverTails',
//     strMealThumb: 'https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg',
//   }, {
//     idMeal: '52812',
//     strMeal: 'Beef Brisket Pot Roast',
//     strMealThumb: 'https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg',
//   },
// ];

// const mockFetch = () => {
//   global.fetch = vi.fn(() => Promise.resolve({ status: 200,
//     ok: true,
//     json: () => Promise.resolve(fetchByIngredient) }) as any);
// };

// beforeEach(
//   mockFetch,
// );

// afterEach(
//   vi.restoreAllMocks,
// );

test('Cobertura de 45% da tela de login.', () => {
  renderWithRouter(<Login />);
  const loginButton = screen.getByRole('button', { name: /Entrar/i });
  expect(loginButton).toBeInTheDocument();
});

test('Verifica a existência dos campos de entrada para email e senha', () => {
  renderWithRouter(<Login />);
  const emailInput = screen.getByTestId(EMAIL_INPUT_TESTID);
  const passwordInput = screen.getByTestId(PASSWORD_INPUT_TESTID);
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('Preenche os campos de entrada e verifica os valores', () => {
  renderWithRouter(<Login />);
  const emailInput = screen.getByTestId(EMAIL_INPUT_TESTID);
  const passwordInput = screen.getByTestId(PASSWORD_INPUT_TESTID);
  fireEvent.change(emailInput, { target: { value: 'seuemail@example.com' } });
  fireEvent.change(passwordInput, { target: { value: VALID_PASSWORD } });
  expect(emailInput).toHaveValue('seuemail@example.com');
  expect(passwordInput).toHaveValue(VALID_PASSWORD);
});

test('A validação do email funciona corretamente', () => {
  renderWithRouter(<Login />);
  const emailInput = screen.getByTestId(EMAIL_INPUT_TESTID);
  const passwordInput = screen.getByTestId(PASSWORD_INPUT_TESTID);
  const loginSubmitButton = screen.getByTestId(LOGIN_SUBMIT_BTN_TESTID);
  fireEvent.change(emailInput, { target: { value: 'emailInvalido' } });
  fireEvent.change(passwordInput, { target: { value: VALID_PASSWORD } });
  expect(loginSubmitButton).toBeDisabled();
  fireEvent.change(emailInput, { target: { value: VALID_EMAIL } });
  expect(loginSubmitButton).toBeEnabled();
});

test('Deve redirecionar para a página correta após o login', () => {
  renderWithRouter(<Login />);
  const emailInput = screen.getByTestId(EMAIL_INPUT_TESTID);
  const passwordInput = screen.getByTestId(PASSWORD_INPUT_TESTID);
  const loginSubmitButton = screen.getByTestId(LOGIN_SUBMIT_BTN_TESTID);

  fireEvent.change(emailInput, { target: { value: VALID_EMAIL } });
  fireEvent.change(passwordInput, { target: { value: VALID_PASSWORD } });
  fireEvent.click(loginSubmitButton);
});

test('Deve desabilitar o botão de login quando os campos de entrada estão vazios', () => {
  renderWithRouter(<Login />);
  const loginSubmitButton = screen.getByTestId(LOGIN_SUBMIT_BTN_TESTID);

  // Não preencha os campos de entrada

  expect(loginSubmitButton).toBeDisabled();
});

// Sebastiao esta editando essa parte
test('Testando todo o caminho para login com falha e posteriormente o envio para a proxima página', async () => {
  renderWithRouter(<App />);
  // const form = document.getElementById('meuForm');
  const emailInput = screen.getByTestId('email-input');
  const passwordInput = screen.getByTestId('password-input');
  const loginButton = screen.getByRole('button', { name: /entrar/i });

  // expect(form).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();

  await userEvent.type(emailInput, 'trybe@gmail.com');
  await userEvent.type(passwordInput, '123456abcdfg');
  await userEvent.click(loginButton);

  await new Promise((resolve) => { setTimeout(resolve, 3000); });

  // Verificando a existencia dos elementos do rodapé:

  const rodapeMealsIconFood = screen.getByTestId('meals-bottom-btn');
  expect(rodapeMealsIconFood).toBeInTheDocument();
  await userEvent.click(rodapeMealsIconFood);

  // Verificando se encontra alguns elementos na página Meals:
  const titleMeals = await screen.findByText(/meals/i);
  expect(titleMeals).toBeInTheDocument();
  // const recipeZero = await screen.getByTestId('1-recipe-card');
  // expect(recipeZero).toBeInTheDocument();

  // Verificando os options e lupa da página Meaals:
  const ingredientOption = screen.getByTestId('ingredient-search-radio');
  const nameOption = screen.getByTestId('name-search-radio');
  const firstLetterOption = screen.getByTestId('first-letter-search-radio');
  const buttonSearchLupa = screen.getByTestId('search-top-btn');

  expect(ingredientOption).toBeInTheDocument();
  expect(nameOption).toBeInTheDocument();
  expect(firstLetterOption).toBeInTheDocument();
  expect(buttonSearchLupa).toBeInTheDocument();

  // Verificando os botões do menu Mels:
  const searchMenu = await screen.getByTestId('exec-search-btn');
  const beefMenu = await screen.getByTestId('Beef-category-filter');
  const breakfastMenu = await screen.getByTestId('Breakfast-category-filter');
  const chickenMenu = await screen.getByTestId('Chicken-category-filter');
  const dessertMenu = await screen.getByTestId('Dessert-category-filter');
  const goatMenu = await screen.getByTestId('Goat-category-filter');
  const allMenu = await screen.getByTestId('All-category-filter');

  expect(searchMenu).toBeInTheDocument();
  expect(beefMenu).toBeInTheDocument();
  expect(breakfastMenu).toBeInTheDocument();
  expect(chickenMenu).toBeInTheDocument();
  expect(dessertMenu).toBeInTheDocument();
  expect(goatMenu).toBeInTheDocument();
  expect(allMenu).toBeInTheDocument();

  // Simulando pesquisa de itens com o botao lupa do Meals:
  await userEvent.click(buttonSearchLupa);
  const searchInput = await screen.getByTestId('search-input');
  expect(searchInput).toBeInTheDocument();

  const searchButton = screen.getByRole('button', { name: /buscar/i });
  expect(searchButton).toBeInTheDocument();

  await userEvent.click(searchInput);
  await userEvent.type(searchInput, 'Salt');
  await userEvent.click(searchButton);

  // expect(screen.getByRole('heading', { name: /Apam balik/i })).toBeInTheDocument();
  // const apamBalikText = screen.queryByText('Apam balik');
  // expect(apamBalikText).toBeInTheDocument();

  await userEvent.click(nameOption);
  await userEvent.clear(searchInput);
  await userEvent.type(searchInput, 'Sushi');
  await userEvent.click(searchButton);

  await userEvent.click(firstLetterOption);
  await userEvent.clear(searchInput);
  await userEvent.type(searchInput, 'S');
  await userEvent.click(searchButton);

  // Simulando erro na pesquisa:

  await userEvent.click(firstLetterOption);
  await userEvent.clear(searchInput);
  await userEvent.type(searchInput, '5');
  await userEvent.click(searchButton);

  // Simulando pesquisa com o rodape de drink

  const rodapeMealsIconDrink = await screen.getByTestId('drinks-bottom-btn');
  expect(rodapeMealsIconDrink).toBeInTheDocument();
  await userEvent.click(rodapeMealsIconDrink);

  // const titleDrink = await screen.findByText(/drinks/i);
  // expect(titleDrink).toBeInTheDocument();

  await userEvent.click(buttonSearchLupa);
  await userEvent.click(searchInput);
  await userEvent.type(searchInput, 'sugar');
  await userEvent.click(searchButton);

  // await userEvent.click(searchInput);
  // await userEvent.clear(searchInput);
  // await userEvent.type(searchInput, 'abs');
  // await userEvent.click(searchButton);

  // await expect(screen.getByRole('heading', { name: /sushi/i })).toBeInTheDocument();
  // const { getByText } = render(<RecipeDetails />);
  //   const sushiHeading = getByText('Seafood');
  //   expect(sushiHeading).toBeInTheDocument();
});

// test('Testando todo o caminho para login com falha e posteriormente o envio para a proxima página', async () => {
//   renderWithRouter(<App />);

//   const searchLupa = screen.getByTestId('search-top-btn');
// });

test('Testando pagina de login e tela de perfil', async () => {
  renderWithRouter(<App />);

  const inputEmail = screen.getByTestId('email-input');
  const inputPassword = screen.getByTestId('password-input');
  const buttonEntrar = screen.getByRole('button', { name: /entrar/i });

  expect(inputEmail).toBeInTheDocument();
  expect(inputPassword).toBeInTheDocument();
  expect(buttonEntrar).toBeInTheDocument();

  await userEvent.type(inputEmail, 'testegrupo23@gmail.com');
  await userEvent.type(inputPassword, 'pirulito123');
  await userEvent.click(buttonEntrar);

  // processos pós login

  const iconPerfil = screen.getByTestId('profile-top-btn');
  expect(iconPerfil).toBeInTheDocument();
  await userEvent.click(iconPerfil);

  // expect(screen.getByRole('heading', { name: /Profile/i })).toBeInTheDocument();
  // expect(screen.getByText('Profile')).toBeInTheDocument();
  // expect(screen.getByRole('heading', { name: /testegrupo23@gmail.com/i })).toBeInTheDocument();
});

test('Testando pagina de perfil', async () => {
  renderWithRouter(<App />, { initialEntries: ['/profile'] });
  expect(screen.getByRole('heading', { name: /Profile/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Done Recipes/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Favorite Recipes/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Logout/i })).toBeInTheDocument();

  // const buttonDoneRecipes = screen.getByRole('button', { name: /Done Recipes/i });
  // const buttonFavoriteRecipes = screen.getByRole('button', { name: /Favorite Recipes/i });
  // const buttonLogout = screen.getByRole('button', { name: /Logout/i });

  const buttonDoneRecipes = screen.getByTestId('profile-done-btn');
  const buttonFavoriteRecipes = screen.getByTestId('profile-favorite-btn');
  const buttonLogout = screen.getByTestId('profile-logout-btn');

  userEvent.click(buttonDoneRecipes);
  const titleDoneRecipe = await screen.findByText(/Done Recipes/i);
  expect(titleDoneRecipe).toBeInTheDocument();
  // const buttonVoltar = screen.getByRole('button', { name: /Voltar/i });
  const buttonVoltar = screen.getByTestId('profile-back-btn');
  await userEvent.click(buttonVoltar);
  await userEvent.click(buttonFavoriteRecipes);
  await userEvent.click(buttonVoltar);
  await userEvent.click(buttonLogout);
});
