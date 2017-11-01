import React from 'react';
import uxIndiaLogo from '../assets/uxindia.png';
import { Link } from 'react-router-dom';
import githubLogo from '../assets/github.png';


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
    return (
        <div style={{
            display: 'flex',
            background: '#ff3987',
            alignItems: 'center'
        }}>
            <Link to={'/'}
                  style={{
                      flex: 1,
                      textDecoration: 'none',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}>
                Let's Code to Prototype
            </Link>
            <a href="https://github.com/pixelingene/uxindia2017-react-prototyping" target="blank">
                <img src={githubLogo} height="32" alt="Github Logo"/>
            </a>
        </div>
    );
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
