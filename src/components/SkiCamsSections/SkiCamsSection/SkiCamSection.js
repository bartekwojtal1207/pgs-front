import React, { Component } from 'react';
import './SkiCamsSection.css';

const SkiCamsSection = (props) => {
    return (
        <div className={'SkiCamsSection'}>
            <h6 className={'SkiCamsTitle text-center'}>{props.children}</h6>
        </div>
    )
};


export default SkiCamsSection;