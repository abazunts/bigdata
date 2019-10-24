import {compose} from "redux";
import {translate} from "react-i18next";
import {connect} from "react-redux";
import {login} from "../../redux/loginReducer";
import React from "react";
import {withRouter} from "react-router-dom";
import {Login} from "./";

const LoginContainer = (props) => {
    const onLogin = (values) => {
        props.login(values)
    };
    return <Login {...props} onLogin={onLogin} />
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth,
    }
};

export default compose(
    withRouter,
    translate("common"),
    connect(mapStateToProps, {login})
)(LoginContainer);



