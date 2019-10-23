import React from 'react';
import Modal from 'react-modal';
import injectSheet from "react-jss";
import {translate} from "react-i18next";
import SubmitSuccess from "../Data/SubmitSuccess";
import {withRouter} from "react-router-dom";
import {setSubmit} from "../../redux/historyReducer";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '20%',
        height: 'auto',
    }
};

let styles = {
    button: {
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: '12px',
        background: '#0065a1',
        border: 'none',
        borderRadius: '25px',
        color: 'white',
        padding: '10px',
        width: '100px'

    }
};

class ModalSuccessSubmit extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: true
        };
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.props.setSubmit();
        this.props.history.push(`../inspections`);
        this.setState({modalIsOpen: false});
    };

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Violation"
                >

                            <SubmitSuccess {...this.props} onClick={this.closeModal}/>

                </Modal>
            </div>
        );
    }
}

export default withRouter(translate('common')(injectSheet(styles)(ModalSuccessSubmit)));