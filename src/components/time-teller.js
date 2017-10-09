import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export class TimeTeller extends React.Component {
    state = {
        time: moment()
    };

    static propTypes = {
        wind: PropTypes.bool
    };

    componentWillMount() {
        this.setTimer(this.props.wind);
    }

    tick() {
        const time = this.props.wind ? this.state.time.add(1, 'minutes') : moment();

        this.setState({ time });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.wind != this.props.wind) {
            this.setTimer(newProps.wind);
        }
    }

    setTimer(wind) {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.intervalId = setInterval(() => this.tick(), wind ? 25 : 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { children } = this.props;

        return children ? children(this.state.time) : null;
    }
}
