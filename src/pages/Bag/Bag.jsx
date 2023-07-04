import React, { useState } from 'react';
import './Bag.css';
import Section from '../module/Section/Section';
import ListContainer from '../module/ListContainer/ListContainer'
import OrderItem from './OrderItem/OrderItem';
import { useSelector } from 'react-redux';
import Form from './Form/Form';

const Bag = () => {

    const ORDER_LIST = useSelector((state) => state.orders);

    let elements = [];

    let total_cost = 0;

    const [viewForm, setViewForm] = useState('none');

    const closeForm = ( e ) => {
        e.preventDefault();
        setViewForm('none');
    }

    const showForm = ( e ) => {
        e.preventDefault();
        setViewForm('view');
    }

    if(Object.keys(ORDER_LIST).length === 0 || ORDER_LIST.orders.length === 0) {

        elements = <h2 className='title'>Your order list is empty.</h2>

    } else {

        ORDER_LIST.orders.forEach((element) => {
            total_cost += Number(element.price) * Number(element.counter)
        })
        elements.push(<div className='total-cost row'>
        <h1 className='page-title'>Total cost:</h1>
        <p className='title'>{total_cost}$</p>
    </div>)

        ORDER_LIST.orders.filter((element) =>  
            Number(element.id) >= 0 
                ? 
            elements.push(<OrderItem key={element.id + Math.random()} {...element}/>)
                : 
            null
        );
        elements.push(
            <button className='make-btn' onClick={(e) => showForm(e)}>
                make an order
            </button>);
        elements.push(
            <div className={`view-form ${viewForm} column`}>
                <Form />
                <button className='btn-close' onClick={(e) => closeForm(e)}>X</button>
            </div>)
    }

    return (
        <Section content={ 
            <ListContainer content={elements}/>
            }
        />
    );
};

export default Bag;