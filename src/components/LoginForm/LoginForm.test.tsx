// import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react'
import LoginForm from '.';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';



test('submits the form with correct data', () => {

  const onSubmit = jest.fn();

  render(
  <MemoryRouter>
  <LoginForm onSubmit={onSubmit}/>
  </MemoryRouter>);


  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'test@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: 'password123' },
  });


  fireEvent.click(screen.getByText('Login'));


  expect(onSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123',
  },expect.anything()
  );
});