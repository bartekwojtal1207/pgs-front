import React from 'react';
import pgsLogo from '../../assets/img/logo.svg';
import './Logo.css';

const logo = () => (
    <div className={'logo'}>
        <img src={pgsLogo} alt="logo pgs" className={'logo img-fluid'}/>
    </div>
);


export default logo;
