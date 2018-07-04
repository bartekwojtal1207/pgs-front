import React, { Component } from 'react';
import './SkiCamsSection.css';

const SkiCamsSection = (props) => {
    return (
        <div className={'SkiCamsSection'}>
            <h6 className={'SkiCamsTitle text-center'}>{props.children}</h6>
            <span className={'Clock text-right'}>{props.clock}</span>
            <img src={props.video} className={'skiView'}/>
            <img src={props.videoTwo} className={'skiView'}/>
        </div>
    )
};


export default SkiCamsSection;