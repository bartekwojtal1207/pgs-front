import React from 'react';
import './AboutUsArticle.css';

const AboutUsArticle = (props) => {
    return (
        <div className={'article'}>
            <img src={props.image} alt="photo" className={'img-fluid'}/>
            <h6 className={'article-title'}>Lorem ipsum</h6>
            <p className={'article-desc'}>Etiam ullamcorper. Suspendisse a pellentsque dui, non felis maecensas</p>
        </div>
    )
};


export default AboutUsArticle;