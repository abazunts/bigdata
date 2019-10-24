import {Field} from "../../elements/field";
import {Button} from "../../elements/Button";
import React, {Fragment} from "react";
import * as Yup from "yup";
import useForm from "react-hook-form";

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required('login.emailRequired'),
    password: Yup.string()
        .required('login.passwordRequired'),
});


const LoginForm = ({t, onLogin}) => {
    const {handleSubmit, register, errors} = useForm({validationSchema: LoginSchema, defaultValues: {username: 'test', password: 'test'}});
    const onSubmit = values => {
        onLogin(values);
    };
    return (
        <Fragment>

            <div className="content-header b-b">
                <h2 className="content-header__title">{t('login.authorization')}</h2>
                <p className="text text-gray pt-xs">{t('login.authorizationHelloMessage')}</p>
            </div>
            <form className="js-submit-form js-support-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="content-pane">
                    <Field register={register}  type='text' name={'username'} title={t("login.username")} errors={errors} t={t}/>
                    <Field register={register} type='password' name={'password'} title={t("login.password")} errors={errors} t={t}/>
                    <div className="modal-footer text-left b-t mt-lg">
                        <Button title={t("login.loginButton")}
                                className="btn btn--brand btn--long btn--no-shadow js-services-modal-toggler"/>
                    </div>
                </div>
            </form>
        </Fragment>
    )
};

export default LoginForm