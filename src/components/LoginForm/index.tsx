import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { LoginForm as LoginFormProps } from '../../types';
import { initialValues, validationSchema } from './loginFormSchema';

interface Props {
    onSubmit: (values: LoginFormProps) => void;
}

const LoginForm: React.FC<Props> = ({ onSubmit }: Props) => {
    const handleSubmit = (values: LoginFormProps) => {
    onSubmit(values);
    };

    const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
    });

    return (
    <section className="vh-100">
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                <form onSubmit={formik.handleSubmit}>
                    <div
                    className={`form-outline mb-4 ${
                        formik.errors.email ? 'has-error' : ''
                    }`}
                    >
                    <input
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        placeholder="Email"
                    />
                    <label className="form-label" htmlFor="typeEmailX-2">
                        Email
                    </label>
                    {formik.errors.email && (
                        <div className="error">{formik.errors.email}</div>
                    )}
                    </div>
                    <div className="form-outline mb-4">
                    <input
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        placeholder="Password"
                    />
                    <label className="form-label" htmlFor="typePasswordX-2">
                        Password
                    </label>
                    {formik.errors.password && (
                        <div className="error">{formik.errors.password}</div>
                    )}
                    </div>
                    <div className="btn">
                    <button
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                    >
                        Login
                    </button>
                    </div>
                </form>
                <div className="btn">
                    <Link
                    to="/signup"
                    className="btn btn-primary btn-lg btn-block"
                    >
                    Register
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    );
};

export default LoginForm;
