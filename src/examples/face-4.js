import React from 'react';
import { WatchShell } from '../components/watch-shell';
import { Hand } from '../components/hand';
import { RadialTickMarks } from '../components/radial-tick-marks';
import { RadialTickLabels } from '../components/radial-tick-labels';

export function AnalogFace1() {
    return (
        <WatchShell>
            {
                ({ config, time }) => {
                    let hr = time.hours();
                    const hours = hr >= 12 ? hr - 12 : hr;
                    const minutes = time.minutes();
                    const seconds = time.seconds();

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

                                <Hand length={70} thickness={16}
                                      angle={(hours / 12) * 360 + (minutes / 60) * 30}
                                      color={'black'} />

                                <Hand length={90} thickness={6}
                                      angle={(minutes / 60) * 360}
                                      color={'#777'} />

                                <Hand length={100} thickness={1}
                                      angle={(seconds / 60) * 360}
                                      color={'#ccc'} />
                            </g>

                        </g>
                    );
                }
            }
        </WatchShell>
    );
}



