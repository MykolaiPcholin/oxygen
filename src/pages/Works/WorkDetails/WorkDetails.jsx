import React, { useState } from 'react';
import './WorkDetails.css';
import Button from '../../module/Button/Button';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setOrderAction} from '../../../store/actions/order.actions';
import order from './img/order.svg';

const WorkDetails = () => {

    const [ visible, setVisible] = useState('hidden');

    const { workId } = useParams();

    const WORKS_LIST= useSelector((state) => state.works);

    let work = WORKS_LIST[workId];

    const dispatch = useDispatch();

    const addOrder = ( e ) => {

        e.preventDefault();

        let order = work;

        dispatch(setOrderAction({
            ...order,
            counter: 1 
        }));

        setVisible('visible');

        setTimeout(() => {
            setVisible('hidden');
        }, 1000)

    }


    return (
            <div className='work-head row'>
                <img src={work.src} alt={work.title} className='work-head__img' />
                <div className='work-head__main column'>
                    <h1 className='page-title'>{work.title}</h1>
                    <p className='work-head__characters'><strong>size:</strong> {work.size}</p>
                    <p className='work-head__characters'><strong>weight:</strong> {work.weight} kg</p>
                    <p className='work-head__characters'><strong>year:</strong> {work.year}</p>
                    <p className='work-head__characters'><strong>description:</strong> {work.description}</p>
                    <div className='work-head__order row'>
                        <p className='work-head__characters'><strong>{work.price}$</strong></p>
                        <div className='order row'>
                            <Button variant='order' func={(e) => addOrder(e)} />
                            <img src={order} alt='order' style={{ visibility :` ${visible}`, }} className={`order-img`} />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default WorkDetails;