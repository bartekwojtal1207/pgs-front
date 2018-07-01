import React, { Component } from 'react';
import './SkiCamsSection.css';

const SkiCamsSection = (props) => {
    return (
        <div className={'SkiCamsSection'}>
            <span className={'clock text-right'}>{props.clock}</span>
            <h6 className={'SkiCamsTitle text-center'}>{props.children}</h6>
            <img width="400" height="220" src={props.video} />
            <img width="400" height="220" src={props.video1 }/>
        </div>
    )
};


export default SkiCamsSection;