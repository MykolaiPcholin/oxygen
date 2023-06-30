import React from 'react';
import Section from '../module/Section/Section';
import ListContainer from '../module/ListContainer/ListContainer';
import Work from './Work/Work';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';

const Works = () => {

    const location = useLocation();

    const WORKS_LIST = useSelector((state) => state.works);

    let elements = [];

    WORKS_LIST.forEach((element) => {
        elements.push(<Work key={element.id + Math.random()} {...element}/>)
    });
    
    return (
        <Section content={
            <>
                {/[0-9]/.test(location.pathname) ? <Outlet /> : <><h1 className='page-title'>works</h1><ListContainer content={elements}/></>}
            </>
        } />
    );
};

export default Works;