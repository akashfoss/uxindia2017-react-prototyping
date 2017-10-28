import React from 'react';
import { WatchShell } from '../components/watch-shell';

export function WatchFace2() {

    return (
        <WatchShell strapColor={'slateblue'}>
            {
                ({ config, time }) => {
                    return (
                        <g>
                            <text x={config.width / 2}
                                  y={config.height / 2}
                                  alignmentBaseline={'middle'}
                                  textAnchor={'middle'}
                                  fontSize={86}>
                                {time.format('h:mm')}
                                <tspan fontSize={30} fill={'#999'}>
                                    {time.format('A')}
                                </tspan>
                            </text>

                            <text x={config.width / 2}
                                  y={50}
                                  alignmentBaseline={'middle'}
                                  textAnchor={'middle'}
                                  fontSize={30}>
                                {time.format('ddd')}
                            </text>

                        </g>
                    );
                }
            }
        </WatchShell>
    );
}
