import React from 'react';
import Aux from '../../hoc/Auxs';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import  './Layouts.css';

const layout = (props) => {
    return (
        <Aux>
            <Toolbar/>
            <main className={'Content'}>{props.children}</main>
        </Aux>
    )
};


export default layout;
