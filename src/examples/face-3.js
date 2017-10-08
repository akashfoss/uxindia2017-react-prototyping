import React from 'react';
import { WatchShell } from '../components/watch-shell';
import * as d3 from 'd3-shape';
import { Motion, spring } from 'react-motion';

const strapColor = '#637295';

export function WatchFace3() {

    return (
        <WatchShell strapColor={strapColor} faceColor={'#333'}>
            {
                ({ config, time }) => {
                    const center = {
                        x: config.width / 2,
                        y: config.height / 2
                    };
                    const radius = center.x;

                    const arc = d3.arc()
                        .innerRadius(radius - 100)
                        .outerRadius(radius - 20)
                        .startAngle(0);

                    return (
                        <g>
                            <Motion defaultStyle={{ seconds: 0 }}
                                    style={{ seconds: spring(time.seconds()) }}>
                                {
                                    (style) => (
                                        <path d={arc({ endAngle: (style.seconds / 59) * 2 * Math.PI })}
                                              fill={strapColor}
                                              transform={`translate(${center.x}, ${center.y})`} />
                                    )
                                }
                            </Motion>

                            <text x={config.width / 2}
                                  y={config.height / 2}
                                  alignmentBaseline={'middle'}
                                  textAnchor={'middle'}
                                  fill={'white'}
                                  fontSize={80}>
                                {time.format('h:mm')}
                                <tspan textAnchor={'start'}
                                       fill={'#CCC'}
                                       fontSize={30}>
                                    {time.format('A')}
                                </tspan>

                            </text>

                            <text x={config.width / 2}
                                  y={config.height - 30}
                                  alignmentBaseline={'middle'}
                                  textAnchor={'middle'}
                                  fill={'#CCC'}
                                  fontSize={24}>
                                {time.format('dddd, MMM DD')}
                            </text>

                        </g>
                    );
                }
            }
        </WatchShell>
    );
}
