import React, { Component } from 'react';

export class MoodColorSheet extends Component {
    state = {
        colorAngle: 0
    };

    componentWillMount() {
        this.intervalId = setInterval(() => {
            this.setState({ colorAngle: (this.state.colorAngle + 5) % 360 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    render() {
        const color = `hsl(${this.state.colorAngle}, 100%, 50%)`;
        return (
            <div style={{ height: '100%', backgroundColor: color }}>

            </div>
        );
    }
}
