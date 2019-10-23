import React from 'react';
import MaterialTable from 'material-table';
import {connect} from "react-redux";
import {compose} from "redux";
import {translate} from "react-i18next";
import {Redirect, withRouter} from "react-router-dom";
import 'react-table/react-table.css'

const Data = (props) => {
    const {t, isAuth} = props;
    return <div>
        {!isAuth && <Redirect to={'/login'}/>}
            <div>

                <div className="content-header b-b">
                    <p className="content-header__subtitle">{t('data.title')}</p>
                    <h2 className="content-header__title">{t('data.title')}</h2>
                </div>
                <div className="modal-footer">
                    <MaterialTable
                        title=""
                        columns={props.columns}
                        options={{
                            headerStyle: {
                                position: 'sticky',
                                top: '0',
                                minHeight: '2em'
                            },
                            padding: 'dense',
                            pageSizeOptions: [25, 50, 75,100],
                            pageSize: 100,
                            columnsButton: true,
                        }}
                        data={props.data}
                    />
                </div>
            </div>
    </div>
};

const DataContainer = (props) => {
    const { t } = props;

    const columns = [
        {title: t('data.Column1'), field: 'shopDto.shopName'},
        {title: t('data.Column2'), field: 'inspectionType'},
        {title: t('data.Column3'), field: 'inspectionDate'},
        {title: t('data.Column4'), field: 'employeeName'},
        {title: t('data.Column5'), field: 'violationsCount'},
    ];

    return <>
        <Data {...props} columns={columns} />
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