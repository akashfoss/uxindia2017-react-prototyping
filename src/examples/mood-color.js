import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { ColorBar } from './color-bar';

export class MoodColorBar extends Component {
    static defaultProps = {
        minAngle: 0,
        maxAngle: 360,
        factor: 5,
        frequency: 1000
    };

    state = {
        angle: 0,
        previousAngle: 0,
    };

    componentWillMount() {
        const { frequency } = this.props;

        this.intervalId = setInterval(this.changeMood, frequency);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.frequency !== this.props.frequency) {
            clearInterval(this.intervalId);
            this.intervalId = setInterval(this.changeMood, nextProps.frequency);
        }
    }

    changeMood = () => {
        const { factor, minAngle, maxAngle } = this.props;

        const nextAngle = Math.min(
            maxAngle,
            Math.max(
                minAngle,
                (this.state.angle + factor) % maxAngle
            )
        );

        this.setState({
            angle: nextAngle,
            previousAngle: this.state.angle
        });
    };

    componentWillUnmount() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    render() {
        return (
            <Motion defaultStyle={{ color: this.state.previousAngle }}
                    style={{ color: spring(this.state.angle) }}>
                {
                    (value) => (
                        <ColorBar color={`hsl(${value.color}, 100%, 50%)`} />
                    )
                }
            </Motion>
        );
    }
}
