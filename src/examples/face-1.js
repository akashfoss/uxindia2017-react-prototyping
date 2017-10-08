import React from 'react';
import { WatchShell } from '../components/watch-shell';

export function WatchFace1() {

    return (
        <WatchShell strapColor={'brown'}>
            {
                ({ config, time }) => {
                    return [
                        <text x={config.width / 2}
                              y={config.height / 2}
                              alignmentBaseline={'middle'}
                              textAnchor={'middle'}
                              fontSize={80}
                              key={'h:mm'}>
                            {time.format('h:mm')}

                        </text>,
                        <text x={config.width - 70}
                              y={config.height * 0.45}
                              alignmentBaseline={'middle'}
                              textAnchor={'start'}
                              fill={'#999'}
                              fontSize={40}
                              key={'ss'}>
                            {time.format('ss')}
                        </text>,

                        <text x={config.width - 70}
                              y={config.height * 0.55}
                              alignmentBaseline={'middle'}
                              textAnchor={'start'}
                              fill={'#999'}
                              fontSize={30}
                              key={'a'}>
                            {time.format('A')}
                        </text>

                    ];
                }
            }
        </WatchShell>
    );
}
