import React from 'react';
import { Link } from 'react-router-dom';
import './WorkItem.css';

const WorkItem = (props) => {
    return (
        <div className='home-works__list-item column'>
            <Link to={`/oxygen/works/${props.id}`}>
                <img src={props.src} alt={props.title} />
            </Link>
            <p className=''>{props.title}</p>
        </div>
    );
};

export default WorkItem;