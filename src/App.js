import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { MoodColorBar } from './examples/mood-color';
import { ColorBar } from './examples/color-bar';
import { ProgressBar } from './examples/progress-bar';

class App extends Component {
    render() {
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
                                       <Link to={'/color'}>Color Bar</Link>
                                       <Link to={'/mood'}>Mood Bar</Link>
                                       <Link to={'/progress'}>Progress Bar</Link>
                                   </div>
                               )
                           } />
                    <Route path={'/color'}
                           exact={true}
                           render={
                               () => (
                                   <div style={{ width: '100vw', height: '100vh' }}>
                                       <ColorBar />
                                   </div>
                               )
                           } />
                    <Route path={'/mood'}
                           exact={true}
                           render={
                               () => (
                                   <div style={{ width: '100vw', height: '100vh' }}>
                                       <MoodColorBar />
                                   </div>
                               )
                           } />
                    <Route path={'/progress'}
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
                                       <div style={{ width: '80vw', height: '30px' }}>
                                           <ProgressBar />
                                       </div>
                                   </div>
                               )
                           } />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
