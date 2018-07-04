import React, { Component } from 'react';
import './SkiCamsSection.css';

const SkiCamsSection = (props) => {
    return (
        <div className={'ski-cams-section'}>
            <h6 className={'ski-cams-title text-center'}>{props.children}</h6>
            <span className={'clock text-right'}>{props.clock}</span>
            <img src={props.video} className={'ski-view '}/>
            <img src={props.videoTwo} className={'ski-view '}/>
        </div>
    )
};


export default SkiCamsSection;