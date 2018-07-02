import React, { Component } from 'react';
import './AboutUsArticle.css';

const AboutUsArticle = () => {
    return (
        <div className={'article'}>
            <img src="https://picsum.photos/230/150/?random" alt="photo" className={'img-fluid'}/>
            <h6 className={'article-title'}>Lorem ipsum</h6>
            <p className={'article-desc'}>Etiam ullamcorper. Suspendisse a pellentsque dui, non felis maecensas</p>
        </div>
    )
};


export default AboutUsArticle;