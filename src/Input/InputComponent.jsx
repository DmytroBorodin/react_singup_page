import React from 'react';
import inp from './InputComponent.module.css';

const Input = (props) => {
    return (
        <div className={inp.input}>
            <input type='text' placeholder={props.placeholder}/>
        </div>
    )
}
export default Input;
