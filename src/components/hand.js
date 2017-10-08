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

export function RoundedHand({ rect, color }) {
    const tipLength = 10;

    return (
        <g>
            <rect x={rect.x + rect.width / 2}
                  y={rect.y}
                  width={2} height={tipLength}
                  fill={color} />

            <rect x={rect.x} y={rect.y + tipLength}
                  width={rect.width} height={rect.height - tipLength / 2}
                  rx={rect.width / 2} ry={rect.width / 2}
                  fill={'none'}
                  stroke={color} strokeWidth={2} />
        </g>
    );

}

export function RoundedHandWithCircularEnd({ rect, fill = 'none', stroke = 'none' }) {
    const tipLength = 10;

    return (
        <g>
            <rect x={rect.x}
                  y={rect.y}
                  width={rect.width} height={rect.height - 1.5 * tipLength}
                  rx={rect.width / 2} ry={rect.width / 2}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={stroke === 'none' ? 0 : 2} />

            <rect x={rect.x + rect.width / 2 - 1}
                  y={rect.y + rect.height - 1.5 * tipLength}
                  width={2} height={tipLength}
                  fill={fill} />

            <circle cx={rect.x + rect.width / 2}
                    cy={rect.y + rect.height}
                    r={tipLength / 2}
                    stroke={fill} strokeWidth={2}
                    fill={'none'} />

        </g>
    );

}
