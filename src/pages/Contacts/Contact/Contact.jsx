import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = ( props ) => {
    return (
        <div className='contact row'>
            <img src={props.media} alt={props.title} className='contact-img' />
            <Link className='contact-name' to={props.src}>{props.title}</Link>
        </div>
    );
};

export default Contact;