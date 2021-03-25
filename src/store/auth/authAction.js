const SET_LOGIN = 'SET_LOGIN';
const SET_PASSWORD = 'SET_PASSWORD';

const setLogin = (login) =>{
    return{ 
        type: SET_LOGIN, 
        payload: login
    }
};

const setPassword = (password)=>{
    return{
        type: SET_PASSWORD,
        payload: password,
    }
};

export {setLogin,setPassword}
