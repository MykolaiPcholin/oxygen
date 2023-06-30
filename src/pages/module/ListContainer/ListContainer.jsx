import React from 'react';
import styles from './ListContainer.module.css';

const ListContainer = ( { variant = 'row', content} ) => {

    return (
        <div className={`${styles.list} row `}>
            {content}
        </div>
    );

};

export default ListContainer;