import {compose} from "redux";
import {connect} from "react-redux";
import {translate} from "react-i18next";
import React from "react";
import {withRouter} from "react-router-dom";
import {DataFilterForm} from "./";
import * as Yup from "yup";
import useForm from "react-hook-form";

const SignupSchema = Yup.object().shape({
    region: Yup.string().required(),
    law: Yup.string().required(),
});


const DataFilterContainer = (props) => {
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [errorsDate, setErrorsDate] = React.useState(false);
    const [showTextarea, setShowTextarea] = React.useState(false);

    const {handleSubmit, register, errors, setValue} = useForm({validationSchema: SignupSchema});
    const submitForm = (values) => {
        endDate === ""
            ? setErrorsDate(true)
            : props.history.push(`../data`);
        let newValues = {};
        if(endDate !== "") {
            values.type
                ? newValues = {
                    region: values.region,
                    law: values.law,
                    startDate: startDate,
                    endDate: endDate,
                    type: values.type,
                }
                : newValues = {
                    region: values.region,
                    law: values.law,
                    startDate: startDate,
                    endDate: endDate,
                    type: values.typeChange,
                };
            console.log(newValues)
        }

    };

    const changeDate = (startDate, endDate) => {
        if (endDate) {
            setEndDate(endDate);
            setErrorsDate(false)
        } else {
            setStartDate(startDate)
        }
    };

    const handleShowTextarea = () => {
        setShowTextarea(!showTextarea)
    };

    return <DataFilterForm {...props} submitForm={submitForm} changeDate={changeDate} startDate={startDate}
                           endDate={endDate} errorsDate={errorsDate}
                           showTextarea={showTextarea}
                           handleShowTextarea={handleShowTextarea}
                           handleSubmit={handleSubmit} register={register} errors={errors} setValue={setValue}
    />
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