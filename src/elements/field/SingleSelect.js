import React, {Fragment} from "react";
import Select from "react-select";

const SingleSelect = ({title, setValue, register, filter, name, errors, t}) => {

    const [values, setReactSelect] = React.useState({
        selectedOption: ''
    });

    const handleMultiChange = selectedOption => {
        setValue(name, selectedOption.value);
        setReactSelect({selectedOption});
    };

    React.useEffect(() => {
        register({name: name});
    }, []);
    return (
        <Fragment>
            <div className="form-group support__form-group">
                <p className="form-group__label"> {title}<span className="text-danger">*</span></p>
                <Select  value={values.selectedOption}
                         options={filter[name]}
                         onChange={handleMultiChange}
                         placeholder= {errors[name]  && <span className="text-danger">{t('errors.isRequired')}</span>}
                />
            </div>
        </Fragment>
    );
}

export default SingleSelect;