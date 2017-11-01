import React from 'react';
import { WatchShell } from '../components/watch-shell';

/*
TODO

- Add the Minute label

*/

export function WatchFace1() {

    return (
        <WatchShell strapColor={'brown'}>
            {
                ({ config, time }) => {
                    return (
                        <g>
                            <text x={config.width * 0.3}
                                  y={config.height / 2}
                                  textAnchor={'start'}
                                  fontSize={175}
                                  fill={'#555'}
                                  stroke={'brown'}
                                  strokeWidth={3}>
                                {time.format('hh')}
                            </text>
                        </g>
                    );
                }
            }
        </WatchShell>
    );
}
