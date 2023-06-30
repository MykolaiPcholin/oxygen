import React from 'react';
import styles from './Section.module.css';

const Section = ({ variant = 'section', content}) => {
    return (
        <section className={`${styles.section} column`}>
            {content}
        </section>
    );
};

export default Section;