import React from 'react';
import uxIndiaLogo from '../uxindia.png';
import { Link } from 'react-router-dom';

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
                <a href="https://twitter.com/pavanpodila" style={{ marginLeft: 10 }}>Pavan Podila</a>
            </div>
            <Link to={'/'} style={{
                textDecoration: 'none',
                color: 'white',
            }}>
                <span style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    background: '#999',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5,
                }}>
                    Let's Code to Prototype
                </span>
            </Link>
            {children}
        </div>
    );
}
