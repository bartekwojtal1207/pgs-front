import React from 'react';
import './Footer.css';

const footer = () => {
    return (
        <footer className={'footbar'}>
            <div className={'container'}>
                <div className={'row align-items-center'}>
                    <div className={'offset-md-1 col-md-10'}>
                        <div className={'footer-content'}>
                            <span>Powered by PSG</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default footer;