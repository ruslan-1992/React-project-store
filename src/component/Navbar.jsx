import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {handleCart} from './../redux/reducer/handleCart';

const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
    return (
        <>
            <nav className="navbar">
                <Link className="logo" to="/">IT's COLLECTION</Link>
                <div className="navbar-link__container">
                    <div className="navbar-link">
                        <li className="nav-item">
                            <Link className='nav-link active' to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Товары</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">О нас</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Контакты</Link>
                        </li>
                    </div>
                    <div className="navbar-buttons">
                        <Link to="/login" className="nav-buttons__link btn">
                            Войти</Link>
                        <Link to="/register" className="nav-buttons__link btn">
                            Регистрация</Link>
                        <Link to="/cart" className="nav-buttons__link btn">
                            Корзина ({state.length})</Link>    
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;