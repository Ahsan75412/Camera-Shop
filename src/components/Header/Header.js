import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.jpg';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand text-light" href="./"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/home" activeClassName="selected" className="nav-link text-light px-4">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" activeClassName="selected" className="nav-link text-light px-4">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" activeClassName="selected" className="nav-link text-light px-4">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" activeClassName="selected" className="nav-link text-light px-4">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;