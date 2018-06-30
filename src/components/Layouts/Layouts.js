import React from 'react';
import Aux from '../../hoc/Auxs';
import  './Layouts.css';

const layout = (props) => {
    return (
        <Aux>
            <div>saddadasd</div>
            <main className={'Content'}>{props.children}</main>
        </Aux>
    )
};


export default layout;
