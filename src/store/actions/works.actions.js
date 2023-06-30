const setWorksAction = ( work ) => {
    return {
        type: 'add', 
        payload: work
    };
};

export default setWorksAction;