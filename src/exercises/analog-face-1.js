import React from 'react';
import { WatchShell } from '../components/watch-shell';
import { SecondHand } from '../components/hand';
import { RadialTickMarks } from '../components/radial-tick-marks';

export function AnalogFace1() {
    return (
        <WatchShell>
            {
                ({ config, time }) => {
                    const radius = Math.min(config.width / 2, config.height / 2) - config.rim;

                    return (
                        <g transform={`translate(${config.width / 2}, ${config.height / 2})`}>
                            <RadialTickMarks radius={radius}
                                             angleInterval={30}
                                             length={8} thickness={4} />
                            <SecondHand length={100} thickness={1}
                                        time={time}
                                        color={'#ccc'} />
                        </g>
                    );
                }
            }
        </WatchShell>
    );
}



