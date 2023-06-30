import React from 'react';
import Button from '../../../module/Button/Button';
import Section from '../../../module/Section/Section';
import ListContainer from '../../../module/ListContainer/ListContainer';
import WorkItem from './WorkItem/WorkItem';
import { useSelector } from 'react-redux';

const WorksSection = () => {

    const WORKS_LIST = useSelector((state) => state.works);

    let elements = [];
    
    WORKS_LIST.forEach((element) => {
        if (element.id <= 5) {
            elements.push(<WorkItem key={element.id} {...element} />)
        }
    })

    return (
        <Section content={
            <>
                <h2 className='title'>Works</h2>
                <ListContainer content={
                    elements
                } />
                <Button variant='view more' link={'/oxygen/works'} />
            </>
        } />
    );
};

export default WorksSection;