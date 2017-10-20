import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { AppShell } from './components/app-shell';
import { TimeNow } from './examples/simple-time';
import { TickingTime } from './examples/ticking-time';
import { WatchShell } from './components/watch-shell';
import { WatchFace1 } from './examples/digital-face-1';
import { WatchFace2 } from './examples/digital-face-2';
import { WatchFace3 } from './examples/digital-face-3';
import { WatchFace4 } from './examples/digital-face-4';
import { AnalogFace1 } from './examples/analog-face-1';
import { AnalogFace2 } from './examples/analog-face-2';

class App extends Component {
    render() {
        const examples = [
            { path: '/time-1', component: TimeNow, label: 'Simple Time' },
            { path: '/time-1.1', component: TickingTime, label: 'Ticking... Simple Time' },
            { path: '/watch-shell', component: WatchShell, label: 'Watch Shell' },
            { path: '/digital-face-1', component: WatchFace1, label: 'Digital Face 1' },
            { path: '/digital-face-2', component: WatchFace2, label: 'Digital Face 2' },
            { path: '/digital-face-3', component: WatchFace3, label: 'Digital Face 3' },
            { path: '/digital-face-4', component: WatchFace4, label: 'Digital Face 4' },
            { path: '/analog-face-1', component: AnalogFace1, label: 'Analog Face 1' },
            { path: '/analog-face-2', component: AnalogFace2, label: 'Analog Face 2' },
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
                                           <div style={{
                                               display: 'flex', flexDirection: 'row',
                                               alignItems: 'center', justifyContent: 'center',
                                               flexWrap: 'wrap',
                                               overflow: 'auto'
                                           }}>
                                               {
                                                   examples.map(ex => {
                                                       return (

                                                           <Link to={ex.path} key={ex.path} className="example-tile">
                                                               {ex.label}
                                                           </Link>
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


