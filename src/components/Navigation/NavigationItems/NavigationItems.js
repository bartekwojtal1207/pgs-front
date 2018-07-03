import React, { Component } from 'react';
import './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => (

    <ul className={'navigation-items'}>
        <NavigationItem link={'/'} activeLink={true}> ABOUT US </NavigationItem>
        <NavigationItem link={'/skicams'} activeLink={false}> SKICAMS </NavigationItem>
        <NavigationItem link={'/contact'} activeLink={false}> CONTACT </NavigationItem>
    </ul>
);

export default navigationItems;