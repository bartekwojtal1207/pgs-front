import React, { Component } from 'react';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const naviagationItem = (props) => (
    <li className={'navigation-item'}>
        <NavLink exact={props.exact} to={props.link}>{props.children}</NavLink>
    </li>
);


export default naviagationItem;