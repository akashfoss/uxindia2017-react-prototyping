import React from 'react';
import PropTypes from 'prop-types';

/**
 * The zero position of hand is vertically upright at the 12 O'Clock mark
 */
class Hand extends React.Component {

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

export class HourHand extends React.Component {
    static propTypes = {
        time: PropTypes.object,
        ...Hand.propTypes,
    };

    render() {
        const { time } = this.props;
        const hours = time.hour() >= 12 ? time.hour() - 12 : time.hour();
        const angle = (hours / 12) * 360 + (time.minute() / 60) * 30;

        return (
            <Hand {...this.props} angle={angle} />
        );
    }
}

export class MinuteHand extends Hand {
    static propTypes = {
        time: PropTypes.object,
        ...Hand.propTypes,
    };

    render() {
        const { time } = this.props;
        const angle = (time.minute() / 60) * 360;

        return (
            <Hand {...this.props} angle={angle} />
        );
    }
}

export class SecondHand extends Hand {
    static propTypes = {
        time: PropTypes.object,
        ...Hand.propTypes,
    };

    render() {
        const { time } = this.props;
        const angle = (time.second() / 60) * 360;

        return (
            <Hand {...this.props} angle={angle} />
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

export function RoundedHandWithCircularEnd({ rect, color = 'red', strokeColor: edgeColor }) {
    const tipLength = 10;
    edgeColor = edgeColor || color;

    return (
        <g>
            <rect x={rect.x}
                  y={rect.y}
                  width={rect.width} height={rect.height - 1.5 * tipLength}
                  rx={rect.width / 2} ry={rect.width / 2}
                  stroke={edgeColor} strokeWidth={2}
                  fill={color} />

            <rect x={rect.x + rect.width / 2 - 1}
                  y={rect.y + rect.height - 1.5 * tipLength}
                  width={2} height={tipLength}
                  fill={edgeColor} />

            <circle cx={rect.x + rect.width / 2}
                    cy={rect.y + rect.height}
                    r={tipLength / 2}
                    stroke={edgeColor} strokeWidth={2}
                    fill={'none'} />

        </g>
    );

}
