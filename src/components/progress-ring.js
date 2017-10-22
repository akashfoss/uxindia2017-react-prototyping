import React from 'react';
import * as d3 from 'd3-shape';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

export class ProgressRing extends React.Component {
    static propTypes = {
        value: PropTypes.number,
        unit: PropTypes.oneOf(["seconds", "minutes", "hours"]),
        radius: PropTypes.number,
        thickness: PropTypes.number,
        color: PropTypes.string,
    };

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

