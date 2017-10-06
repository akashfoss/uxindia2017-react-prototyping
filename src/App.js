import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { MoodColorBar } from './examples/mood-color';
import { ColorBar } from './examples/color-bar';
import { ProgressBar } from './examples/progress-bar';
import { Clock } from './examples/clock/clock';

class App extends Component {
    render() {
        const examples = [
            { path: '/clock', component: ClockExample, label: 'Clock' },
            { path: '/color', component: ColorBarExample, label: 'Color Bar' },
            { path: '/mood', component: MoodBarExample, label: 'Mood Bar' },
            { path: '/progress', component: ProgressBarExample, label: 'Progress Bar' },
        ];

        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/'}
                           exact={true}
                           render={
                               () => (
                                   <div style={{
                                       height: '100vh',
                                       display: 'flex',
                                       flexDirection: 'column',
                                       alignItems: 'center',
                                       justifyContent: 'center'
                                   }}>
                                       {
                                           examples.map(ex => {
                                               return (
                                                   <Link to={ex.path} key={ex.path}>{ex.label}</Link>
                                               );
                                           })
                                       }
                                   </div>
                               )
                           } />
                    {
                        examples.map(ex => {
                            return (
                                <Route path={ex.path} component={ex.component} key={ex.path} />
                            );
                        })
                    }
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

/// Examples ///
function ClockExample() {
    return (
        <div style={{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Clock />
        </div>
    );
}

function ColorBarExample() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ColorBar />
        </div>
    );
}

function MoodBarExample() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <MoodColorBar />
        </div>
    );
}

function ProgressBarExample() {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{ width: '80vw', height: '30px' }}>
                <ProgressBar />
            </div>
        </div>
    );
}
