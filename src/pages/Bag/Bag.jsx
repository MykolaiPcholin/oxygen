import React, { useState } from 'react';
import './Bag.css';
import Section from '../module/Section/Section';
import ListContainer from '../module/ListContainer/ListContainer'
import OrderItem from './OrderItem/OrderItem';
import { useSelector } from 'react-redux';
import Form from './Form/Form';

export const TOTAL_COST = ( ) => {
    let total = 0;
    const ORDER_LIST = useSelector((state) => state.orders);
    if(Object.keys(ORDER_LIST).length === 0 || ORDER_LIST.orders.length === 0 || ORDER_LIST.orders === Array(0)) {
        return total
    } else {
        ORDER_LIST.orders.forEach((element) => {
            total += Number(element.price) * Number(element.counter)
        })
        return total;
    }
}

const Bag = () => {

    const ORDER_LIST = useSelector((state) => state.orders);

    let elements = [];

    const [viewForm, setViewForm] = useState('none');

    const closeForm = ( e ) => {
        e.preventDefault();
        setViewForm('none');
    }

    const showForm = ( e ) => {
        e.preventDefault();
        setViewForm('view');
    }

    console.log(ORDER_LIST);

    if(Object.keys(ORDER_LIST).length === 0 || ORDER_LIST.orders.length === 0 || ORDER_LIST.orders === Array(0)) {
        elements = <h2 className='title'>Your order list is empty.</h2>
    } else {
        const cost = TOTAL_COST();
        elements.push(<div className='total-cost row'>
        <h1 className='page-title'>Total cost:</h1>
        <p className='title'>{cost}$</p>
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