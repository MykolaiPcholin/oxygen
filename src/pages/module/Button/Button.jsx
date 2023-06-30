import React from 'react';
import { Link } from 'react-router-dom';
import style from './Button.module.css';

const Button = ({ variant = 'btn', link, func}) => {

    return (
        <Link to={link} className={style.btn} onClick={func}>{variant}</Link>
    );
};

export default Button;