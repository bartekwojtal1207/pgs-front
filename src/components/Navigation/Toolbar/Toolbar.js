import React, { Component } from 'react';
import Logo from '../../Logo/Logo';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => {


    return (
        <header className={'toolbar'}>
            <div className={'container'}>
                <Logo />
                <nav>
                    <NavigationItems />

                </nav>
            </div>
        </header>
    )
};


export default toolbar;