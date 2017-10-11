import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export class TimeTeller extends React.Component {
    state = {
        time: moment()
    };

    static propTypes = {
        wind: PropTypes.bool,
        pause: PropTypes.bool,
    };

    componentWillMount() {
        this.setTimer(this.props);
    }

    tick() {
        const time = this.props.wind
            ? this.state.time.add(1, 'minutes').add(1, 'seconds')
            : moment();

        this.setState({ time });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.pause !== this.props.pause) {
            this.setTimer(newProps);
        } else if (newProps.wind !== this.props.wind) {
            this.setTimer(newProps);
        }
    }

    setTimer(props) {
        const { wind, pause } = props;

        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        if (pause) {
            return;
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
