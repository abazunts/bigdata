import React, {Fragment} from 'react';
import {Button} from "../../elements/Button/";
import {SingleSelect, TextAreaWrapper, Field, CheckBoxWrapper, CreatableSingle} from "../../elements/field/";
import {Redirect} from "react-router-dom";
import {RangeDatePicker} from '@y0c/react-datepicker';
import '@y0c/react-datepicker/assets/styles/calendar.scss'


const DataFilterForm = ({
                            t, isAuth, filter, submitForm, changeDate, errorsDate,
                            showTextarea, handleShowTextarea, handleSubmit, register, errors, setValue
                        }) => {
    const onSubmit = values => {
        submitForm(values);
    };

    return (
        <div>
            {!isAuth && <Redirect to={'/login'}/>}
            <section className="content support">
                <div className="content-header b-b">
                    <h2 className="content-header__title">{t('filter.title')}</h2>
                    <p className="text text-gray pt-xs">{t('filter.title')}</p>
                </div>
                <div className="content-pane">
                    <form className="js-submit-form js-support-form" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <SingleSelect setValue={setValue} register={register} filter={filter} name={'region'}
                                          title={t("filter.region")} errors={errors} t={t}/>
                        </div>
                        <div>
                            <SingleSelect setValue={setValue} register={register} filter={filter} name={'law'}
                                          title={t("filter.law")} errors={errors} t={t}/>
                        </div>
                        <div className="form-group support__form-group">
                            <p className="form-group__label"> {t("filter.period")}<span className="text-danger">*
                                {errorsDate && <span className="text-danger">{t('errors.isRequired')}</span>}</span></p>
                            <RangeDatePicker
                                onChange={(start, end) => changeDate(start, end)}
                                startPlaceholder={t("data.startPeriodField")}
                                endPlaceholder={t("data.finishPeriodField")}/>
                        </div>
                        <div>
                            <CheckBoxWrapper setValue={setValue} register={register} filter={filter} name={'changeType'}
                                             title={t("filter.changeType")} errors={errors} t={t}
                                             checked={showTextarea}
                                             onChange={handleShowTextarea}
                            />
                        </div>
                        {showTextarea ?
                            <div>
                                <TextAreaWrapper setValue={setValue} register={register} filter={filter} name={'typeChange'}
                                                 title={t("filter.typeChange")} errors={errors} t={t}/>
                            </div>
                            :
                            <div>
                                <SingleSelect setValue={setValue} register={register} filter={filter} name={'type'}
                                              title={t("filter.type")} errors={errors} t={t}/>
                            </div>}
                        <div className="modal-footer text-center b-t mt-lg">
                            <Button title={t("filter.btn")}
                                    className="btn btn--brand btn--long btn--no-shadow js-services-modal-toggler"/>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default DataFilterForm
