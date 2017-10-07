import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { TickingTime, TimeNow } from './examples/simple-time';
import { WatchFace1 } from './examples/watch/face-1';
import { WatchShell } from './examples/watch/watch-shell';
import { WatchFace2 } from './examples/watch/face-2';

class App extends Component {
    render() {
        const examples = [
            { path: '/time-1', component: TimeNow, label: 'Simple Time' },
            { path: '/time-1.1', component: TickingTime, label: 'Ticking... Simple Time' },
            { path: '/watch-shell', component: WatchShell, label: 'Watch Shell' },
            { path: '/watch-face-1', component: WatchFace1, label: 'Watch Face 1' },
            { path: '/watch-face-2', component: WatchFace2, label: 'Watch Face 2' },
        ];

        return (
            <BrowserRouter>
                <div style={{
                    display: 'flex',
                    width: '100vw',
                    height: '100vh',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
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
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
