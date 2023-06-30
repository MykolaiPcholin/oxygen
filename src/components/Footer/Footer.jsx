import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import footer_logo from './img/footer-logo.svg';
import instagram from './img/Instagram.svg';
import facebook from './img/Facebook.svg';
import mail from './img/mail.svg';

const Footer = () => {
    return (
        <footer className='footer row'>
            <div className='footer-links row'>
                <div className='footer-links__column column'>
                    <Link to='oxygen/about' className='footer-links__column-item'>about us</Link>
                    <Link to='oxygen' className='footer-links__column-item'>Collections</Link>
                    <Link to='oxygen' className='footer-links__column-item'>Gallery</Link>
                </div>
                <div className='footer-links__column column'>
                    <Link to='oxygen' className='footer-links__column-item'>In stoсk</Link>
                    <Link to='oxygen' className='footer-links__column-item'>What tittle?</Link>
                    <Link to='oxygen/contacts' className='footer-links__column-item'>Contacts</Link>
                </div>
            </div>
            <Link to='oxygen' className='footer-logo'>
                <img src={footer_logo} alt='Oxygen footer logo' className='footer-logo__img' />
            </Link>
            <div className='footer-links row'>
                <h3 className='footer-links__column-item'>Contact me:</h3>
                <div className='footer-links__column column'>
                    <Link to='oxygen' className='footer-links__column-media row'>
                        <img src={mail} alt='mail'/>
                        <p>kysen@gmail.com</p>
                    </Link>
                    <Link to='oxygen' className='footer-links__column-media row'>
                        <img src={instagram} alt='instagram'/>
                        <p>Instagram</p>
                    </Link>
                    <Link to='oxygen' className='footer-links__column-media row'>
                        <img src={facebook} alt='facebook'/>
                        <p>Facebook</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;