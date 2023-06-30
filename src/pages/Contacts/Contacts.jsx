import React from 'react';
import './Contacts.css';
import Section from '../module/Section/Section';
import Contact from './Contact/Contact';
import facebook from './img/Facebook.svg';
import instagram from './img/Instagram.svg';
import email from './img/mail.svg';

const Contacts = () => {

    const contacts_list = [
        {
            id: 0,
            src: '#',
            media: facebook,
            title: 'Facebook'
        },
        {
            id: 1,
            src: '#',
            media: instagram,
            title: 'Instagram'
        },
        {
            id: 2,
            src: '#',
            media: email,
            title: 'kysen@gmail.com'
        },
    ];

    let elements = [];

    contacts_list.forEach((element) => {
        elements.push(<Contact key={element.id} {...element} />)
    });
    return (
        <Section content={
            <>
                <h1 className='page-title'>Contacts</h1>
                <div className='contacts column'>
                    {elements} 
                </div>
            </>
        } />
    );
};

export default Contacts;