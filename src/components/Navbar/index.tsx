import React from 'react';
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
        HOME
        </a>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/product/new">
                Add Produk
            </Link>
            </li>
        </ul>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/product">
                List Produk
            </Link>
            </li>
        </ul>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/product/:id">
                Produk Detail
            </Link>
            </li>
        </ul>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/product/edit/:id">
                Edit Produk
            </Link>
            </li>
        </ul>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
            Search
            </button>
        </form>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
                Log Out
            </Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
);
};

export default Navbar;
