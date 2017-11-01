import React from 'react';
import uxIndiaLogo from '../assets/uxindia.png';
import { Link } from 'react-router-dom';

let Footer = function () {
    return <div style={{
        background: '#ff3987',
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
    </div>;
};

let Header = function () {
    return <Link to={'/'}
                 style={{
                     textDecoration: 'none',
                     color: 'white',
                     background: '#ff3987',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     padding: 5,
                 }}>
        Let's Code to Prototype
    </Link>;
};

export function AppShell({ children }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
            height: '100vh'
        }}>
            <Header />

            <div style={{
                flex: 1,
                overflow: 'auto',
                display: 'flex'
            }}>
                {children}
            </div>

            <Footer />
        </div>
    );
}
