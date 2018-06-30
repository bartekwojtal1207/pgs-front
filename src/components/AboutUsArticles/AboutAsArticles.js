import React, { Component } from 'react';
import AboutUsArticle from './AboutUsArticle/AboutUsArticle';
import './AboutUsArticles.css';


const aboutUsArticles = () => {

    return (
        <div className={'ArticlesContainer'}>
            <AboutUsArticle/>
            <AboutUsArticle/>
            <AboutUsArticle/>
        </div>
    )
};


export default aboutUsArticles;