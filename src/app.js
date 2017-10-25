import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { AppShell } from './components/app-shell';
import { WatchShell } from './components/watch-shell';
// Examples //
// Exercises //
import { TimeNow as ExTimeNow, TimeNow } from './examples/simple-time';
import { TickingTime as ExTickingTime } from './examples/ticking-time';
import { WatchFace1 as ExWatchFace1 } from './examples/digital-face-1';
import { WatchFace2 as ExWatchFace2 } from './examples/digital-face-2';
import { WatchFace3 as ExWatchFace3 } from './examples/digital-face-3';
import { WatchFace4 as ExWatchFace4 } from './examples/digital-face-4';
import { AnalogFace1 as ExAnalogFace1 } from './examples/analog-face-1';
import { AnalogFace2 as ExAnalogFace2 } from './examples/analog-face-2';
import { TickingTime } from './exercises/ticking-time';
import { WatchFace1 } from './exercises/digital-face-1';
import { WatchFace2 } from './exercises/digital-face-2';
import { WatchFace3 } from './exercises/digital-face-3';
import { WatchFace4 } from './exercises/digital-face-4';
import { AnalogFace1 } from './exercises/analog-face-1';
import { AnalogFace2 } from './exercises/analog-face-2';

class App extends Component {
    render() {
        const routes = [
            { path: '/examples/time-1', component: ExTimeNow, label: 'Simple Time' },
            { path: '/examples/time-2', component: ExTickingTime, label: 'Ticking... Simple Time' },
            { path: '/examples/watch-shell', component: WatchShell, label: 'Watch Shell' },
            { path: '/examples/digital-face-1', component: ExWatchFace1, label: 'Digital Face 1' },
            { path: '/examples/digital-face-2', component: ExWatchFace2, label: 'Digital Face 2' },
            { path: '/examples/digital-face-3', component: ExWatchFace3, label: 'Digital Face 3' },
            { path: '/examples/digital-face-4', component: ExWatchFace4, label: 'Digital Face 4' },
            { path: '/examples/analog-face-1', component: ExAnalogFace1, label: 'Analog Face 1' },
            { path: '/examples/analog-face-2', component: ExAnalogFace2, label: 'Analog Face 2' },

            // Exercises //
            { path: '/time-1', component: TimeNow, label: 'Simple Time' },
            { path: '/time-2', component: TickingTime, label: 'Ticking... Simple Time' },
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
                                                   routes.filter(r => !r.path.startsWith('/example'))
                                                       .map(ex => {
                                                           return (

                                                               <Link to={ex.path} key={ex.path}
                                                                     className="example-tile">
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
                            routes.map(ex => {
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


