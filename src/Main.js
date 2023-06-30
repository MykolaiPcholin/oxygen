import { Route, Routes } from 'react-router-dom';
import './Main.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import Interior from './pages/Interior/Interior';
import Contacts from './pages/Contacts/Contacts';
import Bag from './pages/Bag/Bag';
import Footer from './components/Footer/Footer';
import WorkDetails from './pages/Works/WorkDetails/WorkDetails';

const Main = () => {
    return (
        <div className='main column'>
            <NavBar />
            <Routes>
                <Route path='/oxygen/' element={<Home />} />
                <Route path='/oxygen/about' element={<About />} />
                <Route path='/oxygen/works/' element={<Works />}>
                    <Route path=':workId' element={<WorkDetails />} />
                </Route>
                <Route path='/oxygen/interior' element={<Interior />} />
                <Route path='/oxygen/contacts' element={<Contacts />} />
                <Route path='/oxygen/bag' element={<Bag />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default Main;