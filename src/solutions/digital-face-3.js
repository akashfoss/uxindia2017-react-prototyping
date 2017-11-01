import React from 'react';
import { WatchShell } from '../components/watch-shell';
import { ProgressRing } from '../components/progress-ring';

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
                    const radius = config.width / 2;

                    return (
                        <g>
                            <g transform={`translate(${center.x}, ${center.y})`}>
                                <ProgressRing radius={radius - config.rim} thickness={config.or}
                                              color={strapColor}
                                              value={time.second()}
                                              unit="seconds" />
                            </g>

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

