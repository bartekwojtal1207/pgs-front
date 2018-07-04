import React, { Component } from 'react';
import Auxs from '../../hoc/Auxs';
import SkiCamSection from './SkiCamsSection/SkiCamSection';
import './SkiCamSections.css';



const skiCamSections = (props) => {

    return (
        <div className={'container'}>
            <div className={'offset-md-1 col-md-10 SkiCamContainer'}>
                {props.children}
            </div>
        </div>

    )
};


export default skiCamSections;