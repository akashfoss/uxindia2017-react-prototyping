import React from 'react';
import { WatchShell } from '../components/watch-shell';
import { Hand } from '../components/hand';
import { RadialTickMarks } from '../components/radial-tick-marks';
import { RadialTickLabels } from '../components/radial-tick-labels';

export function AnalogFace2() {
    return (
        <WatchShell strapColor={'orange'}>
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
                                                 length={5} thickness={1}
                                                 mark={({ rect }) => <rect {...rect} fill={'#777'} />} />

                                <RadialTickMarks radius={radius}
                                                 angleInterval={30}
                                                 length={10} thickness={6}
                                                 mark={
                                                     ({ rect }) => {
                                                         return (
                                                             <rect {...rect}
                                                                   fill={'orange'} />
                                                         );
                                                     }
                                                 } />

                                <RadialTickLabels radius={radius - 1.25 * config.rim}
                                                  angleInterval={30}
                                                  label={({ x, y, index }) => {
                                                      const label = index * 5;
                                                      return (
                                                          <text x={x} y={y}
                                                                textAnchor={'middle'}
                                                                alignmentBaseline={'middle'}
                                                                fontSize={11}
                                                                fill={'orange'}>
                                                              {`${label < 10 ? '0' : ''}${label}`}
                                                          </text>
                                                      );
                                                  }} />

                                <RadialTickLabels radius={radius - 3 * config.rim}
                                                  angleInterval={30}
                                                  label={({ x, y, index }) => {
                                                      return (
                                                          <text x={x} y={y}
                                                                textAnchor={'middle'}
                                                                alignmentBaseline={'middle'}
                                                                fontSize={16}>
                                                              {index === 0 ? '12' : `${index}`}
                                                          </text>
                                                      );
                                                  }} />

                                <Hand length={50} thickness={16}
                                      angle={(hours / 12) * 360 + (minutes / 60) * 30}
                                      color={'black'} />

                                <Hand length={70} thickness={6}
                                      angle={(minutes / 60) * 360}
                                      color={'#777'} />

                                <Hand length={100} thickness={1}
                                      angle={(seconds / 60) * 360}
                                      color={'#ccc'} />
                            </g>

                            <text x={config.width - config.or}
                                  y={config.height - 30}
                                  alignmentBaseline={'middle'}
                                  textAnchor={'end'}>
                                {time.format('MMM DD')}
                            </text>

                            <text x={config.or}
                                  y={config.height - 30}
                                  alignmentBaseline={'middle'}
                                  textAnchor={'start'}>
                                {time.format('dddd')}
                            </text>
                        </g>
                    )
                        ;
                }
            }
        </WatchShell>
    );
}



