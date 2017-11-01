import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { AppShell } from './components/app-shell';
import { WatchShell } from './components/watch-shell';
import { TimeNow as ExTimeNow } from './solutions/simple-time';
import { TickingTime as ExTickingTime } from './solutions/ticking-time';
import { WatchFace1 as ExWatchFace1 } from './solutions/digital-face-1';
import { WatchFace2 as ExWatchFace2 } from './solutions/digital-face-2';
import { WatchFace3 as ExWatchFace3 } from './solutions/digital-face-3';
import { WatchFace4 as ExWatchFace4 } from './solutions/digital-face-4';
import { AnalogFace1 as ExAnalogFace1 } from './solutions/analog-face-1';
import { AnalogFace2 as ExAnalogFace2 } from './solutions/analog-face-2';
import { TimeNow } from './exercises/simple-time';
import { TickingTime } from './exercises/ticking-time';
import { WatchFace1 } from './exercises/digital-face-1';
import { WatchFace2 } from './exercises/digital-face-2';
import { WatchFace3 } from './exercises/digital-face-3';
import { WatchFace4 } from './exercises/digital-face-4';
import { AnalogFace1 } from './exercises/analog-face-1';
import { AnalogFace2 } from './exercises/analog-face-2';

const solutionsPrefix = '/solutions';
const routes = {
    examples: [
        { path: `${solutionsPrefix}/time-1`, component: ExTimeNow, label: 'Simple Time' },
        { path: `${solutionsPrefix}/time-2`, component: ExTickingTime, label: 'Ticking Time' },
        { path: `${solutionsPrefix}/watch-shell`, component: WatchShell, label: 'Watch Shell' },
        { path: `${solutionsPrefix}/digital-face-1`, component: ExWatchFace1, label: 'Digital Face 1' },
        { path: `${solutionsPrefix}/digital-face-2`, component: ExWatchFace2, label: 'Digital Face 2' },
        { path: `${solutionsPrefix}/digital-face-3`, component: ExWatchFace3, label: 'Digital Face 3' },
        { path: `${solutionsPrefix}/digital-face-4`, component: ExWatchFace4, label: 'Digital Face 4' },
        { path: `${solutionsPrefix}/analog-face-1`, component: ExAnalogFace1, label: 'Analog Face 1' },
        { path: `${solutionsPrefix}/analog-face-2`, component: ExAnalogFace2, label: 'Analog Face 2' }
    ],

    // Exercises //
    exercises: [
        { path: '/time-1', component: TimeNow, label: 'Simple Time' },
        { path: '/time-2', component: TickingTime, label: 'Ticking Time' },
        { path: '/watch-shell', component: WatchShell, label: 'Watch Shell' },
        { path: '/digital-face-1', component: WatchFace1, label: 'Digital Face 1' },
        { path: '/digital-face-2', component: WatchFace2, label: 'Digital Face 2' },
        { path: '/digital-face-3', component: WatchFace3, label: 'Digital Face 3' },
        { path: '/digital-face-4', component: WatchFace4, label: 'Digital Face 4' },
        { path: '/analog-face-1', component: AnalogFace1, label: 'Analog Face 1' },
        { path: '/analog-face-2', component: AnalogFace2, label: 'Analog Face 2' },
    ]
};

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <AppShell>
                    <Switch>
                        <Route path={'/'} exact={true} component={Dashboard} />
                        {
                            [].concat(routes.examples, routes.exercises).map(ex => {
                                return (
                                    <Route path={ex.path}
                                           key={ex.path}
                                           render={() => (
                                               <div style={{
                                                   flex: 1,
                                                   display: 'flex',
                                                   alignItems: 'center',
                                                   justifyContent: 'center'
                                               }}>
                                                   <ex.component />
                                               </div>
                                           )} />
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


function Dashboard() {
    return (
        <div style={{
            display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            {
                routes.exercises.map(ex => {
                    return (<ExampleCard ex={ex} />);
                })
            }
        </div>
    );

}

function ExampleCard({ ex }) {
    return (
        <div style={{ position: 'relative' }}
             key={ex.path}>
            <Link to={ex.path} className="example-tile">
                {ex.label}
            </Link>
            <Link to={`${solutionsPrefix}${ex.path}`}
                  style={{
                      position: 'absolute',
                      right: 25,
                      top: 20,
                      textDecoration: 'none'
                  }}>
                <span role="img" aria-label="Finish Line Checkered flag" style={{ fontSize: '2rem' }}>🏁</span>
            </Link>
        </div>
    );
}
