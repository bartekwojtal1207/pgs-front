import React from 'react';
import { Route } from 'react-router-dom';
import Aux from '../../hoc/Auxs';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import  './Layouts.css';
import Footer from '../Footer/Footer';

const layout = (props) => {
    let heightContent = props.heightDocs;

    return (
        <Aux>
            <Toolbar/>
            <main className={'Content'} style={{height: heightContent}}>
                {props.children}
            </main>
            <Footer/>
        </Aux>
    )
};


export default layout;
