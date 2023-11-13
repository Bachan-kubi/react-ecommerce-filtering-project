import React from 'react';
import '../Recommended/Recommended.css';

const Button = ({onClickHandler, value, title}) => {
    return (
        <div>
            <button onClick={onClickHandler} value={value} className='reco-btn'>{title}</button>
        </div>
    );
};

export default Button;