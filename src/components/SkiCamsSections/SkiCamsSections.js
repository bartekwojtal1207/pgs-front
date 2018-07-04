import React from 'react';
import './SkiCamSections.css';

const skiCamSections = (props) => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'offset-md-1 col-md-10 SkiCamContainer'}>
                    {props.children}
                </div>
            </div>
        </div>
    )
};


export default skiCamSections;