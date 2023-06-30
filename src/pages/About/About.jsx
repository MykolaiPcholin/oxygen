import React from 'react';
import Section from '../module/Section/Section';
import ListContainer from '../module/ListContainer/ListContainer';
import { useSelector } from 'react-redux';
import './About.css';

const About = () => {

    const WORKS_LIST = useSelector((state) => state.interiors);

    const RandomText = () => {
        let string = '';
        const symbolString = "a bc d efghij kl mno pqrs tuv wx yz";
        for (let i = 0; i < 2000; i++) {
            string += symbolString[Math.floor(Math.random() * symbolString.length)];
        }
        return string;
    };

    let elements = [];

    WORKS_LIST.forEach((element) => {
        if (Number(element.id) % 2 === 0 ) {
            return elements.push(<ListContainer reverse={true} key={element.id + Math.random()} content={
                <>
                    <p className='description mod' key={element.id + Math.random()}>{RandomText()}</p>
                    <img key={element.id + Math.random()} src={element.src} alt={element.title} className='about-media' />
                </>
            } />);
        } else {
            return elements.push(<ListContainer reverse={false} key={element.id + Math.random()} content={
                <>
                    <img key={element.id + Math.random()} src={element.src} alt={element.title} className='about-media' />
                    <p className='description mod' key={element.id + Math.random()}>{RandomText()}</p>
                </>
            } />);
        }
    })

    return (
        <Section content={
            <>
                <h1 className='page-title'>About us</h1>
                {elements}
            </>
        } />
    );
};

export default About;