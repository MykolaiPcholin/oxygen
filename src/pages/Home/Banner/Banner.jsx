import React, { useState, useEffect } from 'react';
import one from './img/back_01.png';
import two from './img/back_02.png';
import three from './img/back_03.png';
import './Banner.css';



const Banner = () => {

    const [ imageCounter, setImageCounter] = useState(0);

    const backgroundImages = [ one, two, three];

    useEffect(() => {
        const interval = setInterval(() => {
            let counter = imageCounter;
            if (counter === 2) {
                setImageCounter(0)
            } else {
                setImageCounter(counter => counter + 1);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [imageCounter]);

    return (
        <div style={{backgroundImage : `url(${backgroundImages[imageCounter]})`}} className='banner' />
    );
};

export default Banner;