import React, { useState } from 'react';
import './OrderItem.css';
import { removeOrderAction, increment, decrement } from '../../../store/actions/order.actions';
import { useDispatch } from 'react-redux';

const OrderItem = ( props ) => {

    const [state, setState] = useState(props);

    const dispatch = useDispatch();

    const removeOrder = ( e ) => {
        e.preventDefault();

        setState(props)

        dispatch(removeOrderAction(state));

    }

    const incrementCounter = ( e ) => {
        e.preventDefault();

        setState(props)

        dispatch(increment(state));

    }

    const decrementCounter = ( e ) => {
        e.preventDefault();

        setState(props)

        dispatch(decrement(state));

    }

    return (
        <div className='order-item row'>
            <div className='order-item__product column'>
                <img src={props.src} alt={props.title} className='order-item__img' />
                <p className='order-item__title'><strong>{props.title}</strong></p>
                <p className='description'>{props.price}$</p>
            </div>
            <div className='order-item__counter column'>
                <div className='counter row'>
                    <button className='order-item__btn' onClick={(e) => decrementCounter(e)}>-</button>
                    <p className='description'>{props.counter}</p>
                    <button className='order-item__btn' onClick={(e) => incrementCounter(e)}>+</button>
                </div>
                <div className='order-footer column'>
                    <p className='order-item__title'><strong>Cost:</strong> {Number(props.price) * Number(props.counter)}$</p>
                    <button className='order-item__btn' onClick={(e) => removeOrder(e)}>remove</button>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;