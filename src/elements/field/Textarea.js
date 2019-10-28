import React, {Fragment} from 'react';
import {translate} from "react-i18next";


const TextAreaWrapper = ({title, register, name, errors, t}) => {
    return <Fragment>
        <div className="form-group support__form-group">
            <p className="form-group__label">{title}<span className="text-danger">*</span>
                {errors[name] && <span className="text-danger">{t('errors.isRequired')}</span>}</p>
            <textarea name={name} className={'textarea js-input textarea--rect'}
                   ref={register}
            />
        </div>
    </Fragment>
};

export default translate("common")(TextAreaWrapper);