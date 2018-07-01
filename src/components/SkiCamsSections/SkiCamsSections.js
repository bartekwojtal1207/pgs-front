import React, { Component } from 'react';
import Auxs from '../../hoc/Auxs';
import SkiCamSection from './SkiCamsSection/SkiCamSection';
import './SkiCamSections.css';



const skiCamSections = (props) => {

    return (
        <div className={'col-md-12 SkiCamContainer'}>
            {props.children}
        </div>
    )
};


export default skiCamSections;