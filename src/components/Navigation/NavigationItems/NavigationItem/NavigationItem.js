import React, { Component } from 'react';
import './NavigationItem.css';
import { Link } from 'react-router-dom';


const naviagationItem = (props) => (
    <li className={'navigation-item'}>
        <Link to={props.link} className={props.activeLink ? 'active' : null}>{props.children}</Link>
    </li>
);


export default naviagationItem;