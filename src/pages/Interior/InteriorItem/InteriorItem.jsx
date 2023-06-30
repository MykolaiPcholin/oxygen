import React from 'react';
import './InteriorItem.css';

const InteriorItem = ( props ) => {
    return (
        <div className='interior-item' style={ {backgroundImage: `url(${props.src})`}}>
            <p className='interior-item__description'>{props.title}</p>
        </div>
    );
};

export default InteriorItem;