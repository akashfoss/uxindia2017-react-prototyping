import React from 'react';
import range from 'lodash/range';
import PropTypes from 'prop-types';

export class RadialTickLabels extends React.Component {
    static propTypes = {
        radius: PropTypes.number,
        angleInterval: PropTypes.number,
        label: PropTypes.func
    };

    render() {
        const { radius, angleInterval, label = SimpleLabel } = this.props;

        return (
            <g>
                {
                    range(360 / angleInterval).map(index => {
                        const rotation = (index * angleInterval - 90);
                        const textAngle = rotation * Math.PI / 180;
                        const x = radius * Math.cos(textAngle);
                        const y = radius * Math.sin(textAngle);

                        return (
                            <g key={index}>
                                {label({ x, y, index })}
                            </g>
                        );
                    })
                }
            </g>
        );
    }
}

function SimpleLabel({ x, y, index }) {
    return (
        <text x={x} y={y}
              alignmentBaseline={'middle'}
              textAnchor={'middle'}
              fill={'black'}>
            {index}
        </text>
    );

}
