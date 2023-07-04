import React, { useState } from 'react';
import './Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { TOTAL_COST } from '../Bag';
import { clearOrder } from '../../../store/actions/order.actions';

const Form = () => {

    const ORDER_LIST = useSelector((state) => state.orders);

    const COST = TOTAL_COST();

    let orderItems = [];

    ORDER_LIST.orders.forEach((element) => {
        orderItems.push({
            "itemId": element.id,
            "quantity": element.counter
        })
    })

    const [orderDetails, setOrderDetails] = useState({});

    const handleChange = ( e ) => {
        const name = e.target.name;
        const value = e.target.value;
        setOrderDetails(values => ({...values, [name] : value,}));
    }

    const resetForm = ( ) => {
        setOrderDetails('');
    }

    const dispatch = useDispatch();

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        const ORDER = {
            "userDetails": [
                {
                    "name": orderDetails.name,
                    "phone": orderDetails.phone,
                    "email": orderDetails.email
                }
            ],
            "totalCost": COST,
            "userComment": orderDetails.userComment,
            "orderItems": orderItems
        }
        await fetch("https://dbviewer.herokuapp.com/api/set-order", {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(ORDER),
        });
        dispatch(clearOrder());
        resetForm();
    }

    return (
        <form className='form column'  onSubmit={handleSubmit}>
            <h2 className='page-title'>Fill the form</h2>
            <div className='form-field row'>
                <label className='form-label column'>
                    <span><b>1.</b> Enter your name: </span>
                    <input 
                        type='text' 
                        placeholder='Enter your name...' 
                        required="required"  
                        name='name' 
                        value={orderDetails.name || ''}
                        onChange={handleChange}
                    />
                </label>
            <label className='form-label column'>
                <span><b>2.</b> Enter your phone: </span>
                <input
                    type='text'
                    name="phone"
                    value={orderDetails.phone || ''}
                    required="required"
                    pattern="\+[0-9]{12}"
                    placeholder={'+380999999999'}
                    onChange={handleChange}
                />
            </label>
            </div>
            <label className='form-label column'>
                <span><b>3.</b> Enter your mail:</span> 
                <input
                    type='email'
                    name="email"
                    value={orderDetails.email || ''}
                    required="required"
                    placeholder={'example@gmail.com'}
                    onChange={handleChange}
                />
            </label>
            <label className='form-label column'>
                <span><b>4.</b> Leave a comment:</span> 
                <textarea 
                    placeholder={'Leave a comment...'} 
                    type='text' 
                    maxLength={500} 
                    name='userComment' 
                    value={orderDetails.userComment || ''} 
                    required="required" 
                    onChange={handleChange}
                    />
            </label>
            <input type="submit" value='submit' className='make-btn' />
        </form>
    );
};

export default Form;