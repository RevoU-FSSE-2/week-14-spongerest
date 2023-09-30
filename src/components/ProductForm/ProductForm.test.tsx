import { render, screen, fireEvent } from '@testing-library/react';
import ProductForm from '.'; // Import your ProductForm component

test('renders product form correctly', () => {
  render(<ProductForm onSubmit={() => {}} />);

  const nameInput = screen.getByLabelText('Nama Produk'); // Use getByLabelText to select the input by its associated label
  const statusSelect = screen.getByLabelText('Status Produk'); // Use getByLabelText to select the select element by its associated label
  const submitButton = screen.getByText('Submit');

  fireEvent.change(nameInput, { target: { value: 'Product Name' } });
  fireEvent.change(statusSelect, { target: { value: 'Aktiv' } });
  fireEvent.click(submitButton);

  // Add your assertions here
});