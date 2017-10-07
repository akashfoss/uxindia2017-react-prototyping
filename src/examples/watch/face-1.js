import React from 'react';
import { WatchShell } from './watch-shell';
import { Time } from '../time';

export function WatchFace1() {

    return (
        <Time>
            {
                (time) => {
                    return (
                        <WatchShell>
                            {
                                (c) => {
                                    return [
                                        <text x={c.width / 2}
                                              y={c.height / 2}
                                              alignmentBaseline={'middle'}
                                              textAnchor={'middle'}
                                              fontSize={80}
                                              key={'h:mm'}>
                                            {time.format('h:mm')}

                                        </text>,
                                        <text x={c.width - 70}
                                              y={c.height * 0.45}
                                              alignmentBaseline={'middle'}
                                              textAnchor={'start'}
                                              fill={'#999'}
                                              fontSize={40}
                                              key={'ss'}>
                                            {time.format('ss')}
                                        </text>,

                                        <text x={c.width - 70}
                                              y={c.height * 0.55}
                                              alignmentBaseline={'middle'}
                                              textAnchor={'start'}
                                              fill={'#999'}
                                              fontSize={30}
                                              key={'a'}>
                                            {time.format('a')}
                                        </text>

                                    ];
                                }
                            }
                        </WatchShell>
                    )
                }
            }
        </Time>
    );
}
