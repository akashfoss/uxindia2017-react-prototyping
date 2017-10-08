import React from 'react';
import PropTypes from 'prop-types';

/**
 * The zero position of hand is vertically upright at the 12 O'Clock mark
 */
export class Hand extends React.Component {

    static propTypes = {
        length: PropTypes.number,
        angle: PropTypes.number,
        thickness: PropTypes.number,
        color: PropTypes.string,
        children: PropTypes.func
    };

    render() {
        const { length, thickness, color, children = SimpleHand, angle } = this.props;

        const rect = {
            x: -thickness / 2,
            y: -length,
            width: thickness,
            height: length
        };

        return (
            <g transform={`rotate(${angle})`}>
                {children({ rect, color })}
            </g>
        );
    }
}

function SimpleHand({ rect, color }) {
    const { x, y, width, height } = rect;
    const tipLength = 10;

    const tipPoints = [
        { x: x, y: y + tipLength },
        { x: x + width / 2, y: y },
        { x: x + width, y: y + tipLength }
    ].map(pt => `${pt.x},${pt.y}`)
        .join(' ');

    return (
        <g>
            <rect fill={color}
                  x={x} y={y + tipLength}
                  width={width} height={height - tipLength} />
            <polygon fill={color} points={tipPoints} />
        </g>
    );

}
