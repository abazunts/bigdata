import {compose} from "redux";
import {connect} from "react-redux";
import {translate} from "react-i18next";
import React from "react";
import {withRouter} from "react-router-dom";
import {DataFilterForm} from "./";

const DataFilterContainer = (props) => {
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [errorsDate, setErrorsDate] = React.useState(false);
    const submitForm = (values) => {
        endDate === ""
            ? setErrorsDate(true)
            : props.history.push(`../data`);
    };

    const changeDate = (startDate, endDate) => {
        if (endDate) {
            setEndDate(endDate);
            setErrorsDate(false)
        } else {
            setStartDate(startDate)
        }
    };
    return <DataFilterForm {...props} submitForm={submitForm} changeDate={changeDate} startDate={startDate}
                           endDate={endDate} errorsDate={errorsDate}/>
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