import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { LoginForm as LoginFormProps } from '../../types';
import { MemoryRouter } from 'react-router-dom';

import Login from '.';

const server = setupServer(
  rest.post('https://mock-api.arikmpt.com/api/user/login', (req, res, ctx) => {
    const { email, password } = req.body as LoginFormProps;
    if (email === 'test@example.com' && password === 'password123') {
      return res(
        ctx.status(200),
        ctx.json({ token: 'mockToken' })
      );
    } else {
      return res(
        ctx.status(400),
        ctx.json({ message: 'Invalid credentials' })
      );
    }
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Login form renders and handles submit', async () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const submitButton = screen.getByText('Login');

  userEvent.type(emailInput, 'test@example.com');
  userEvent.type(passwordInput, 'password123');
  userEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.queryByText('Invalid credentials')).toBeNull();
  });

  expect(localStorage.getItem('token')).toBe('mockToken');

});
