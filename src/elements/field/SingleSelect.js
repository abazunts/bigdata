import React, {Fragment} from "react";
import Select from "react-select";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";
import {setValue} from "../../redux/filterReducer";

class SingleSelect extends React.Component {
    handleChange = (newValue, actionMeta) => {
        this.props.setValue(newValue.value, this.props.name)
    };
    render() {
        const {title, value, t} = this.props;
        return (
            <Fragment>
                <div className="form-group support__form-group">
                    <p className="form-group__label"> {title}<span className="text-danger">*</span></p>
                    <Select
                        placeholder={this.props.errors[this.props.name] && this.props.touched[this.props.name] && <span className="text-danger">{t('errors.isRequired')}</span>}
                        className="basic-single"
                        classNamePrefix="select"
                        options={value}
                        onChange={this.handleChange}
                    />
                </div>
            </Fragment>
        );
    }
}

export default connect(null, {setValue})(SingleSelect);