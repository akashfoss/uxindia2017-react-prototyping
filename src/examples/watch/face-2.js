import React from 'react';
import moment from 'moment';
import { WatchShell } from './watch-shell';

export function WatchFace2() {

    let m = moment();

    return (
        <WatchShell>
            {
                (c) => {
                    return (
                        <g>
                            <text x={c.width / 2}
                                  y={c.height / 2}
                                  alignmentBaseline={'middle'}
                                  textAnchor={'middle'}
                                  fontSize={80}>
                                {m.format('h:mm')}
                                <tspan fontSize={30} fill={'#999'}>
                                    {m.format('a')}
                                </tspan>
                            </text>

                            <text x={c.width / 2}
                                  y={50}
                                  alignmentBaseline={'middle'}
                                  textAnchor={'middle'}
                                  fontSize={30}>
                                {m.format('ddd')}
                            </text>

                            <text x={c.width / 2}
                                  y={80}
                                  alignmentBaseline={'middle'}
                                  textAnchor={'middle'}
                                  fontSize={22}>
                                {m.format('MMM DD')}
                            </text>

                            <text x={c.width / 2}
                                  y={350}
                                  alignmentBaseline={'middle'}
                                  textAnchor={'middle'}
                                  fontSize={22}>
                                Let's Code to Prototype
                            </text>
                        </g>
                    );
                }
            }
        </WatchShell>

    );
}
