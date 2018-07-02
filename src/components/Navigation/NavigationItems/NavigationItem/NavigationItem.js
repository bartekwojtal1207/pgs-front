import React, { Component } from 'react';
import './NavigationItem.css';


const naviagationItem = (props) => (
    <li className={'navigation-item'}>
        <a href={props.link} className={props.activeLink ? 'active' : null}>{props.children}</a>
    </li>
);


export default naviagationItem;