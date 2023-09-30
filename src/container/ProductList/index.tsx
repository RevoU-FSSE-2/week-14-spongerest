import React, { useEffect, useState } from 'react';
import { ProductList as ProductListComponent } from '../../components';
import { Product, GetProductResponse } from '../../types';
import { Button } from 'react-bootstrap'; // Import Bootstrap button
import { useNavigate } from 'react-router-dom';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  const getProductList = async () => {
    const fetching = await fetch('https://mock-api.arikmpt.com/api/category');
    const response: GetProductResponse = await fetching.json();
    setProducts(response.products ?? []);
  };

  useEffect(() => {
    getProductList();
  }, []);

  const removeProduct = async (id: number) => {
    try {
      const fetching = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE',
      });

      const response = await fetching.json();

      if (response) {
        setProducts((products) => products.filter((product) => product.id !== id));
      }
    } catch (error) {
      alert(error);
    }
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Action',
      key: 'actions',
      render: (_: unknown, record: { id: number }) => (
        <>
          <Button variant="default" onClick={() => navigate(`/product/${record.id}`)}>Detail</Button>
          <Button variant="primary" onClick={() => navigate(`/product/edit/${record.id}`)}>Edit</Button>
          <Button variant="primary" onClick={() => removeProduct(record.id)}>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h3>Daftar Product</h3>
      <Button variant="primary" onClick={() => navigate('/product/new')}>
        Tambah Product Baru
      </Button>
      <ProductListComponent columns={columns} data={products} />
    </div>
  );
};

export default ProductList;
