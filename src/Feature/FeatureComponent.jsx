import React from 'react';
import f from './FeatureComponent.module.css';

const Feature = (props) => {
    return (
        <div className={f.feature_block}>
            <div className={f.title_block}>
                <img src={props.icon} className={f.icon} id={props.id}/>
                <h4 className={f.title}>
                    {props.title}
                </h4>
            </div>
            <p className={f.block_text}>
                {props.text}
            </p>
        </div>
    )
}

export default Feature;