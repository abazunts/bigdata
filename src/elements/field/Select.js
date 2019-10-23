import React, {Fragment} from 'react';
import './style.css';
import CreatableSelect from 'react-select/creatable';
import {connect} from "react-redux";
import {setValue} from "../../redux/filterReducer";

class CreatableSingle extends React.Component {
    handleChange = (newValue, actionMeta) => {
            newValue ? this.props.setValue(newValue.value, this.props.name)
                : this.props.setValue('', this.props.name)
    };

    render() {
        const {value, title, t} = this.props;
        return (
            <div className="form-group support__form-group">
                <p className="form-group__label"> {title}<span className="text-danger">*</span></p>
                <CreatableSelect
                    placeholder={this.props.errors[this.props.name] && this.props.touched[this.props.name] && <span className="text-danger">{t('errors.isRequired')}</span>}
                    isClearable
                    onChange={this.handleChange}
                    options={value}
                    required={'required'}
                />
            </div>
        );
    }
}

export default connect(null, {setValue})(CreatableSingle);



