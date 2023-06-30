import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import AboutSection from './sections/AboutSection/AboutSection';
import WorksSection from './sections/WorksSection/WorksSection';
import InteriorSection from './sections/InteriorSection/InteriorSection';

const Home = () => {
    return (
        <div className='home column'>
            <Banner />
            <AboutSection />
            <WorksSection />
            <InteriorSection />
        </div>
    );
};

export default Home;