import React from 'react';
import Button from '../../module/Button/Button';
import './Work.css';
import { Link } from 'react-router-dom';

const WorkItem = ( props ) => {

    return (
            <div className='work column'>
                <Link to={`/oxygen/works/${props.id}`} className='work-link'>
                    <img src={props.src} alt={props.title} className='work-img' />
                </Link>
                <h2 className='work-title'>{props.title}</h2>
                <p className='work-size'>{props.size}</p>
                <div className='work-details row'>
                    <p className='work-price'>{props.price}$</p>
                    <Button variant='see details' link={`/oxygen/works/${props.id}`} />
                </div>
            </div>
    );
};

export default WorkItem;