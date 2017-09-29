import React from 'react';
import { MoodColorBar } from './mood-color';

export class ProgressBar extends React.Component {
    static defaultProps = {
        progress: 50,
        colorChangeFrequency: 250,
        minColorAngle: 0,
        maxColorAngle: 180
    };

    state = {
        value: 0
    };

    componentWillMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                value: (this.state.value + Math.random() * 5) % 100
            });
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { colorChangeFrequency, minColorAngle, maxColorAngle } = this.props;

        return (
            <div style={{
                height: '100%',
                backgroundColor: '#CCC',
                boxShadow: '0 0 5px #999',
                borderRadius: 15,
                overflow: 'hidden',
                position: 'relative'
            }}>
                <div style={{ width: `${this.state.value}%`, height: '100%' }}>
                    <MoodColorBar frequency={colorChangeFrequency}
                                  minAngle={minColorAngle}
                                  maxAngle={maxColorAngle} />
                </div>
                <div style={{
                    backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0), rgba(0,0,0,0.25))',
                    position: 'absolute',
                    left: 0, top: 0, right: 0, bottom: 0
                }} />
            </div>
        );
    }
}
