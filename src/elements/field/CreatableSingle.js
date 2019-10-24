import React, {Fragment} from 'react';
import './style.css';
import CreatableSelect from 'react-select/creatable';

const CreatableSingle = ({title, setValue, register, filter, name, errors, t}) => {
    const [values, setReactSelect] = React.useState({
        selectedOption: ''
    });

    const handleMultiChange = selectedOption => {
        setValue(name, selectedOption ? selectedOption.value : '');
        setReactSelect({selectedOption});
    };

    React.useEffect(() => {
        register({name: name});
    }, []);
    return (
        <Fragment>
            <div className="form-group support__form-group">
                <p className="form-group__label"> {title}<span className="text-danger">*</span></p>
                <CreatableSelect
                    isClearable
                    value={values.selectedOption}
                    options={filter[name]}
                    onChange={handleMultiChange}
                    placeholder = {errors[name] && <span className="text-danger">{t('errors.isRequired')}</span>}
                />
            </div>
        </Fragment>
    );
}

export default CreatableSingle;



