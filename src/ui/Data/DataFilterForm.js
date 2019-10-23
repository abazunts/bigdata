import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import Button from "../../elements/Button/button";
import CreatableSingle from "../../elements/field/Select";
import SingleSelect from "../../elements/field/SingleSelect";
import {translate} from "react-i18next";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";


const DataFilterFormSchema = Yup.object().shape({
    region: Yup.string()
        .required('errors.isRequired'),
    law: Yup.string()
        .required('errors.isRequired'),
    period: Yup.string()
        .required('errors.isRequired'),
    type: Yup.string()
        .required('errors.isRequired')
});

const DataFilterForm = (props) => {
    const {t, i18n, isAuth, handleSubmit, filter, region, type, law, period} = props;
    return (
        <div>
            {!isAuth && <Redirect to={'/login'}/>}
            <Formik
                initialValues={{
                    region: '',
                    law: '',
                    period: '',
                    type: '',

                }}
                // validationSchema={DataFilterFormSchema}
                onSubmit={values => {

                    const filterData = {
                        region, type, law, period
                    };
                debugger
                    handleSubmit(filterData);
                }}
            >
                {({errors, touched}) => (
                    <section className="content support">
                        <Form className="js-submit-form js-support-form">
                            <div className="content-header b-b">
                                <h2 className="content-header__title">{t('filter.title')}</h2>
                                <p className="text text-gray pt-xs">{t('filter.title')}</p>
                            </div>
                            <div className="content-pane">
                                <div>
                                    <SingleSelect name='region' title={t("filter.region")}
                                                     value={filter.region} t={t} i18n={i18n} errors={errors} touched={touched}/>
                                </div>
                                <div>
                                    <SingleSelect name='law' title={t("filter.law")}
                                                     value={filter.law} t={t} i18n={i18n} errors={errors} touched={touched}/>
                                </div>
                                <div>
                                    <SingleSelect name='period' title={t("filter.period")}
                                                     value={filter.period} t={t} i18n={i18n} errors={errors} touched={touched}/>
                                </div>
                                <div>
                                    <CreatableSingle name='type' title={t("filter.type")}
                                                     value={filter.type} t={t} i18n={i18n} errors={errors} touched={touched}/>
                                </div>
                                <div className="modal-footer text-center b-t mt-lg">
                                    <Button title={t("filter.btn")}
                                            className="btn btn--brand btn--long btn--no-shadow js-services-modal-toggler"/>
                                </div>
                            </div>
                        </Form>
                    </section>
                )}
            </Formik>
        </div>
    )
};

const DataFilterContainer = (props) => {
    const handleSubmit = () => {
        props.history.push(`../data`);
    };
    return <DataFilterForm {...props} handleSubmit={handleSubmit}/>
};

const mapStateToProps = (state, props) => {
    return {
        isAuth: state.loginPage.isAuth,
        filter: state.filterPage.filter,
        period: state.filterPage.period,
        law: state.filterPage.law,
        region: state.filterPage.region,
        type: state.filterPage.type,
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps),
    translate("common"),
)(DataFilterContainer)
