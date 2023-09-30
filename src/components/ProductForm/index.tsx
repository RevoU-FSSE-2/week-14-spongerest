import React from 'react';
import { useFormik } from 'formik';
import { Product, ProductForm as ProductFormProps } from '../../types';
import { validationSchema, statusOptions } from './productFormSchema';

interface Props {
    onSubmit: (values: ProductFormProps) => void;
    product?: Product;
}

const ProductForm: React.FC<Props> = ({ onSubmit }: Props) => {
    const handleSubmit = (values: ProductFormProps) => {
    onSubmit(values);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            status: '',
            action: 'edit',
        },
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
        });
        

    return (
    <div className="card" style={{ width: '350px' }}>
        <div className="card-body">
        <h5 className="card-title">Product Form</h5>
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
            <label htmlFor="name" className="is-invalid">
                Nama Produk
            </label>
            <input
                type="text"
                className={`form-control ${formik.errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
            />
            {formik.errors.name && (
                <div className="invalid-feedback">{formik.errors.name}</div>
            )}
            </div>
            <div className="mb-3">
            <label htmlFor="status" className="is-invalid">
                Status Produk
            </label>
            <select
            id="status"
            name="status"
            className={`form-select ${formik.errors.status ? 'is-invalid' : ''}`}
            value={formik.values.status}
            onChange={formik.handleChange}
            >
            <option value="">Select Status</option>
            {statusOptions.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
            ))}
        </select>
            {formik.errors.status && (
                <div className="invalid-feedback">{formik.errors.status}</div>
            )}
            </div>
            <button type="submit" className="btn btn-primary">
            Submit
            </button>
        </form>
        </div>
    </div>
    );
};

export default ProductForm;
