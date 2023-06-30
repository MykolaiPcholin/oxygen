import React from 'react';
import './AboutSection.css';
import about_banner from './img/section-about.png';
import Button from '../../../module/Button/Button';

const AboutSection = () => {
    return (
        <section className='home-about row'>
            <div className='home-about__description column'>
                <h2 className='title'>about us</h2>
                <p className='quote'>Бренд заснований у 2017р. взаємодією двох людей, які захохані в природу, ручну роботу та цінують унікальність</p>
                <p className='description'>Більшість свого життя перебуваємо в атмосфері, в  якій постійно щось створюється, тому насправді неможливо відстежити коли і завдяки чому конкретно почалася історія предметного декору, бо вважаємо, що передумовою того, щоб щось відбулося сьодні – стало все попереднє життя з його дитинством, людьми, враженнями, навчанням, подіями, місцями і містами.
                    <br />
                    <br />
                    Кисень – це про форму і лінію, про зміну матеріалу та фактуру, про колір і тактильність, про експеримент, передусім для себе. Про, іноді швидку зміну, адже постійно хочеться спробувати щось нове, чи створити геть інше просто про спостереження світу авторами, які пізніше виливаються  у щось предметне.
                    <br />
                    <br />
                    Кожний наш виріб зроблений вручну, є унікальним та ніколи не матиме жодних повторів. Також, нам довподоби ужитковість речей, тому усі вироби наділені якимись додатковими функціями, але насамперед, візуально, вони є цілом самодостатні.
                </p>
                <Button variant='more' link={'/oxygen/about'} />
            </div>
            <img src={about_banner} alt='about banner' className='home-about__banner'/>
        </section>
    );
};

export default AboutSection;