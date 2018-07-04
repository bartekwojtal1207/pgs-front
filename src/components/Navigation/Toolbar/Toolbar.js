import React from 'react';
import Logo from '../../Logo/Logo';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => {

    return (
        <header className={'toolbar'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'offset-md-1 col-md-10'}>
                        <Logo/>
                        <nav>
                            <NavigationItems/>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
};


export default toolbar;