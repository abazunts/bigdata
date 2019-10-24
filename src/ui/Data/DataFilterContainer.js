import {compose} from "redux";
import {connect} from "react-redux";
import {translate} from "react-i18next";
import React from "react";
import {withRouter} from "react-router-dom";
import {DataFilterForm} from "./";

const DataFilterContainer = (props) => {
    const submitForm = () => {
        props.history.push(`../data`);
    };
    return <DataFilterForm {...props} submitForm={submitForm}/>
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth,
        filter: state.filterPage.filter,
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps),
    translate("common"),
)(DataFilterContainer)