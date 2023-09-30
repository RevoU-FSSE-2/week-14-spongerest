import { render, screen, fireEvent } from '@testing-library/react';
import ProductForm from '.'; 

test('renders product form correctly', () => {
  render(<ProductForm onSubmit={() => {}} />);

  const nameInput = screen.getByLabelText('Nama Produk'); 
  const statusSelect = screen.getByLabelText('Status Produk');
  const submitButton = screen.getByText('Submit');

  fireEvent.change(nameInput, { target: { value: 'Product Name' } });
  fireEvent.change(statusSelect, { target: { value: 'Aktiv' } });
  fireEvent.click(submitButton);

});