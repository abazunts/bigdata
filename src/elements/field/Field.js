import React, {Fragment} from 'react';
import {translate} from "react-i18next";


const FieldWrapper = ({title, register, name, errors, t, type}) => {
      return <Fragment>
        <div className="form-group support__form-group">
            <p className="form-group__label">{title}</p>
            <input type={type} name={name} className={errors[name] === true ? "input js-input input--red input--rect" : 'input js-input input--blue input--rect'}
                   ref={register}
                   placeholder= {errors[name] && t(`errors.${name}`)}/>
        </div>
    </Fragment>
};

export default translate("common")(FieldWrapper);