import React from 'react';
import './WorkItem.css';

const WorkItem = (props) => {
    return (
        <div className='home-works__list-item column'>
            <img src={props.src} alt={props.title} />
            <p className=''>{props.title}</p>
        </div>
    );
};

export default WorkItem;