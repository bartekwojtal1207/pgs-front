import React, { Component } from 'react';
import AboutUsArticle from './AboutUsArticle/AboutUsArticle';
import './AboutUsArticles.css';
// import ImageOne from 'https://picsum.photos/200/300/?random';
// import ImageTwo from 'https://picsum.photos/200/300/?random';
// import ImageThree from 'https://picsum.photos/200/300/?random';
//
const aboutUsArticles = () => {

    return (
        <div className={'container'}>
            <div className={'ArticlesContainer  offset-md-1 col-md-10'}>
                <AboutUsArticle image={'https://picsum.photos/260/150/?random'}/>
                <AboutUsArticle image={'https://picsum.photos/260/150/?random'}/>
                <AboutUsArticle image={'https://picsum.photos/260/150/?random'}/>
            </div>
        </div>

    )
};


export default aboutUsArticles;