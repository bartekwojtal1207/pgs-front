import React, { Component } from 'react';
import './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => (
    <ul className={'navigation-items'}>
        <NavigationItem exact={true} link={'/'} > ABOUT US </NavigationItem>
        <NavigationItem exact={false} link={'/skicams'} > SKICAMS </NavigationItem>
        <NavigationItem exact={false} link={'/contact'} > CONTACT </NavigationItem>
    </ul>
);

export default navigationItems;