import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Navbar from '.';

test('Navbar renders links correctly', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText('HOME')).toBeInTheDocument();
  expect(screen.getByText('Add Produk')).toBeInTheDocument();
  expect(screen.getByText('List Produk')).toBeInTheDocument();
  expect(screen.getByText('Produk Detail')).toBeInTheDocument();
  expect(screen.getByText('Edit Produk')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  expect(screen.getByText('Log Out')).toBeInTheDocument();
});