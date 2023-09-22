import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from './tests/renderWith';
import Login from '../components/Login';

// Definindo constantes para strings duplicadas
const EMAIL_INPUT_TESTID = 'email-input';
const PASSWORD_INPUT_TESTID = 'password-input';
const LOGIN_SUBMIT_BTN_TESTID = 'login-submit-btn';
const VALID_EMAIL = 'email@valido.com';
const VALID_PASSWORD = 'senhaValida123';

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
