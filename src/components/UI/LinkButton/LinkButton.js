import React from 'react';
import './LinkButton.css'
function LinkButton(props) {
    return (
        <button className={'link-button'}>
            {props.children}
        </button>
    );
}

export default LinkButton;