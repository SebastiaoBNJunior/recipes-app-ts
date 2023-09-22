import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';

test('Cobertura de 45% da tela de login.'); {
  render(<Login />);
  const loginButton = screen.getByRole('button', { name: /Enter/i });
  expect(loginButton).toBeInTheDocument();
}

test('Verifica a existência dos campos de entrada para email e senha', () => {
  render(<Login />);

  const emailInput = screen.getByTestId('email-input');
  const passwordInput = screen.getByTestId('password-input');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('Preenche os campos de entrada e verifica os valores', () => {
  render(<Login />);

  const emailInput = screen.getByTestId('email-input');
  const passwordInput = screen.getByTestId('password-input');

  fireEvent.change(emailInput, { target: { value: 'seuemail@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'suaSenha123' } });

  expect(emailInput).toHaveValue('seuemail@example.com');
  expect(passwordInput).toHaveValue('suaSenha123');
});
