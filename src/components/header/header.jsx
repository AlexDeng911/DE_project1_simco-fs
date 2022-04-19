import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <NavLink className='header_logo' to='/'>SHARETRADE.com</NavLink>
        </header>
    )
}

export default Header;