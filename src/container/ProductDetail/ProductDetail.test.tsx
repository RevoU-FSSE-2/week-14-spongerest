import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from '.';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '123' }), 
}));

test('renders product detail with id', () => {
  render(
    <MemoryRouter initialEntries={['/product/123']}>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </MemoryRouter>
  );

  const detailText = screen.getByText('Detail produk dengan id: 123');
  expect(detailText).toBeInTheDocument();
});
