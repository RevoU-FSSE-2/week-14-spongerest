import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import ProductEdit from '.';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

test('renders product edit form', async () => {
  (useParams as jest.Mock).mockReturnValue({ id: '123' });
  const mockNavigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

  render(
    <MemoryRouter initialEntries={['/product/edit/123']}>
      <Routes>
        <Route path="/product/edit/:id" element={<ProductEdit />} />
      </Routes>
    </MemoryRouter>
  );

  const nameInput = screen.getByPlaceholderText('Enter Product Name') as HTMLInputElement;
  const descriptionInput = screen.getByPlaceholderText('Enter Product Description') as HTMLInputElement;
  const submitButton = screen.getByText('Submit');

  fireEvent.change(nameInput, { target: { value: 'Updated Product Name' } });
  fireEvent.change(descriptionInput, { target: { value: 'Updated Product Description' } });
  fireEvent.click(submitButton);

  await waitFor(() => {

  });
});
