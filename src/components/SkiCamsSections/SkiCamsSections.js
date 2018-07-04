import React from 'react';
import './SkiCamSections.css';

const skiCamSections = (props) => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'offset-md-1 col-md-10 ski-cam-container'}>
                    {props.children}
                </div>
            </div>
        </div>
    )
};


export default skiCamSections;