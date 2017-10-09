import React from 'react';
import * as d3 from 'd3-shape';
import { Motion, spring } from 'react-motion';

export class SecondProgressRing extends React.Component {
    render() {
        const { seconds, color, radius, thickness } = this.props;

        const arc = d3.arc()
            .innerRadius(radius - thickness)
            .outerRadius(radius)
            .startAngle(0);

        return (
            <Motion defaultStyle={{ seconds: 0 }}
                    style={{ seconds: spring(seconds) }}>
                {
                    (style) => (
                        <path d={arc({ endAngle: (style.seconds / 59) * 2 * Math.PI })}
                              fill={color} />
                    )
                }
            </Motion>

        );
    }
}
