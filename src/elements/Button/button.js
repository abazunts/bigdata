import React from 'react';

const Button = props => {
    return <button className={props.className} onClick={props.onClick} {...props.width} disabled={props.disabled}>
            <span>{props.title}</span>
        </button>
};

export default Button