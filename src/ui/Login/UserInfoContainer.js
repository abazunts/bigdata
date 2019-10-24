import {compose} from "redux";
import {connect} from "react-redux";
import {logout} from "../../redux/loginReducer";
import React from "react";
import {UserInfo} from "./";

const UserInfoContainer = (props) => {
    const logOut = () => {
        props.logout()
    };
    return <UserInfo {...props} logOut={logOut}/>
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth,
        user: state.loginPage.user,
    }
};

export default compose(
    connect(mapStateToProps, {logout})
)(UserInfoContainer);