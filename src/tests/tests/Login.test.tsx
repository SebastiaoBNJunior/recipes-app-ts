import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './renderWith';
import Login from '../../components/Login';
import App from '../../App';

// Definindo constantes para strings duplicadas
const EMAIL_INPUT_TESTID = 'email-input';
const PASSWORD_INPUT_TESTID = 'password-input';
const LOGIN_SUBMIT_BTN_TESTID = 'login-submit-btn';
const VALID_EMAIL = 'email@valido.com';
const VALID_PASSWORD = 'senhaValida123';

describe('Testes na tela de LOGIN:', () => {
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

  // Testes com useEvent para simular o usuário:
  test('Testando todo o caminho para login e posteriormente o envio para a proxima página', async () => {
    renderWithRouter(<App />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginButton = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    await userEvent.type(emailInput, 'trybe@gmail.com');
    await userEvent.type(passwordInput, '123456abcdfg');
    await userEvent.click(loginButton);

    await new Promise((resolve) => { setTimeout(resolve, 3000); });

    expect(screen.getByRole('heading', { name: /meals/i })).toBeInTheDocument();
  });
});
