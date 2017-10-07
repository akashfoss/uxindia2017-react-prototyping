import React from 'react';
import uxIndiaLogo from '../uxindia.png';

export function AppShell({ children }) {
    return (
        <div style={{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                background: '#999',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 12,
                padding: 5
            }}>
                <img src={uxIndiaLogo}
                     alt="UXINDIA 2017"
                     height={30} />
                <span>Let's Code to Prototype</span>
                <a href="https://twitter.com/pavanpodila" style={{ marginLeft: 10 }}>Pavan Podila</a>
            </div>
            {children}
        </div>
    );
}
