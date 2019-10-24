import React from 'react';
import * as Yup from 'yup';
import {Button} from "../../elements/Button/";
import {CreatableSingle, SingleSelect} from "../../elements/field/";
import {Redirect} from "react-router-dom";
import useForm from "react-hook-form";


const SignupSchema = Yup.object().shape({
    region: Yup.string().required(),
    law: Yup.string().required(),
    period: Yup.string().required(),
    type: Yup.string().required(),
});

const DataFilterForm = ({t, isAuth, filter, submitForm}) => {
    const {handleSubmit, register, errors, setValue} = useForm({validationSchema: SignupSchema});
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
                            <SingleSelect setValue={setValue} register={register} filter={filter} name={'region'} title={t("filter.region")} errors={errors} t={t}/>
                        </div>
                        <div>
                            <SingleSelect setValue={setValue} register={register} filter={filter} name={'law'} title={t("filter.law")} errors={errors} t={t}/>
                        </div>
                        <div>
                            <SingleSelect setValue={setValue} register={register} filter={filter} name={'period'} title={t("filter.period")} errors={errors} t={t}/>
                        </div>
                        <div>
                            <CreatableSingle setValue={setValue} register={register} filter={filter} name={'type'} title={t("filter.type")} errors={errors} t={t}/>
                        </div>
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
