import React from 'react';
import './Interior.css';
import ListContainer from '../module/ListContainer/ListContainer';
import InteriorItem from './InteriorItem/InteriorItem';
import Section from '../module/Section/Section';
import { useSelector } from 'react-redux';

const Interior = () => {

    const INTERIORS_LIST = useSelector((state) => state.interiors);

    let elements = [];

    INTERIORS_LIST.forEach((element) => {
        elements.push(<InteriorItem key={element.id + Math.random()} {...element} />)
    });

    return (
        <Section content={
            <>
            <div className='interior-head row'>
                <h1 className="page-title">In the interior</h1>
                <p className='description'>Ukrainian designers show the spirit of freedom and courage, the characteristics of which, among others, are the main ones. Their research delves into meanings and meanings to find new combinations of familiar natural materials and craft techniques.</p>
            </div>
            <ListContainer content={elements} />
            </>
        } />
    );
};

export default Interior;