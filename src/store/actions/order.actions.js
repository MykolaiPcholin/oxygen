export const setOrderAction = ( order ) => {
    return {
        type: 'add', 
        payload: order
    };
};

export const removeOrderAction = ( order ) => {
    return {
        type: 'remove', 
        payload: order
    };
};

export const increment = ( order ) => {
    return {
        type: 'increment',
        payload: order
    }
}

export const decrement = ( order ) => {
    return {
        type: 'decrement',
        payload: order
    }
}