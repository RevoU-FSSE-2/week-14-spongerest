import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductList from '../ProductList';

const server = setupServer(
  rest.get('https://mock-api.arikmpt.com/api/category', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        products: [
          { id: 1, name: 'Product 1', status: 'Active' },
          { id: 2, name: 'Product 2', status: 'Inactive' },
        ],
      })
    );
  }),

  rest.delete('https://dummyjson.com/products/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: 'Product deleted successfully' })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders product list and handles interactions', async () => {
  render(
    <MemoryRouter initialEntries={['/product']}>
      <Routes>
        <Route path="/product" element={<ProductList />} />
      </Routes>
    </MemoryRouter>
  );

  // Wait for the products to load with an increased timeout
  await waitFor(async () => {
    try {
      console.log('Checking for Product 1...');
      expect(await screen.findByText('Product 1', {}, { timeout: 10000 })).toBeInTheDocument();

      console.log('Checking for Product 2...');
      expect(await screen.findByText('Product 2', {}, { timeout: 10000 })).toBeInTheDocument();
    } catch (error) {
      console.error('Error occurred:', error);
    }
  });


  const deleteButtons = screen.getAllByText('Delete', { exact: false });
  for (const deleteButton of deleteButtons) {
    fireEvent.click(deleteButton);

    expect(screen.getByText('Product deleted successfully')).toBeInTheDocument();
  }
});
