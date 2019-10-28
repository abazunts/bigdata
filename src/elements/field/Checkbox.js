import React, {Fragment} from 'react';
import {translate} from "react-i18next";


const CheckBoxWrapper = ({title, register, onChange, checked}) => {
    return <Fragment>
        <div>
            <input type={'checkbox'} className={'radio'}
                   ref={register}
                   onChange={onChange}
                   checked={checked}
            />
            <label className="label header-actions__lang">{title}</label>
        </div>
    </Fragment>
};

export default translate("common")(CheckBoxWrapper);