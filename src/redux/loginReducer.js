import loginApi from "../dal/loginApi";

const SET_USER = 'IPR/LOGIN/SET_USER';
const SET_IS_AUTH = 'IPR/LOGIN/SET_IS_AUTH';

const initState = {
    isAuth: false,
    user: {
        userId: null,
        userName: null,
        role: null,
    }
};

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: {...action.user}
            };
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            };
        default:
            return state
    }
};


const setUser = (user) => ({type: SET_USER, user});
const isAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});

export const login = (values) => async (dispatch) => {
    try {
       let data = await loginApi.login(values);
        if (data.user) {
            dispatch(setUser(data.user));
            dispatch(isAuth(true));
        }
    } catch (err) {

    }
};

export const logout = () => async (dispatch) => {
    try {
        await loginApi.logout();
        dispatch(setUser({
            userId: null,
            userName: null,
            role: null
        }));
        dispatch(isAuth(false));
    } catch (err) {

    }
};


export default loginReducer;