import {compose} from "redux";
import {connect} from "react-redux";
import {translate} from "react-i18next";
import React from "react";
import {Data} from "./";
import {withRouter} from "react-router-dom";

const DataContainer = (props) => {
    const { t } = props;

    const columns = [
        {title: t('data.Column1'), field: 'shopDto.shopName'},
        {title: t('data.Column2'), field: 'inspectionType'},
        {title: t('data.Column3'), field: 'inspectionDate'},
        {title: t('data.Column4'), field: 'employeeName'},
        {title: t('data.Column5'), field: 'violationsCount'},
    ];

    const handleExportToExcel = () => {
        alert("Request to server for export to Excel")
    };

    return <>
        <Data {...props} columns={columns} handleExportToExcel={handleExportToExcel}/>
    </>
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth
    }
};


export default compose(
    withRouter,
    connect(mapStateToProps),
    translate("common"),
)(DataContainer)