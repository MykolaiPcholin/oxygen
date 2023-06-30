import React from 'react';
import Button from '../../module/Button/Button';
import './Work.css';

const WorkItem = ( props ) => {

    return (
            <div className='work column'>
                <img src={props.src} alt={props.title} className='work-img' />
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