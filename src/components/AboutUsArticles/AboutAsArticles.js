import React, { Component } from 'react';
import AboutUsArticle from './AboutUsArticle/AboutUsArticle';
import './AboutUsArticles.css';
import ImageOne from '../../assets/img/about-us/img1.jpg';
import ImageTwo from '../../assets/img/about-us/img2.jpg';
import ImageThree from '../../assets/img/about-us/img3.jpg';

const aboutUsArticles = () => {

    return (
        <div className={'ArticlesContainer col-md-12'}>
            <AboutUsArticle image={ImageOne}/>
            <AboutUsArticle image={ImageTwo}/>
            <AboutUsArticle image={ImageThree}/>
        </div>
    )
};


export default aboutUsArticles;