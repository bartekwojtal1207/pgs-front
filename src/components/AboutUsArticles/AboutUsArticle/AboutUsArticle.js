import React, { Component } from 'react';
import './AboutUsArticle.css';

const AboutUsArticle = () => {
    return (
        <div className={'Article'}>
            <img src="https://picsum.photos/230/150/?random" alt="chujowe zdjecie"/>
            <h6 className={'ArticleTitle'}>Lorem ipsum</h6>
            <p className={'ArticleDescription'}>Etiam ullamcorper. Suspendisse a pellentsque dui, non felis maecensas</p>
        </div>
    )
};


export default AboutUsArticle;