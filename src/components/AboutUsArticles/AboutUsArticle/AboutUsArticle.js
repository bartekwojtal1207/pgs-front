import React from 'react';
import './AboutUsArticle.css';

const AboutUsArticle = (props) => {
    return (
        <div className={'Article'}>
            <img src={props.image} alt="photo" className={'img-fluid'}/>
            <h6 className={'Article-title'}>Lorem ipsum</h6>
            <p className={'Article-desc'}>Etiam ullamcorper. Suspendisse a pellentsque dui, non felis maecensas</p>
        </div>
    )
};


export default AboutUsArticle;