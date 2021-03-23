import initialState from '../initialState.js';

const authReducer = (state=initialState,action)=>{
    switch(action){
        case "SET_LOGIN":
            return {
                ...state,
                login: action.payload,
            }
            break;
        case "SET_PASSWORD":
            return{
                ...state,
                password: action.payload,
            }
            break;
        default:
            return state;
    };
};

export default authReducer;
