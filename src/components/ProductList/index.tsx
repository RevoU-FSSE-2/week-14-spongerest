import React from 'react';
import { Product } from '../../types';

interface Props {
  data: Product[];
  columns: Array<{
    dataIndex: keyof Product | 'actions';
    title: string;
    render?: (text: unknown, record: Product) => React.ReactNode;
  }>;
}

const ProductList: React.FC<Props> = ({ data, columns }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.dataIndex === 'actions' ? 'actions' : column.dataIndex}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.dataIndex === 'actions' ? 'actions' : column.dataIndex.toString()}>
                {column.dataIndex === 'actions'
                  ? column.render?.(null, product)
                  : product[column.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
