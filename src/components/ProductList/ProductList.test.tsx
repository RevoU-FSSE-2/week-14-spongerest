import { render, screen } from '@testing-library/react';

import ProductList from '.';
import { Product } from 'src/types';

const mockData: Product[] = [
  { id: 1, name: 'Product 1', status: 'In Stock', action: 'edit' },
  { id: 2, name: 'Product 2', status: 'Out of Stock', action: 'edit' },
];

type Column = {
  dataIndex: keyof Product;
  title: string;
  render?: (text: unknown, record: Product) => React.ReactNode;
};

const mockColumns: Column[] = [
  { dataIndex: 'name', title: 'Product Name' },
  { dataIndex: 'status', title: 'Status' },
];

test('ProductList renders correctly', () => {
  render(<ProductList data={mockData} columns={mockColumns} />);


  expect(screen.getByText('Product Name')).toBeInTheDocument();


  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();

});
