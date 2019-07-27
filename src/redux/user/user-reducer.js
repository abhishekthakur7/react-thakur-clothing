const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (prevState = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...prevState,
                currentUser: action.payload
            }
        default:
            return prevState;   //Always return prevstate because all the reducers are triggered for any action,
                                //we would not like to update state from this reducer if action type doesn't match
    }

};

export default userReducer;