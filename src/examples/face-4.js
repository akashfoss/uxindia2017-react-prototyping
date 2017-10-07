import React from 'react';
import PropTypes from 'prop-types';
import { WatchShell } from '../components/watch-shell';
import range from 'lodash/range';

export function AnalogFace1() {
    return (
        <WatchShell strapColor={'orange'}>
            {
                ({ config, time }) => {
                    let hr = time.hours();
                    const hours = hr >= 12 ? hr - 12 : hr;
                    const minutes = time.minutes();
                    const seconds = time.seconds();

                    return (
                        <g>
                            <g transform={`translate(${config.width / 2}, ${config.height / 2})`}>
                                <TickMarks {...config} angle={30} length={20} thickness={6} color={'black'} />
                                <TickMarks {...config} angle={6} length={10} thickness={1} color={'#777'} />

                                <Hand {...config}
                                      length={70} thickness={16} tipLength={20}
                                      angle={(hours / 12) * 360 + (minutes / 60) * 30}
                                      color={'black'} />

                                <Hand {...config}
                                      length={90} thickness={6} tipLength={10}
                                      angle={(minutes / 60) * 360}
                                      color={'#777'} />

                                <Hand {...config}
                                      length={100} thickness={1}
                                      tipLength={5}
                                      angle={(seconds / 60) * 360}
                                      color={'#ccc'} />
                            </g>

                            <text x={config.width - config.or}
                                  y={config.height - 30}
                                  alignmentBaseline={'middle'}
                                  textAnchor={'end'}>
                                {time.format('MMM DD')}
                            </text>

                            <text x={config.or}
                                  y={config.height - 30}
                                  alignmentBaseline={'middle'}
                                  textAnchor={'start'}>
                                {time.format('dddd')}
                            </text>
                        </g>
                    );
                }
            }
        </WatchShell>
    );
}

function TickMarks(props) {
    const { width, height, angle, length, thickness, color } = props;
    const radius = Math.min(width / 2, height / 2) - 20;

    return (
        <g>
            {
                range(360 / angle).map(x => {
                    return (
                        <rect fill={color}
                              x={-thickness / 2} y={-radius}
                              width={thickness} height={length}
                              transform={`rotate(${x * angle})`}
                              key={x} />
                    );
                })
            }
        </g>
    );
}

TickMarks.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    angle: PropTypes.number,
    length: PropTypes.number,
    thickness: PropTypes.number,
    color: PropTypes.string,
};

/**
 * The zero position of hand is vertically upright at the 12 O'Clock mark
 * @param props
 * @returns {XML}
 * @constructor
 */
function Hand(props) {
    const { width, height, angle, length, tipLength, thickness, color } = props;
    const radius = Math.min(width / 2, height / 2) - Math.max(length, thickness, 30);

    return (
        <g transform={`rotate(${angle})`}>
            <rect fill={color}
                  x={-thickness / 2} y={-length + tipLength}
                  width={thickness} height={length - tipLength} />
            <polygon fill={color}
                     points={`${-thickness / 2},${-length + tipLength} ${0},${-length} ${thickness / 2},${-length + tipLength}`} />
        </g>
    );
}

Hand.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    angle: PropTypes.number,
    length: PropTypes.number,
    thickness: PropTypes.number,
    color: PropTypes.string,
};
