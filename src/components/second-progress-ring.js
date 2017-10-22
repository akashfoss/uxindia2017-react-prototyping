import React from 'react';
import * as d3 from 'd3-shape';
import { Motion, spring } from 'react-motion';

export class ProgressRing extends React.Component {
    static angleConverter = {
        seconds: value => (value / 60) * 2 * Math.PI,
        minutes: value => (value / 60) * 2 * Math.PI,
        hours: value => {
            let hours = value < 12 ? value : (value - 12);
            return (hours / 12) * 2 * Math.PI;
        }
    };

    render() {
        const { value, unit, color, radius, thickness } = this.props;

        const arc = d3.arc()
            .innerRadius(radius - thickness)
            .outerRadius(radius)
            .startAngle(0);

        return (
            <Motion defaultStyle={{ value: 0 }}
                    style={{ value: spring(value) }}>
                {
                    (style) => (
                        <path d={arc({ endAngle: ProgressRing.angleConverter[unit](style.value) })}
                              fill={color} />
                    )
                }
            </Motion>

        );
    }
}

