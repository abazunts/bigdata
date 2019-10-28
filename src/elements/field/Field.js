import React, {Fragment} from 'react';
import {translate} from "react-i18next";


const FieldWrapper = ({title, register, name, errors, t, type, className}) => {
      return <Fragment>
        <div className={!className && "form-group support__form-group"}>
            <p className="form-group__label">{title}{!className && <span className="text-danger">*</span>}
            {errors[name] && <span className="text-danger">{t('errors.isRequired')}</span>}</p>
            <input type={type} name={name} className={!className && 'input js-input input-grey input--rect'}
                   ref={register}
                  />
        </div>
    </Fragment>
};

export default translate("common")(FieldWrapper);