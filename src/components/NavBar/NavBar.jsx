import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './img/logo.svg';
import bag from './img/bag.svg';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const NavBar = () => {

    const ORDER_LIST = useSelector((state) => state.orders);

    useEffect(() => {
        console.log('page load');
    }, []);

    return (
        <header className='header row'>
            <Link to='oxygen' className='logo'>
                <img src={logo} alt='Oxygen logo' className='logo-img' />
            </Link>
            <nav className='header-nav row'>
                <Link to='oxygen/about' className='header-nav__item'>About us</Link>
                <Link to='oxygen/works' className='header-nav__item'>Works</Link>
                <Link to='oxygen/interior' className='header-nav__item'>interior</Link>
                <Link to='oxygen/contacts' className='header-nav__item'>Contacts</Link>
            </nav>
            <Link to='oxygen/bag' className='bag-logo'>
                <p className='bag-logo__count'>{ORDER_LIST.orders.length}</p>
                <img src={bag} alt='bag logo' className='bag-logo__img' />
            </Link>
        </header>
    );
};

export default NavBar;