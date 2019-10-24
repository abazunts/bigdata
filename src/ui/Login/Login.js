import React from 'react';
import {Redirect} from "react-router-dom";
import {LoginForm} from "./";



const Login = (props) => {
    const {isAuth} = props;
    return <div>
        {isAuth && <Redirect to={'/filter'}/>}
        <LoginForm {...props} />
    </div>
};


export default Login;


