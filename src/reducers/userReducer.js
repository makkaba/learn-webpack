const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';


const initialState = {
    user: null
};

function userReducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {
                user: action.user
            };
        case LOGOUT: 
            return {
                user: null
            };
        default:
            return state;
    }
}

export default userReducer;