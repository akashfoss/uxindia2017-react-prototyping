import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { TickingTime, TimeNow } from './examples/simple-time';
import { WatchFace1 } from './examples/watch/face-1';
import { WatchShell } from './examples/watch/watch-shell';
import { WatchFace2 } from './examples/watch/face-2';
import { WatchFace3 } from './examples/watch/face-3';
import uxIndiaLogo from './uxindia.png';

class App extends Component {
    render() {
        const examples = [
            { path: '/time-1', component: TimeNow, label: 'Simple Time' },
            { path: '/time-1.1', component: TickingTime, label: 'Ticking... Simple Time' },
            { path: '/watch-shell', component: WatchShell, label: 'Watch Shell' },
            { path: '/watch-face-1', component: WatchFace1, label: 'Watch Face 1' },
            { path: '/watch-face-2', component: WatchFace2, label: 'Watch Face 2' },
            { path: '/watch-face-3', component: WatchFace3, label: 'Watch Face 3' },
        ];

        return (
            <BrowserRouter>
                <AppShell>
                    <Switch>
                        <Route path={'/'}
                               exact={true}
                               render={
                                   () => {
                                       return (
                                           <div style={{ display: 'flex', flexDirection: 'column' }}>
                                               {
                                                   examples.map(ex => {
                                                       return (
                                                           <Link to={ex.path} key={ex.path}>{ex.label}</Link>
                                                       );
                                                   })
                                               }
                                           </div>
                                       )
                                   }
                               }
                        />
                        {
                            examples.map(ex => {
                                return (
                                    <Route path={ex.path} component={ex.component} key={ex.path} />
                                );
                            })
                        }
                    </Switch>
                </AppShell>
            </BrowserRouter>
        );
    }
}

export default App;


function AppShell({ children }) {
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
                <a href="https://twitter.com/pavanpodila" style={{marginLeft: 10}}>Pavan Podila</a>
            </div>
            {children}
        </div>
    );
}
