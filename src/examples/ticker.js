import React from 'react';
import moment from 'moment';


export class Ticker extends React.Component {
    state = {
        time: moment()
    };

    componentWillMount() {
        this.intervalId = setInterval(() => {
            this.setState({ time: moment() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { children } = this.props;

        return children ? children(this.state.time) : null;
    }
}
