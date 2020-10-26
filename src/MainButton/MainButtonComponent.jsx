import React from 'react';
import mb from './MainButtonComponent.module.css';

const MainButton = (props) => {
    return (
        <div className={mb.mainBtn_block}>
            <button className={mb.main_btn}>
                {props.btnName}
            </button>
        </div>
    )
}

export default MainButton;