import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter, Route } from 'react-router-dom';
import ProductNew from '.';


const server = setupServer(

  rest.post('https://mock-api.arikmpt.com/api/category/create', (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json({ message: 'Product created successfully' })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders product new form and handles form submission', async () => {

  render(
    <MemoryRouter initialEntries={['/product/new']}>
      <Route path="/product/new">
        <ProductNew />
      </Route>
    </MemoryRouter>
  );


  const nameInput = screen.getByPlaceholderText('Name');
  const statusInput = screen.getByPlaceholderText('Status');
  const submitButton = screen.getByText('Submit');

  fireEvent.change(nameInput, { target: { value: 'New Product' } });
  fireEvent.change(statusInput, { target: { value: 'Active' } });
  fireEvent.click(submitButton);


  await waitFor(() => {
    expect(screen.getByText('Product created successfully')).toBeInTheDocument();
  });
});
