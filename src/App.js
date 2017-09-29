import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MoodColorSheet } from './examples/mood-color';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} component={MoodColorSheet} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
