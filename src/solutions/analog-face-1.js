import React from 'react';
import { WatchShell } from '../components/watch-shell';
import { HourHand, MinuteHand, SecondHand } from '../components/hand';
import { RadialTickMarks } from '../components/radial-tick-marks';
import { RadialTickLabels } from '../components/radial-tick-labels';

export function AnalogFace1() {
    return (
        <WatchShell>
            {
                ({ config, time }) => {
                    const radius = Math.min(config.width / 2, config.height / 2) - config.rim;

                    return (
                        <g>
                            <g transform={`translate(${config.width / 2}, ${config.height / 2})`}>
                                <RadialTickMarks radius={radius}
                                                 angleInterval={6}
                                                 length={5} thickness={1} />

                                <RadialTickMarks radius={radius}
                                                 angleInterval={30}
                                                 length={8} thickness={4} />

                                <RadialTickLabels radius={radius - 1.25 * config.rim}
                                                  angleInterval={30} />

                                <HourHand length={70} thickness={16}
                                          time={time}
                                          color={'black'} />

                                <MinuteHand length={90} thickness={6}
                                            time={time}
                                            color={'#777'} />

                                <SecondHand length={100} thickness={1}
                                            time={time}
                                            color={'#ccc'} />
                            </g>

                        </g>
                    );
                }
            }
        </WatchShell>
    );
}



